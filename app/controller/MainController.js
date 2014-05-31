/**
 * In the real world you should not have just one controller.
 * It is more correct to have something like "one controller per view",
 * or at least one controller per logical activity, such as one for
 * "Movies", one for "Users", etc.
 */
Ext.define('StayOrLeave.controller.MainController', {
    extend: 'Ext.app.Controller',

    requires: [
    	'StayOrLeave.view.MovieDetailPanel'
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
	    	'MovieDetailPanel'
	    ],
    },

    // transitions. used later when showing the stocks list view.
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },

    // i'm not sure that this list of method variables is correct (not tested)
    handleMovieListItemTap: function (list, record) {
        console.log('ENTERED MainController::handleMovieListItemTap');
        var movieDetailPanel = Ext.create('StayOrLeave.view.MovieDetailPanel');
        Ext.Viewport.animateActiveItem(movieDetailPanel, this.slideLeftTransition);
    }

});













