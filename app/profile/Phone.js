/**
 * Created by lumartin on 26/02/14.
 */
Ext.define('Iinvoice.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'phone',
        controllers: ['Main'],
        views: ['Main']
    },
    isActive: function(){
        return Ext.os.is.Phone;
    },
    launch: function(){
        Ext.create('Iinvoice.view.phone.Main');
    }
});