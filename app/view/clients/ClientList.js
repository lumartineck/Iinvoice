/**
 * Created by lumartin on 26/03/14.
 */
Ext.define('Iinvoice.view.clients.ClientList', {
    extend: 'Ext.List',
    xtype: 'clientlist',
    requires: [
        'Iinvoice.view.clients.ClientForm'
    ],

    config: {
        fullscreen: true,
        action: 'clients',
        itemTpl: '{title}',
        data: [
            { title: 'Client 1' },
            { title: 'Client 2' },
            { title: 'Client 3' },
            { title: 'Client 4' }
        ]
    }
});