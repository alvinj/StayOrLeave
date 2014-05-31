Ext.define('StayOrLeave.view.MainTabPanel', {
    extend: 'Ext.tab.Panel',   // or Ext.TabPanel

    xtype:  'mainTabPanel',
    alias:  'widget.mainTabPanel',
    // id: 'mainTabPanel',

    config: {
        fullscreen : true,
        tabBar: {
            docked: 'bottom'
        }
    },

    initialize: function() {
        this.callParent(arguments);
        // the main panels that will show up in the bottom toolbar
        this.add(Ext.create('StayOrLeave.view.CurrentMoviesPanel'));
        this.add(Ext.create('StayOrLeave.view.AllMoviesPanel'));
        this.add(Ext.create('StayOrLeave.view.ConfigurationPanel'));
        this.setActiveItem(0);
    }

});













