/**
 * Created by lumartin on 12/03/14.
 */
Ext.define('Iinvoice.view.Menu', {
    extend: 'Ext.NavigationView',
    xtype: 'menu',
    requires: [
        'Ext.dataview.DataView'
    ],
    config: {
        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    action: 'logOut',
                    ui: 'decline',
                    align: 'right',
                    text: 'Salir'
                }
            ]
        }
    },

    initialize: function () {
        var me = this,
            itemsPerPage = 8, // items per page
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
                        padding: 20,
                        inline: true,
                        cls: 'dataview-inline',
                        store: {
                            fields: [
                                {name: 'name', type: 'string'},
                                {name: 'icon',  type: 'string'}
                            ],
                            data: recordsforpage
                        },
                        itemTpl: '<div style="width: 65px; height: 100px;"><img src="{icon}"/><br><span style="font-size: 10px;text-align: center;">{name}</span></div>'
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