/**
 * Created by lumartin on 26/02/14.
 */
Ext.define('Iinvoice.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'tablet',
        controllers: ['Main'],
        views: ['Main']
    },
    isActive: function(){
        return !Ext.os.is.Phone;
    },
    launch: function(){
        Ext.create('Iinvoice.view.tablet.Main');
    }
});