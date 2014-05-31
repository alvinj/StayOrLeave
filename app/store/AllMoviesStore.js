/**
 * This class is a hack.
 * I only created it because I don't have a database yet.
 */
Ext.define('StayOrLeave.store.AllMoviesStore', {
    extend: 'Ext.data.Store',
    alias: 'store.AllMoviesStore',
    xtype: 'allMoviesStore',
 
    requires: [
        'StayOrLeave.model.Movie'
    ],
 
    config: {
        storeId: 'AllMoviesStore',
        model: 'StayOrLeave.model.Movie',
        autoLoad: true,
        data: [
            { name: 'A Million Ways to Die in The West' },
            { name: 'Batman Begins' },
            { name: 'Blended' },
            { name: 'Captain America: The Winter Soldier' },
            { name: 'Chef' },
            { name: 'Godzilla' },
            { name: 'Havana' },
            { name: 'Home for the Holidays' },
            { name: 'Inception' },
            { name: 'Leon The Professional' },
            { name: 'Maleficent' },
            { name: 'Million Dollar Arm' },
            { name: 'Neighbors' },
            { name: 'Phenomenon' },
            { name: 'Rio 2' },
            { name: 'Say Anything' },
            { name: 'Spider-Man 2' },
            { name: 'Stigmata' },
            { name: 'The Other Woman' },
            { name: 'The Railway Man' },
            { name: 'V for Vendetta' },
            { name: 'While You Were Sleeping' },
            { name: 'X-Men: Days of Future Past' },
        ]
    }
});

