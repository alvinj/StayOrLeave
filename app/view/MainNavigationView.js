Ext.define('StayOrLeave.view.MainNavigationView', {
	extend: 'Ext.navigation.View',
	alias: 'widget.mainNavigationView',

	// bad practice (but works for now)
	id: 'MainNavigationView',

	// make the tab panel an item of the nav view
	config: {
		items: [
			{
				xtype: 'mainTabPanel',
				title: 'Stay Or Leave',
				useTitleForBackButtonText: true,
		        fullscreen : true
		    }
   		]
	},

    initialize: function() {
        this.callParent(arguments);
    }



});

