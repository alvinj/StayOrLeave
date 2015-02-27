/**
 * In the real world you should not have just one controller.
 * It is more correct to have something like "one controller per view",
 * or at least one controller per logical activity, such as one for
 * "Movies", one for "Users", etc.
 */
Ext.define('StayOrLeave.controller.MainController', {
    extend: 'Ext.app.Controller',

    requires: [
    	'StayOrLeave.view.MainNavigationView',
    	'StayOrLeave.view.MovieDetailForm',
    	'StayOrLeave.view.MovieDetailView'
    ],

    config: {
        refs: {
            // localName : aliasForTheViewComponent
            currentMoviesPanel: 'currentMoviesPanel',
            allMoviesPanel: 'allMoviesPanel'
        },
        control: {
            currentMoviesPanel: {
            	// eventWeGetFromTheViewComponent : 'localFunctionName'
                MovieListItemTap: 'handleMovieListItemTap'
            }
        },

	    views: [
	    	'MovieDetailForm'
	    ],
    },

    // transitions. used later when showing the stocks list view.
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },

    handleMovieListItemTap: function (list, record) {
        // console.log('ENTERED MainController::handleMovieListItemTap');
        // TODO a better way to do this?
        var mainNavView = Ext.getCmp('MainNavigationView');
        var movieDetailView = Ext.create('StayOrLeave.view.MovieDetailView');
        mainNavView.push(movieDetailView);
    }

    // // i'm not sure that this list of method variables is correct (not tested)
    // handleMovieListItemTap: function (list, record) {
    //     console.log('ENTERED MainController::handleMovieListItemTap');
    //     var mainNavView = Ext.getCmp('MainNavigationView');
    //     var movieDetailPanel = Ext.create('StayOrLeave.view.MovieDetailPanel');
    //     mainNavView.push(movieDetailPanel);
    // }

});













