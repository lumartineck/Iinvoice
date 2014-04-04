/**
 * Created by lumartin on 26/02/14.
 */
Ext.define('Iinvoice.view.phone.Main', {
    extend: 'Iinvoice.view.Main',
    requires: [
        'Iinvoice.view.phone.Menu'
    ],

    initialize: function () {console.log('initialize phone main');
        var me = this;

        if (localStorage.getItem('user')) {
            me.add({
                xtype: 'menuP'
            });
            me.setActiveItem(1);
        }
    }
});