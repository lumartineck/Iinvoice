/**
 * Created by lumartin on 01/04/14.
 */
Ext.define('Iinvoice.view.clients.ClientForm', {
    extend: 'Ext.form.Panel',
    xtype: 'clientform',

    config: {
        items: [{
            xtype: 'titlebar', //Use in Tablet mode
            title: 'Add Client',
            docked: 'top',
            hidden: Ext.os.is.Phone ? true : false,
            //ui: 'neutral',
            items: [{
                text: 'cancel',
                action: 'cancel',
                ui:'decline',
                align: 'left'
            },{
                text: 'save',
                action: 'save',
                ui: 'confirm',
                align: 'right'
            }]
        }, {//Fields
            xtype: 'textfield',
            name: 'name',
            label: 'Nombre Cliente'
        }, {
            xtype: 'textfield',
            name: 'description',
            label: 'Dirección'
        }]
    }
});