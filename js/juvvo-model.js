$( document ).ready(function() {

    // Set up the scene, camera, and renderer as global variables.
    var scene, camera, renderer;

    init();
    animate();

    // Sets up the scene.
    function init() {
        var canvas = document.getElementById("canvas");
        var leftContainer = document.getElementById("left-container");

        // Create the scene and set the scene size.
    scene = new THREE.Scene();
                        
    var WIDTH = leftContainer.clientWidth - 100;
    var HEIGHT = leftContainer.clientHeight;

    // Create a renderer and add it to the DOM.
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(WIDTH, HEIGHT);
    canvas.appendChild(renderer.domElement);

    // Create a camera, zoom it out from the model a bit, and add it to the scene.
    camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
    camera.position.set(0,0,30);
    scene.add(camera);

    // Create an event listener that resizes the renderer with the browser window.
    window.addEventListener('resize', function() {
        var WIDTH = leftContainer.clientWidth - 100;
        var HEIGHT = leftContainer.clientHeight;
        renderer.setSize(WIDTH, HEIGHT);
        camera.aspect = WIDTH / HEIGHT;
        camera.updateProjectionMatrix();
    });

    // Set the background color of the scene.
    renderer.setClearColor(0xD3D3D3, 1.0);


    // Create a light, set its position, and add it to the scene.
    var light = new THREE.PointLight(0xffffff);
    light.position.set(-100,200,100);
    scene.add(light);

    // instantiate a loader
        var loader = new THREE.OBJLoader();

        // load a resource
        loader.load(
            // resource URL
            'models/body_model.obj',
            // called when resource is loaded
            function ( object ) {

                scene.add( object );

            },
            // called when loading is in progresses
            function ( xhr ) {

                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

            },
            // called when loading has errors
            function ( error ) {

                console.log( 'An error happened' );

            }
        );



    // Add OrbitControls so that we can pan around with the mouse.
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    }


    // Renders the scene and updates the render as needed.
    function animate() {

    // Read more about requestAnimationFrame at http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    requestAnimationFrame(animate);
    
    // Render the scene.
    renderer.render(scene, camera);
    controls.update();

    }

});