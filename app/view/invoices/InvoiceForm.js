/**
 * Created by lumartin on 01/04/14.
 */
Ext.define('Iinvoice.view.invoices.InvoiceForm', {
    extend: 'Ext.form.Panel',
    xtype: 'invoiceform',

    config: {
        fullscreen: true,
        items: [
            {
                xtype: 'textfield',
                name: 'name',
                label: 'Nombre'
            }, {
                xtype: 'textfield',
                name: 'description',
                label: 'Descripcion'
            }
        ]
    }
});