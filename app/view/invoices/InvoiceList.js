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
        fullscreen: true,
        action: 'invoices',
        itemTpl: '{title}',
        data: [
            { title: 'Invoice 1' },
            { title: 'Invoice 2' },
            { title: 'Invoice 3' },
            { title: 'Invoice 4' }
        ]
    }
});