Ext.define('StayOrLeave.view.CurrentMoviesPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.currentMoviesPanel',

    refs: {
        mainTabPanel: 'mainTabPanel'
    },

    requires: [
        'Ext.dataview.List'
    ],

    config: {
        xtype: 'currentMoviesPanel',
        itemId: 'currentMoviesPanel',
        title: 'New Movies',
        iconCls: 'star',

        layout: {
            type: 'card'
        },
        scrollable: 'vertical',

        // the list
        items: [
            {
                xtype: 'list',
                itemId: 'movieList',
                title: 'New Movies',
                store: {
                    xtype: 'movieStore'
                },
                itemTpl: '<div><img src="images/green_4.png" />&nbsp;<img src="images/red_2.png" />&nbsp;{name}</div>',
                striped: true
            }
        ],
        listeners: [
            {
                delegate: '#movieList',    // where the data comes from?
                fn: 'onMovieListItemTap',  // local function/handler
                event: 'itemtap',          // event that triggers this function
            }
        ]

    },

    onMovieListItemTap: function (theList, index, target, record, e, eOpts) {
        // console.log('CurrentMoviesPanel::onMovieListItemTap called');
        this.fireEvent('MovieListItemTap', this);
    },

    initialize: function () {
        // console.log('ENTERED CurrentMoviesPanel::initialize');
    }

});







