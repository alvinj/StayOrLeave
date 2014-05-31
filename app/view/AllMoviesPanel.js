Ext.define('StayOrLeave.view.AllMoviesPanel', {
    extend: 'Ext.navigation.View',
    alias: 'widget.allMoviesPanel',

    requires: [
        'Ext.dataview.List'
    ],
    config: {

        xtype: 'allMoviesPanel',
        itemId: 'allMoviesTab',
        title: 'All Movies',
        iconCls: 'search',

        layout: {
            type: 'card'
        },
        scrollable: 'vertical',

        items: [
            {
                xtype: 'list',
                title: 'All Movies',
                // grouped: true,  // can't use this unless the store has a 'grouper'
                indexBar: true,
                store: {
                    xtype: 'allMoviesStore',
                    sorters: 'name',
                    // grouper: {
                    //     groupFn: function (item) {
                    //         return item.get('name');
                    //     }
                    // },
                },
                itemTpl: '<div><img src="images/green_4.png" />&nbsp;<img src="images/red_2.png" />&nbsp;{name}</div>',
                striped: true
            }
        ]
    },

    initialize: function () {
        console.log('ENTERED AllMoviesPanel::initialize');
    },

    onBackButtonTap: function () {
        console.log('ENTERED AllMoviesPanel::onBackButtonTap');
    }

});







