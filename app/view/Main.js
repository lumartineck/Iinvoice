Ext.define('Iinvoice.view.Main', {
    extend: 'Ext.Container',
    xtype:'main',
    requires: [
        'Iinvoice.view.LoginForm'
    ],
    config: {
        layout: 'card',
        fullscreen: true,
        autoDestroy: false,
        activeItem:0,

        items: [{
            xtype: 'loginform'
        }/*, {
            xtype: 'menu'
        }*/]
    }/*,

    initialize: function () {
        var me = this;
        if (localStorage.getItem('user')) {
            me.setActiveItem(1);
        }
    }*/
});
