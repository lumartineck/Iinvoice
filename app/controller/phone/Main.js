/**
 * Created by lumartin on 08/03/14.
 */
Ext.define('Iinvoice.controller.phone.Main', {
    extend: 'Iinvoice.controller.Main',

    config: {},

    onAddButtonTap: function () {
        var me = this,
            active = me.getMenu().getActiveItem();

        switch (active.getAction()) {
            case 'invoices':
                me.getMenu().add({
                    xtype:'invoiceform'
                });
                break;
            case 'clients':
                me.getMenu().add({
                    xtype:'clientform'
                });
                break;
        }
        me.getAddButton().hide();
    }
});