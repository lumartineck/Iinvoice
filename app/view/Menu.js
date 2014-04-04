/**
 * Created by lumartin on 03/04/14.
 */
Ext.define('Iinvoice.view.Menu', {
    extend: 'Ext.NavigationView',
    xtype: 'menu',
    requires: [
        'Ext.dataview.DataView',
        'Ext.Carousel',

        'Iinvoice.view.invoices.InvoiceList',
        'Iinvoice.view.clients.ClientList'
    ],
    config: {
        navigationBar: {
            itemId: 'navigationBar',
            items: [{
                xtype: 'button',
                action: 'logOut',
                ui: 'decline',
                align: 'right',
                text: 'Salir'
            }, {
                xtype: 'button',
                hidden:true,
                action: 'add',
                ui: 'confirm',
                align: 'right',
                text: '+'
            }]
        }
    },

    initialize: function () {
        var me = this,
            itemsPerPage = Ext.os.is.Phone ? 8 : 11, // items per page
            divTamanio = Ext.os.is.Phone ? 'width: 85px; height: 120px;' : 'width: 170px; height: 240px;',
            imgTamanio = Ext.os.is.Phone ? '64px;' : '128px;',
            fontSize = Ext.os.is.Phone ? '12px;' : '16px;',
            totalpages = Math.ceil(Ext.getStore('Menu').getCount()/itemsPerPage),
            carouselpages = [], startrecord, endrecord, recordsforpage, carouselpage;

        for(var i=1;i<=totalpages;i++) {
            startrecord= (i*itemsPerPage)-itemsPerPage;
            endrecord = i==totalpages ? Ext.getStore('Menu').getCount() : (i*itemsPerPage)-1;
            recordsforpage = Ext.getStore('Menu').getRange(startrecord,endrecord);
            carouselpage = {
                xtype: 'container',
                layout: 'fit',
                items: [
                    {
                        xtype: 'dataview',
                        scrollable: false,
                        height: '100%',
                        padding: 30,
                        style: {
                            background: '#D8D8D8'
                        },
                        inline: true,
                        store: {
                            fields: [
                                {name: 'name', type: 'string'},
                                {name: 'icon',  type: 'string'},
                                {name: 'action',  type: 'string'}
                            ],
                            data: recordsforpage
                        },
                        itemTpl: '<div style="' + divTamanio + '">' +
                            '<div style="text-align: center;">' +
                            '<img width="' + imgTamanio + '" height="' + imgTamanio + '" src="{icon}"/>' +
                            '</div>' +
                            '<div style="font-size:' + fontSize + 'text-align: center;">{name}</div>' +
                            '</div>'
                    }
                ]
            };

            carouselpages.push(carouselpage)
        }

        me.add(Ext.create('Ext.Carousel', {
            layout: 'fit',
            fullscreen: true,
            items: carouselpages
        }));
    }
});