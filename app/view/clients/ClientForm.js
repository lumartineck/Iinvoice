/**
 * Created by lumartin on 01/04/14.
 */
Ext.define('Iinvoice.view.clients.ClientForm', {
    extend: 'Ext.form.Panel',
    xtype: 'clientform',

    config: {
        items: [{
            xtype: 'titlebar', //Use in Tablet mode
            title: 'Add Invoicessss',
            docked: 'top',
            //ui: 'neutral',
            items: [{
                text: 'cancel',
                ui:'decline',
                align: 'left'
            },{
                text: 'save',
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