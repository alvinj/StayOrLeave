Ext.define('StayOrLeave.store.MovieStore', {
    extend: 'Ext.data.Store',
    alias: 'store.MovieStore',
    xtype: 'movieStore',
 
    requires: [
        'StayOrLeave.model.Movie'
    ],
 
    config: {
        storeId: 'MovieStore',
        model: 'StayOrLeave.model.Movie',
        autoLoad: true,
        data: [
            { name: 'Spider-Man 2' },
            { name: 'X-Men: Days of Future Past' },
            { name: 'Maleficent' },
            { name: 'A Million Ways to Die in The West' },
            { name: 'Blended' },
            { name: 'Neighbors' },
            { name: 'Godzilla' },
            { name: 'Million Dollar Arm' },
            { name: 'The Other Woman' },
            { name: 'Chef' },
            { name: 'Rio 2' },
            { name: 'The Railway Man' },
            { name: 'Captain America: The Winter Soldier' }
        ]
    }
});

