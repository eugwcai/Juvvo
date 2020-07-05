$( document ).ready(function() {
    var scene, camera, clientClickX, clientClickY, renderer, selectedObj, INTERSECTED, mixer, clips;
    var animationModel, selectModel;
    var mouse = new THREE.Vector2();
    var hoveredColor = 0x00FFFF;
    var selectedColor = 0x39FF14;
    var whiteColor = 0xffffff;
    var objects = [];
    
    init();
    animate();
    window.requestAnimationFrame(render);

    function init() {
        var canvas = document.getElementById("canvas");
        scene = new THREE.Scene();
                            
        var WIDTH = window.innerWidth;
        var HEIGHT = window.innerHeight;
        raycaster = new THREE.Raycaster();

        renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(WIDTH, HEIGHT);
        canvas.appendChild(renderer.domElement);

        camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
        camera.position.set(0,0,25);
        scene.add(camera);

        window.addEventListener('resize', function() {
            var WIDTH = window.innerWidth;
            var HEIGHT = window.innerHeight;
            renderer.setSize(WIDTH, HEIGHT);
            camera.aspect = WIDTH / HEIGHT;
            camera.updateProjectionMatrix();
        });

        renderer.setClearColor(0xD3D3D3, 1.0);

        var light = new THREE.PointLight(whiteColor, 0.5);
        light.position.set(0,0,-50);
        scene.add(light);

        var light2 = new THREE.PointLight(whiteColor, 0.5);
        light2.position.set(0,0,150);
        scene.add(light2);

        var light3 = new THREE.PointLight(whiteColor, 0.5);
        light3.position.set(0,100,0);
        scene.add(light3);

        
        var loader2 = new THREE.OBJLoader();
        loader2.load('models/body_model.obj', function ( object ) {
            object.children.forEach(child => {
                objects.push(child);
                changeObjectColor(child, whiteColor);
            });
            selectModel = object;
            scene.add(object);
            },
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            function ( error ) {
                console.log( 'An error happened' );
            }
        );

        var loader = new THREE.GLTFLoader();
        loader.load('models/animation_model.glb', 	function ( gltf ) {
            mixer = new THREE.AnimationMixer( gltf.scene );
            addEndAnimationListener();

            clips = gltf.animations;
            gltf.scene.scale.set(3.26,3.26,3.26);       
            gltf.scene.position.set(-0.1,1.2,4);
            
            animationModel = gltf.scene;
            animationModel.visible = false;
            scene.add( gltf.scene );
        },
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            function ( error ) {
                console.log( 'An error happened' );
            }
        );

        controls = new THREE.OrbitControls(camera, renderer.domElement);

        window.addEventListener( 'mousemove', onMouseMove, false );
    }

    function animate() {
        requestAnimationFrame(animate);
        update();
        render();
    }

    function render() {
        renderer.render( scene, camera );
    }

    function update(){
        if(mixer){
        mixer.update( 0.015 );
        }
        var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
        vector.unproject(camera);
        var ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
        var intersects = ray.intersectObjects(objects, true);
        evaluateIntersects(intersects);
    }

    function onMouseMove( event ) {
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    }

    function addEndAnimationListener() {
        mixer.addEventListener("finished", function (e) {
            selectModel.visible = true;
            animationModel.visible = false;
        });
    }

    function evaluateIntersects(intersects){
        if (intersects.length > 0) { // intersection
            if (intersects[0].object != INTERSECTED) {
                if (INTERSECTED && INTERSECTED != selectedObj){ //reset color
                    changeObjectColor(INTERSECTED, whiteColor);
                }
                INTERSECTED = intersects[intersects.length-1].object;
                if(INTERSECTED.name.indexOf("Body_Model_Gum") < 0 && INTERSECTED != selectedObj){  // if object is not Body_Model_Gum or selected
                    $(".intersected-object").html('<span style="font-weight: bold">Body Part: </span>' + INTERSECTED.name);
                    cloneMaterial(INTERSECTED);
                    changeObjectColor(INTERSECTED, hoveredColor);
                }
            }
        } 
        else // no intersection 
        {
            if (INTERSECTED && INTERSECTED != selectedObj){
                changeObjectColor(INTERSECTED, whiteColor);
            }
            $(".intersected-object").html('');
            INTERSECTED = null;

        }
        controls.update();        
    }

    function showSymptomsAndResponse(obj){
        if(selectedObj == obj){ // deselect body part
            changeObjectColor(selectedObj, whiteColor);
            selectedObj = null;
            $("#form-container").slideToggle("slow", function() { });
        }else{ // select body part
            if(selectedObj){
                changeObjectColor(selectedObj, whiteColor); // reset previously selected body part
            }
            selectedObj = obj; // update and highlight
            changeObjectColor(obj, selectedColor);
            resetSymptomAndResponsePanel();
            if(obj.name.indexOf("Back") > -1){
                showPanels("#back");
            }else if(obj.name.indexOf("Quad") > -1){
                showPanels("#quad");
            }else if(obj.name.indexOf("Shoulder") > -1){
                showPanels("#shoulder");
            }else if(obj.name.indexOf("Elbow") > -1){
                showPanels("#elbow");
            }else if(obj.name.indexOf("Ankle") > -1){
                showPanels("#ankle");
            }else if(obj.name.indexOf("Knee") > -1){
                showPanels("#knee");
            }
        }
    }

    function resetSymptomAndResponsePanel(){
        $("#form-container").css('display', 'none');
        $("#back").css('display','none');
        $("#shoulder").css('display','none');
        $("#elbow").css('display','none');
        $("#ankle").css('display','none');
        $("#knee").css('display','none');
        $("#quad").css('display','none');
        $("#response-panel").css('display','none');
        $("#output").text("");
    }

    function showPanels(bodyPartSelector){
        $(bodyPartSelector).css('display','block');
        $("#response-panel").css('display','block');
        $("#form-container").slideToggle("slow");
    }

    function registerMouseClick(clientX, clientY){
        var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
        vector.unproject(camera);
        var ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
        var intersects = ray.intersectObjects(objects, true);
        if (intersects.length > 0) {
            if (INTERSECTED){
                changeObjectColor(INTERSECTED, whiteColor);
            }
            INTERSECTED = intersects[intersects.length-1].object;
            if(INTERSECTED.name.indexOf("Body_Model_Gum")<0){  
                showSymptomsAndResponse(INTERSECTED);        
            } 
        } 
    }

    function changeObjectColor(obj, color){
        if(Array.isArray(obj.material)){
            for(var i = 0; i < obj.material.length; i++){
                obj.material[i].color.setHex(color);
            }
        }else{
            obj.material.color.setHex(color);
        }

    }

    function cloneMaterial(obj){
        if(Array.isArray(obj.material)) {
            for(var i = 0; i < obj.material.length; i++){
                var matClone = obj.material[i].clone();
                obj.material[i] = matClone;
            }
        }else{
            var matClone = obj.material.clone();
            obj.material = matClone;
        }
    }

    document.addEventListener('mousedown', event => {
        clientClickX = event.offsetX;
        clientClickY = event.offsetY;
    });

    document.addEventListener('mouseup', event => {
        const x = event.offsetX;
        const y = event.offsetY;
        if(x != clientClickX || y != clientClickY){
            return;
        }
        registerMouseClick(x, y);
    });

    $("#animation-across-body").on('click', function(){
        selectModel.visible = false;
        animationModel.visible = true;
        clip = clips[0];
        var action = mixer.clipAction( clip );
        action.setLoop( THREE.LoopOnce );
        action.play().reset();
    });

    $("#animation-raise").on('click', function(){
        selectModel.visible = false;
        animationModel.visible = true;
        clip = clips[1];
        var action = mixer.clipAction( clip );
        action.setLoop( THREE.LoopOnce );
        action.play().reset();
    });

    $("#animation-quad").on('click', function(){
        selectModel.visible = false;
        animationModel.visible = true;
        clip = clips[2];
        var action = mixer.clipAction( clip );
        action.setLoop( THREE.LoopOnce );
        action.play().reset();
    });

    $(".panel-toggle").on('click', function(){
        changeObjectColor(selectedObj, whiteColor);
        selectedObj = null;
        $("#form-container").slideToggle("slow", function() { });
    });
});