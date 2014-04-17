Ext.define('Iinvoice.view.Main', {
    extend: 'Ext.Container',
    xtype:'main',
    requires: [
        'Iinvoice.view.LoginForm',
        'Iinvoice.view.Menu'
    ],
    config: {
        layout: 'card',
        fullscreen: true,
        autoDestroy: false,
        activeItem:0,

        items: [{
            xtype: 'loginform'
        }]
    },

    initialize: function () {console.log('main main');
        var me = this;

        if (localStorage.getItem('user')) {
            me.add({
                xtype: 'menu'
            });
            me.setActiveItem(1);
        }
    }
});
