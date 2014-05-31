/**
 * This is not the real form; it's just a form placeholder
 * that I'll use here until I know what the correct form looks like.
 */
Ext.define('StayOrLeave.view.MovieDetailPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.movieDetailPanel',
 
    requires: [
        'Ext.field.Text',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.TextArea',
        'Ext.form.FieldSet'
    ],

    config: {
        itemId: 'movieDetailPanel',
        items: [
            {
                xtype: 'fieldset',
                title: 'Registration Form',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Username',
                        labelWrap: true,
                        name: 'username',
                        placeHolder: 'Enter Username'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Password',
                        labelWrap: true,
                        name: 'password',
                        placeHolder: 'Enter Password'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        labelWrap: true,
                        name: 'email',
                        placeHolder: 'email@example.com'
                    },
                    {
                        xtype: 'urlfield',
                        label: 'Website',
                        labelWrap: true,
                        name: 'website',
                        placeHolder: 'http://example.com'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'About You',
                        labelWrap: true,
                        name: 'aboutyou',
                        placeHolder: 'Tel me about yourself'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'save',
                width: '30%',
                text: 'Save'
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








