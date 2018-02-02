(function (root, factory) {

    define("panolens_manager_js", ["exports", "panolens_main"], function (exports) {
        return factory(exports);
    });

}(typeof self !== "undefined" ? self : this, function (exports) {
    'use strict';

    var defaultData = {
        "imageBaseUrl": "images/",
        "imageExt": ".jpg",
        "images": [],
        "links": [],
    };

    // default link style
    var defaultLinkStyle = {
        "image": PANOLENS.DataImage.Arrow,
        "scale": 300
    };


    var parentClass = Object;

    var PanolensManager = function (viewerOption, data, container, processBar) {
        parentClass.call(this);
        var self = this;

        this.viewerOption = viewerOption;
        data = $.extend(defaultData, data);
        this.data = data;

        this.container = container;
        this.processBar = processBar;

        var imageNames = [];
        this.imageNames = imageNames;

        var nameToImage = new Map();
        this.nameToImage = nameToImage;

        for (var imageIndex in data.images) {
            var image = data.images[imageIndex];
            var imageName = image.name;
            imageNames.push(image.name);
            nameToImage.set(imageName, image);
        }

        var linksFiltered = [];
        this.linksFiltered = linksFiltered;
        for (var linkIndex in data.links) {
            var link = data.links[linkIndex];
            var from = link.from;
            var to = link.to;
            if (imageNames.indexOf(from) >= 0 && imageNames.indexOf(to) >= 0) {
                linksFiltered.push(link);
            }
        }

        this.lastPanorama = null;
        var nameToPanorama = new Map();
        this.nameToPanorama = nameToPanorama;
        var panoramaToName = new Map();
        this.panoramaToName = panoramaToName;

        var viewer = new PANOLENS.Viewer(viewerOption);
        this.viewer = viewer;

        var original_outputInfospotPosition = viewer.outputInfospotPosition;
        viewer.outputInfospotPosition = function () {
            original_outputInfospotPosition.apply(viewer, arguments);

            var intersects, point, panoramaWorldPosition, outputPosition;
            intersects = this.raycaster.intersectObject(this.panorama, true);

            if (intersects.length > 0) {
                var intersect = intersects[0];
                point = intersect.point;
                panoramaWorldPosition = this.panorama.getWorldPosition();

                var camera = this.getCamera();
                var vFOV = THREE.Math.degToRad(camera.fov); // convert vertical fov to radians
                var height = 2 * Math.tan(vFOV / 2) * intersect.distance ; // visible height
                var width = height * camera.aspect;           // visible width

                // Panorama is scaled -1 on X axis
                outputPosition = new THREE.Vector3(
                    -(point.x - panoramaWorldPosition.x).toFixed(2),
                    (point.y - panoramaWorldPosition.y).toFixed(2),
                    (point.z - panoramaWorldPosition.z).toFixed(2)
                );
                /*
                switch (this.options.output) {
                    case 'console':
                        console.info(outputPosition.x + ', ' + outputPosition.y + ', ' + outputPosition.z);
                        break;
                    case 'overlay':
                        this.outputDivElement.textContent = outputPosition.x + ', ' + outputPosition.y + ', ' + outputPosition.z;
                        break;
                    default:
                        break;
                }
                */
            }
        }


        var onProgressUpdate = function (event) {
            var bar = processBar;
            if (bar) {
                var percentage = event.progress.loaded / event.progress.total * 100;
                bar.style.width = percentage + "%";
                if (percentage >= 100) {
                    bar.classList.add("hide");
                    setTimeout(function () {
                        bar.style.width = 0;
                    }, 1000);
                }
            }
        };

        var newVector3 = function (v) {
            var vector = null;
            if (v) {
                var args = [null].concat(v);
                vector = new (Function.prototype.bind.apply(THREE.Vector3, args));
            }
            return vector;
        };

        var getImageByName = function (imageName) {
            if (name == null) {
                return null;
            } else {
                var image = nameToImage.get(imageName);
                return image;
            }
        };

        var getImageByPanorama = function (panorama) {
            if (panorama == null) {
                return null;
            } else {
                var imageName = panoramaToName.get(panorama);
                var image = getImageByName(imageName);
                return image;
            }
        };

        var onEnterFadeStart = function (event) {
            var lastPanoramaImage = getImageByPanorama(this.lastPanorama);
            var nowPanorama = event.target;
            var nowPanoramaImage = getImageByPanorama(nowPanorama);

            var lookAt = null;

            if (lastClickedLink && lastClickedLink.lookAt) {
                lookAt = newVector3(lastClickedLink.lookAt);
            } else if (nowPanoramaImage.lookAt) {
                lookAt = newVector3(nowPanoramaImage.lookAt);
            }

            if (lookAt) {
                viewer.tweenControlCenter(lookAt, 0);
            }

        };

        var getPanorama = function (name) {
            var panorama = nameToPanorama.get(name);
            if (panorama == null) {
                var imagePath = data.imageBaseUrl + name + data.imageExt;
                panorama = new PANOLENS.ImagePanorama(imagePath);
                panorama.addEventListener("progress", onProgressUpdate);
                panorama.addEventListener("enter-fade-start", onEnterFadeStart);

                nameToPanorama.set(name, panorama);
                panoramaToName.set(panorama, name);
            }
            return panorama;
        };

        var lastClickedInfoSpot = null;
        var lastClickedLink = null;
        var linkToInfoSopt = new Map();
        this.linkToInfoSopt = linkToInfoSopt;
        var infoSpotToLink = new Map();
        this.infoSpotToLink = infoSpotToLink;
        var OnClickInfoSpot = function (event) {
            var infoSpot = event.target;
            lastClickedInfoSpot = infoSpot;
            lastClickedLink = infoSpotToLink.get(infoSpot);
        };
        for (var linkIndex in linksFiltered) {
            var link = linksFiltered[linkIndex];
            var from = link.from;
            var to = link.to;
            var position = link.position;
            var linkPosition = newVector3(position);
            var panoramaFrom = getPanorama(from);
            var imageFrom = getImageByName(from);
            var panoramaTo = getPanorama(to);

            var linkStyle = null;
            // globle link style
            linkStyle = $.extend(linkStyle, data.linkStyle);
            // image link style
            linkStyle = $.extend(linkStyle, imageFrom.linkStyle);
            // link link style
            linkStyle = $.extend(linkStyle, link.linkStyle);
            if (linkStyle.image) {
                linkStyle.image = data.imageBaseUrl + linkStyle.image;
            }
            linkStyle = $.extend(defaultLinkStyle, linkStyle);

            panoramaFrom.link(panoramaTo, linkPosition, linkStyle.scale, linkStyle.image);

            var lastInfoSpotsIndex = panoramaFrom.linkedSpots.length - 1;
            var infoSpot = panoramaFrom.linkedSpots[lastInfoSpotsIndex];
            infoSpot.addEventListener("click", OnClickInfoSpot);

            linkToInfoSopt.set(link, infoSpot);
            infoSpotToLink.set(infoSpot, link);
        }

        for (var imageIndex in data.images) {
            var image = data.images[imageIndex];
            var imageName = image.name;
            var panorama = getPanorama(imageName);
            viewer.add(panorama);
        }
    };

    PanolensManager.prototype = Object.create(parentClass.prototype);
    PanolensManager.prototype.constructor = PanolensManager;





    /*
    panorama1 = new PANOLENS.ImagePanorama("images/1.jpg");
    panorama1.addEventListener("progress", onProgressUpdate);
    var lookAt1 = new THREE.Vector3(-4791.4, -470.28, -1315.23);
    panorama1.addEventListener("enter-fade-start", function (event) {
        viewer.tweenControlCenter(lookAt1, 0);
    });

    panorama2 = new PANOLENS.ImagePanorama("images/2.jpg");
    panorama2.addEventListener("progress", onProgressUpdate);
    panorama2.addEventListener("enter-fade-start", function (event) {
        viewer.tweenControlCenter(new THREE.Vector3(-3095.97, -69.23, -3914.42), 0);
    });

    panorama3 = new PANOLENS.ImagePanorama("images/3.jpg");
    panorama3.addEventListener("progress", onProgressUpdate);
    panorama3.addEventListener("enter-fade-start", function (event) {
        viewer.tweenControlCenter(new THREE.Vector3(2154.81, 529.90, 4470.48), 0);
    });

    //infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
    //infospot.position.set(0, -2000, -5000);
    //panorama1.add(infospot);

    panorama1.link(panorama2, new THREE.Vector3(-4888.91, -86.68, 1029.39));
    panorama2.link(panorama3, new THREE.Vector3(-2967.07, -1298.68, -3797.13));
    panorama2.link(panorama1, new THREE.Vector3(4806.78, 344.09, 1300.74));
    panorama3.link(panorama2, new THREE.Vector3(4672.92, -218.58, -1735.71));

    viewer.add(panorama1, panorama2, panorama3);
    */

    /*
    // Maunal Set Panorama
    var button1 = document.querySelector("#btn1");
    var button2 = document.querySelector("#btn2");
    var button3 = document.querySelector("#btn3");
    // Enter panorama when load completes
    function onButtonClick(targetPanorama) {
        bar.classList.remove("hide");
        viewer.setPanorama(targetPanorama);
    }
    button1.addEventListener("click", onButtonClick.bind(this, panorama1));
    button2.addEventListener("click", onButtonClick.bind(this, panorama2));
    button3.addEventListener("click", onButtonClick.bind(this, panorama3));
    */



    return PanolensManager;
}));