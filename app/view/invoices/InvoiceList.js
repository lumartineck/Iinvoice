/**
 * Created by lumartin on 26/03/14.
 */
Ext.define('Iinvoice.view.invoices.InvoiceList', {
    extend: 'Ext.List',
    xtype: 'invoicelist',
    requires: [
        'Iinvoice.view.invoices.InvoiceForm'
    ],

    config: {
        title: 'Invices',
        fullscreen: true,
        action: 'invoices',
        itemTpl: '{name} {description}',
        store: 'Invoices'
    }
});