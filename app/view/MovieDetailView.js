Ext.define('StayOrLeave.view.MovieDetailView', {
	extend: 'Ext.Panel',
	alias: 'widget.movieDetailView',

	requires: [
		'StayOrLeave.view.AddReviewButton'
	],

	config: {

		// TODO is this having any effect?
        layout: {
            type: 'vbox'
        },

        title: 'Blended',

        // sadly, this does not work
		// navigationBar : {
		//     items : [
		//         {
		//             text : 'New Button',
		//             align : 'right'
		//         }
		//     ]
		// },

		defaults: {
			margin: 40,
			style: 'text-align: left;',
			fill: 1
		},
		items: [
			{
				xtype: 'container',
				html: '<center>___ Votes ___</center><div><img src="images/thumb_yes_20h.png" />&nbsp;100<br/><img src="images/thumb_no_20h.png" />&nbsp;10</div>',
				id: 'thumbsView',
			},
			{
				xtype: 'container',
				html: '<center>___ Attributes ___</center><div>Funny - 20<br/>Voted Yes, But Not Worth It - 2</div>',
				id: 'checkboxView',
			},
			{
				xtype: 'container',
				html: '<center>___ Comments ___</center><p>It was ousome!</p><p>You rule!</p><p>I love spam!</p><p>I rule!</p>',
				id: 'commentsView',
			},
            {
                // spacer (much better to do this in css)
                xtype: 'container',
                html: '<p>&nbsp;</p>'
            }
		]

	},

	initialize: function () {
		var mainNavView = Ext.getCmp('MainNavigationView');
		mainNavView.getDockedItems()[0].add({
		    xtype: 'addReviewButton',
		    align: 'right'
		});
		// mainNavView.getDockedItems()[0].add({text: 'Share'})
	}


});









