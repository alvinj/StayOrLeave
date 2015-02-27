/**
 * This is not the real form; it's just a form placeholder
 * that I'll use here until I know what the correct form looks like.
 */
Ext.define('StayOrLeave.view.MovieDetailForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.movieDetailForm',
 
    requires: [
        'Ext.field.Text',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.TextArea',
        'Ext.form.FieldSet'
    ],

    config: {
        itemId: 'movieDetailForm',
        items: [
            {
                xtype: 'fieldset',
                title: 'Stay or Leave',
                items: [
                    {
                        xtype: 'radiofield',
                        itemId: 'stayRadiofield',
                        name: 'stayorleave',
                        value: 'stay',
                        label: 'Stay'
                    },
                    {
                        xtype: 'radiofield',
                        itemId: 'stayRadiofield',
                        name: 'stayorleave',
                        value: 'leave',
                        label: 'Leave'
                    }
                ],
            },
            {
                xtype: 'fieldset',
                title: 'Attributes',
                items: [
                    {
                        xtype: 'checkboxfield',
                        itemId: 'funnyField',
                        name: 'attributes',
                        value: 'funny',
                        label: 'Funny'
                    },
                    {
                        xtype: 'checkboxfield',
                        itemId: 'longField',
                        name: 'attributes',
                        value: 'long',
                        label: 'Long'
                    },
                    {
                        xtype: 'checkboxfield',
                        itemId: 'funnyField',
                        name: 'attributes',
                        value: 'preview',
                        label: 'Preview of Sequel'
                    },
                ],
            },
            {
                xtype: 'fieldset',
                title: 'Comments',
                items: [
                    {
                        xtype: 'textareafield',
                        label: 'Comments',
                        labelWrap: true,
                        name: 'comments',
                        placeHolder: 'Your comments on the movie.'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'save',
                text: 'Save',
                style: 'text-align: center;'
            },
            {
                // spacer (much better to do this in css)
                xtype: 'container',
                html: '<p>&nbsp;</p>'
            }
        ]
    }
});

    // {
    //     xtype: 'textarea',
    //     fieldLabel: 'Message text',
    //     hideLabel: true,
    //     name: 'msg',
    //     style: 'margin:0', // Remove default margin
    //     flex: 1  // Take up all *remaining* vertical space
    // }








