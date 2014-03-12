/**
 * Created by lumartin on 12/03/14.
 */
Ext.define('Iinvoice.store.Menu',{
    extend:'Ext.data.Store',
    config:{
        autoload: true,
        fields: [
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'icon',
                type: 'string'
            },
            {
                name: 'action',
                type: 'string'
            }
        ],
        data: [
            {name: 'Ordenes de venta',  icon: 'resources/images/cart.png', action: 'venta'},
            {name: 'Definición de rutas y actividades',   icon: 'resources/images/cart.png', action: 'rutas'},
            {name: 'Cobranza', icon: 'resources/images/cart.png', action: 'cobranza'},
            {name: 'Informes', icon: 'resources/images/cart.png', action: 'informes'},
            {name: 'Información del sistema',   icon: 'resources/images/cart.png', action: 'sistema'},
            {name: 'Prospectos',   icon: 'resources/images/cart.png', action: 'prospectos'},
            {name: 'Salir',   icon: 'resources/images/cart.png', action: 'salir'}
        ]
    }
});