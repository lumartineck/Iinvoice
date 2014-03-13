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
            loginForm: {
                selector: 'loginform'
            }
        },
        control: {
            'loginform button[action=login]': {
                tap: 'onLoginButtonTap'
            },
            'menu button[action=logOut]': {
                tap: 'onLogOutButtonTap'
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
    }
});