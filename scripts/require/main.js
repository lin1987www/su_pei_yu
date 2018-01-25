
require.config({
    //To get timely, correct error triggers in IE, force a define/shim exports check.
    //enforceDefine: true,
    baseUrl: './scripts',
    /* paths、shim 必須跟 此資料夾中的 config.js 設定相同，否則最佳化會有問題。 */
    paths: {
        
    },
    shim: {
        'panolens/main': {
            deps: ['three/main']
        },
    },
    waitSeconds: 10000
});

require([
    'panolens/main',
], function (m) {
    //setTimeout 可避免 Opera 在DOM尚未完備時 偷跑 
    setTimeout(function () {

    }, 0);
});