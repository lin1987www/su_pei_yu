
require.config({
    //To get timely, correct error triggers in IE, force a define/shim exports check.
    //enforceDefine: true,
    baseUrl: './scripts',
    paths: {
        'three_js': 'three/three.min',
        'three_main': 'three/main',
        'panolens_js': 'panolens/panolens-offline.modify',
        'panolens_main': 'panolens/main'
    },
    shim: {



    },
    waitSeconds: 10000
});

require([
    'three/TrackballControls',
    'panolens_main',

], function (m) {
    //setTimeout 可避免 Opera 在DOM尚未完備時 偷跑 
    setTimeout(function () {

        var panorama1, panorama2, panorama3, viewer, container, infospot;
        var bar = document.querySelector('#bar');

        function onProgressUpdate(event) {
            var percentage = event.progress.loaded / event.progress.total * 100;
            bar.style.width = percentage + "%";
            if (percentage >= 100) {
                bar.classList.add('hide');
                setTimeout(function () {
                    bar.style.width = 0;
                }, 1000);
            }
        }




        container = document.querySelector('#container');

        panorama1 = new PANOLENS.ImagePanorama('images/1.jpg');
        panorama1.addEventListener('progress', onProgressUpdate);
        var lookAt1 = new THREE.Vector3(-4791.4, -470.28, -1315.23);
        panorama1.addEventListener('enter-fade-start', function (event) {
            viewer.tweenControlCenter(lookAt1, 0);
        });

        panorama2 = new PANOLENS.ImagePanorama('images/2.jpg');
        panorama2.addEventListener('progress', onProgressUpdate);
        panorama2.addEventListener('enter-fade-start', function (event) {
            viewer.tweenControlCenter(new THREE.Vector3(-3095.97, -69.23, -3914.42), 0);
        });

        panorama3 = new PANOLENS.ImagePanorama('images/3.jpg');
        panorama3.addEventListener('progress', onProgressUpdate);
        panorama3.addEventListener('enter-fade-start', function (event) {
            viewer.tweenControlCenter(new THREE.Vector3(2154.81, 529.90, 4470.48), 0);
        });


        //infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
        //infospot.position.set(0, -2000, -5000);
        //panorama1.add(infospot);


        panorama1.link(panorama2, new THREE.Vector3(-4888.91, -86.68, 1029.39));
        panorama2.link(panorama3, new THREE.Vector3(-2967.07, -1298.68, -3797.13));
        panorama2.link(panorama1, new THREE.Vector3(4806.78, 344.09, 1300.74));
        panorama3.link(panorama2, new THREE.Vector3(4672.92, -218.58, -1735.71));

        viewer = new PANOLENS.Viewer(
            {
                container: container,		// A DOM Element container
                controlBar: true, 			// Vsibility of bottom control bar
                controlButtons: [],			// Buttons array in the control bar. Default to ['fullscreen', 'setting', 'video']
                autoHideControlBar: false,		// Auto hide control bar
                autoHideInfospot: false,			// Auto hide infospots
                horizontalView: false,			// Allow only horizontal camera control
                cameraFov: 30,				// Camera field of view in degree
                reverseDragging: false,			// Reverse orbit control direction
                enableReticle: false,			// Enable reticle for mouseless interaction
                dwellTime: 1500,			// Dwell time for reticle selection in millisecond
                autoReticleSelect: true,		// Auto select a clickable target after dwellTime
                viewIndicator: false,			// Adds an angle view indicator in upper left corner
                indicatorSize: 30,			// Size of View Indicator
                // output: 'console'			// Whether and where to output infospot position. Could be 'console' or 'overlay'
            }
        );
        viewer.add(panorama1, panorama2, panorama3);

       

        controls = new THREE.TrackballControls(viewer.camera);
        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;
        controls.noZoom = false;
        controls.noPan = false;
        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.3;
        controls.keys = [65, 83, 68];
        controls.addEventListener('change', render);

        function render() {
            viewer.renderer.render(viewer.scene, viewer.camera);
        }

        // Maunal Set Panorama
        var button1 = document.querySelector('#btn1');
        var button2 = document.querySelector('#btn2');
        var button3 = document.querySelector('#btn3');

        // Enter panorama when load completes
        function onButtonClick(targetPanorama) {
            bar.classList.remove('hide');
            viewer.setPanorama(targetPanorama);
        }

        button1.addEventListener('click', onButtonClick.bind(this, panorama1));
        button2.addEventListener('click', onButtonClick.bind(this, panorama2));
        button3.addEventListener('click', onButtonClick.bind(this, panorama3));



    }, 0);


});