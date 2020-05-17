$( document ).ready(function() {
    var scene, camera, renderer, raycaster, INTERSECTED;
    var mouse = new THREE.Vector2();
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
        camera.position.set(0,0,30);
        scene.add(camera);

        window.addEventListener('resize', function() {
            var WIDTH = window.innerWidth;
            var HEIGHT = window.innerHeight;
            renderer.setSize(WIDTH, HEIGHT);
            camera.aspect = WIDTH / HEIGHT;
            camera.updateProjectionMatrix();
        });

        renderer.setClearColor(0xD3D3D3, 1.0);

        var light = new THREE.PointLight(0xffffff, 0.5);
        light.position.set(0,0,-50);
        scene.add(light);

        var light2 = new THREE.PointLight(0xffffff, 0.5);
        light2.position.set(0,0,150);
        scene.add(light2);

        var light3 = new THREE.PointLight(0xffffff, 0.5);
        light3.position.set(0,100,0);
        scene.add(light3);

        var loader = new THREE.OBJLoader();
        loader.load('models/body_model.obj', function ( object ) {
            object.children.forEach(child => {
                objects.push(child);
                changeObjectColor(child, 0xffffff);
            });
            scene.add(object);
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

    function update(){
        var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
        vector.unproject(camera);
        var ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
        var intersects = ray.intersectObjects(objects, true);
    
        if (intersects.length > 0) {
            if (intersects[0].object != INTERSECTED) {
                if (INTERSECTED){
                    changeObjectColor(INTERSECTED, 0xffffff);
                }
                INTERSECTED = intersects[intersects.length-1].object;
                
                cloneMaterial(INTERSECTED);
                changeObjectColor(INTERSECTED, 0x39FF14);
            }
        } 
        else 
        {
            if (INTERSECTED){
                changeObjectColor(INTERSECTED, 0xffffff);
            }
            INTERSECTED = null;

        }
        controls.update();        
    }

    function onMouseMove( event ) {
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    }

    function render() {
        renderer.render( scene, camera );
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
});