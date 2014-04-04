/**
 * Created by lumartin on 08/03/14.
 */
Ext.define('Iinvoice.controller.phone.Main', {
    extend: 'Iinvoice.controller.Main',

    config: {
        refs: {
            menu: {
                selector: 'menuP'
            },
            logOutButton: {
                selector: 'menuP button[action=logOut]'
            },
            addButton: {
                selector: 'menuP button[action=add]'
            }
        },
        control: {
            'menuP #navigationBar': {
                back: 'onMenuBackButtonTap'
            },
            'menuP button[action=logOut]': {
                tap: 'onLogOutButtonTap'
            },
            'menuP > carousel > container > dataview': {
                itemtap: 'onMenuItemTap'
            }
        }
    },

    onMenuItemTap: function (dataview, index, target, record, e, eOpts) {
        var me = this;

        me.getLogOutButton().hide();
        me.getAddButton().show();
        console.log(me.getMenu());
        switch (record.get('action')) {
            case 'invoices':
                me.getMenu().add({
                    xtype:'invoicelist'
                });
                break;
            case 'clients':
                me.getMenu().add({
                    xtype:'clientlist'
                });
                break;
        }
    },

    onMenuBackButtonTap: function () {
        var me = this,
            size = me.getMenu().getItems().length;
        if (size == 3) {
            me.getLogOutButton().show();
            me.getAddButton().hide();
        } else if (size == 4) {
            me.getAddButton().show();
        }

        me.getMenu().pop();
    },

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