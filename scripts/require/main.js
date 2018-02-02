
require.config({
    //To get timely, correct error triggers in IE, force a define/shim exports check.
    //enforceDefine: true,
    baseUrl: "./scripts",
    paths: {
        "text": "require/text", //text is required
        "json": "require/json", //alias to plugin
        "jquery_js": "jquery/jquery-3.3.1",
        "jquery_main": "jquery/main",
        "three_js": "three/three.min",
        "three_main": "three/main",
        "panolens_js": "panolens/panolens.min.modify",
        "panolens_main": "panolens/main",
        "panolens_manager_js": "panolens_manager/panolens_manager",
        "panolens_manager_main": "panolens_manager/main",
        "data_json": "../data.json",
    },
    shim: {


    },
    // 開發時 不使用 urlArgs
    urlArgs: "bust=" + (new Date()).getTime(),
    waitSeconds: 10000,
});

require([
    "json!data_json",
    "jquery_main",
    "panolens_manager_main",
], function (data) {
    //setTimeout 可避免 Opera 在DOM尚未完備時 偷跑 
    setTimeout(function () {
        var bar = document.querySelector("#bar");
        var container = document.querySelector("#container");
        var viewerOption = {
            container: container,		// A DOM Element container
            controlBar: true, 			// Vsibility of bottom control bar
            controlButtons: ["fullscreen", "setting", "video"],	// Buttons array in the control bar. Default to ["fullscreen", "setting", "video"]
            autoHideControlBar: false,		// Auto hide control bar
            autoHideInfospot: false,			// Auto hide infospots
            horizontalView: false,			// Allow only horizontal camera control
            cameraFov: 90,				// Camera field of view in degree
            reverseDragging: false,			// Reverse orbit control direction
            enableReticle: false,			// Enable reticle for mouseless interaction
            dwellTime: 1500,			// Dwell time for reticle selection in millisecond
            autoReticleSelect: true,		// Auto select a clickable target after dwellTime
            viewIndicator: false,			// Adds an angle view indicator in upper left corner
            indicatorSize: 30,			// Size of View Indicator
            output: "console"			// Whether and where to output infospot position. Could be "console" or "overlay"
        };

       var manager = new PANOLENS_MANAGER(viewerOption, data, container, bar);


    }, 0);
});