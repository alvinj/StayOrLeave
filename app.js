Ext.application({

    name: 'StayOrLeave',

    // "css":  [
    //      {
    //       //"path": "resources/css/sencha-touch.css",
    //       "path": "/stayorleave/resources/css/cupertino.css",
    //       "path": "/stayorleave/resources/css/app.css",
    //       "platform": ["ios"],
    //       "Theme": "cupertino"
    //      }
    // ],

    // startupImage: {
    //     '320x460': '/stayorleave/resources/startup/320x460.jpg',
    //     '640x920': '/stayorleave/resources/startup/640x920.png',
    //     '640x1096': '/stayorleave/resources/startup/640x1096.png',
    //     '768x1004': '/stayorleave/resources/startup/768x1004.png',
    //     '748x1024': '/stayorleave/resources/startup/748x1024.png',
    //     '1536x2008': '/stayorleave/resources/startup/1536x2008.png',
    //     '1496x2048': '/stayorleave/resources/startup/1496x2048.png'
    // },

    // // see http://miamicoder.com/2012/how-to-define-application-icons-in-sencha-touch/
    // icon: "images/minime.png",

    // fullscreen: true,
    // isIconPrecomposed: false,
    // statusBarStyle: 'translucent',

    models: [
        'Movie'
    ],

    stores: [
        'MovieStore',
        'AllMoviesStore'
    ],

    controllers: [
        'MainController'
    ],

    views: [
        'MainTabPanel',
        'CurrentMoviesPanel',
        'AllMoviesPanel',
        'ConfigurationPanel',
        'MovieDetailPanel'
    ],

    launch: function() {
        var mainTabPanel = Ext.create('StayOrLeave.view.MainTabPanel');
        Ext.Viewport.add([
            mainTabPanel
        ]);
    }

});






