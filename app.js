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
        'MainNavigationView',
        'MainTabPanel',
        'CurrentMoviesPanel',
        'AllMoviesPanel',
        'ConfigurationPanel',
        'MovieDetailForm'
    ],

    // // initial; good
    // launch: function() {
    //     var mainTabPanel = Ext.create('StayOrLeave.view.MainTabPanel');
    //     Ext.Viewport.add([
    //         mainTabPanel
    //     ]);
    // }

    launch: function() {
        var mainNavigationView = Ext.create('StayOrLeave.view.MainNavigationView');
        Ext.Viewport.add([
            mainNavigationView
        ]);
    },

    init: function() {
        // create these for the tab panel
        Ext.create('StayOrLeave.view.CurrentMoviesPanel');
        Ext.create('StayOrLeave.view.AllMoviesPanel');
        Ext.create('StayOrLeave.view.ConfigurationPanel');
    }

    // launch: function() {
    //     var mainTabPanel = Ext.create('StayOrLeave.view.MainTabPanel');
    //     var view = Ext.create('Ext.NavigationView', {
    //         fullscreen: true,
    //         items: [{
    //             title: 'Stay or Leave',
    //             items: [
    //                 mainTabPanel
    //             ]
    //         }]
    //     });
    // }




});
















