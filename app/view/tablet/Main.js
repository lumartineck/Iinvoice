/**
 * Created by lumartin on 26/02/14.
 */
Ext.define('Iinvoice.view.tablet.Main', {
    extend: 'Iinvoice.view.Main',
    requires: [
        'Iinvoice.view.tablet.Menu'
    ],

    initialize: function () {console.log('initialize tablet main');
        var me = this;

        if (localStorage.getItem('user')) {
            me.add({
                xtype: 'menuT'
            });
            console.log(me);
            me.setActiveItem(1);
        }
    }
});