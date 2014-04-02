/**
 * Created by lumartin on 01/04/14.
 */
Ext.define('Iinvoice.view.clients.ClientForm', {
    extend: 'Ext.form.Panel',
    xtype: 'clientform',

    config: {
        fullscreen: true,
        items: [
            {
                xtype: 'textfield',
                name: 'name',
                label: 'Nombre Cliente'
            }, {
                xtype: 'textfield',
                name: 'description',
                label: 'Dirección'
            }
        ]
    }
});