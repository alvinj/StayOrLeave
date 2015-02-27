Ext.define('StayOrLeave.view.AddReviewButton', {
    extend: 'Ext.Button',
    alias: 'widget.addReviewButton',

    config: {
        text: 'Add',
        ui: 'action',
        cls: 'intro',

        handler: function() {
            // TODO push this code to a controller class
            // console.log('ENTERED AddReviewButton::handler');
            var mainNavView = Ext.getCmp('MainNavigationView');
            var movieDetailForm = Ext.create('StayOrLeave.view.MovieDetailForm');
            mainNavView.push(movieDetailForm);
        }

    }


});


