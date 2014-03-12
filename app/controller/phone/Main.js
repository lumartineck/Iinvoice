/**
 * Created by lumartin on 08/03/14.
 */
Ext.define('Iinvoice.controller.phone.Main', {
    extend: 'Iinvoice.controller.Main',

    config: {
        refs: {},
        control: {
            'loginform button[action=login]': {
                tap: 'onLoginButtonTap'
            }
        }
    },

    onLoginButtonTap: function() {
        localStorage.setItem("user", "QuiQuix");
    }
});