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
        title: 'Clients',
        fullscreen: true,
        action: 'clients',
        emptyText: 'There is no clients on this view',
        itemTpl: '{name} {description}',
        store: 'Clients'
    }
});