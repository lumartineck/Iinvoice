/**
 * Created by lumartin on 08/03/14.
 */
Ext.define('Iinvoice.controller.tablet.Main', {
    extend: 'Iinvoice.controller.Main',

    config: {},

    onAddButtonTap: function () {
        var me = this,
            active = me.getMenu().getActiveItem();

        switch (active.getAction()) {
            case 'invoices':
                me.onAddInvoice();
                break;
            case 'clients':
                Ext.Viewport.add({
                    xtype:'clientform',
                    modal:true
                }).show();
                break;
        }
        me.getAddButton().hide();
    },


    onAddInvoice: function () {
        var form = Ext.create('Iinvoice.view.clients.ClientForm', {
            modal: true,
            hideOnMaskTap: true,
            top: '10%',
            left: Ext.filterPlatform('ie10') ? 0 : '10%',
            right: Ext.filterPlatform('ie10') ? 0 : '10%',
            bottom: '10%'
        });

        if (!form.getParent()) {
            Ext.Viewport.add(form);
        }
        form.show();
    }
});