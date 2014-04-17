/**
 * Created by lumartin on 26/02/14.
 */
Ext.define('Iinvoice.view.phone.Main', {
    extend: 'Iinvoice.view.Main',
    requires: [
        'Iinvoice.view.Menu'
    ]/*,

    initialize: function () {
        var me = this;

        if (localStorage.getItem('user')) {
            me.add({
                xtype: 'menu'
            });
            me.setActiveItem(1);
        }
    }*/
});