/**
 * Created by lumartin on 08/03/14.
 */
Ext.define('Iinvoice.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: {
                selector: 'main'
            },
            menu: {
                selector: 'menu'
            },
            loginForm: {
                selector: 'loginform'
            },
            logOutButton: {
                selector: 'menu button[action=logOut]'
            },
            addButton: {
                selector: 'menu button[action=add]'
            }
        },
        control: {
            'loginform button[action=login]': {
                tap: 'onLoginButtonTap'
            },
            'menu #navigationBar': {
                back: 'onMenuBackButtonTap'
            },
            'menu button[action=logOut]': {
                tap: 'onLogOutButtonTap'
            },
            'menu > carousel > container > dataview': {
                itemtap: 'onMenuItemTap'
            }
        }
    },

    onLoginButtonTap: function() {
        var me = this,
            valores = me.getLoginForm().getValues();

        if(valores.password === 'rifa') {
            localStorage.setItem("user", {user: 'quiquix', rifa: true});
            me.getMain().setActiveItem(1);
        } else {
            Ext.Msg.alert("Login", "Usuario o contraseña incorrectos.");
        }
    },

    onLogOutButtonTap: function () {
        var me = this;

        localStorage.removeItem("user");
        me.getMain().setActiveItem(0);
    },

    onMenuItemTap: function (dataview, index, target, record, e, eOpts) {
        var me = this;

        me.getLogOutButton().hide();
        me.getAddButton().show();
        switch (record.get('action')) {
            case 'facturas':
                me.getMenu().add({
                    xtype:'invoicelist'
                });
                break;
            case 'clientes':
                me.getMenu().add({
                    xtype:'clientlist'
                });
                break;
        }
    },

    onMenuBackButtonTap: function () {
        var me = this;
        me.getLogOutButton().show();
        me.getAddButton().hide();
        me.getMenu().pop();
    }
});