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
            {name: 'Facturas',  icon: 'resources/images/picture.png', action: 'facturas'},
            {name: 'Clientes',   icon: 'resources/images/picture.png', action: 'clientes'},
            {name: 'Gastos', icon: 'resources/images/picture.png', action: 'gastos'},
            {name: 'Proyectos', icon: 'resources/images/picture.png', action: 'proyectos'},
            {name: 'Estimados',   icon: 'resources/images/picture.png', action: 'estimados'},
            {name: 'Reportes',   icon: 'resources/images/picture.png', action: 'reportes'},
            {name: 'Facturas 2',  icon: 'resources/images/picture.png', action: 'facturas2'},
            {name: 'Clientes 2',   icon: 'resources/images/picture.png', action: 'clientes2'},
            {name: 'Gastos 2', icon: 'resources/images/picture.png', action: 'gastos2'},
            {name: 'Proyectos 2', icon: 'resources/images/picture.png', action: 'proyectos2'},
            {name: 'Estimados 2',   icon: 'resources/images/picture.png', action: 'estimados2'},
            {name: 'Reportes 2',   icon: 'resources/images/picture.png', action: 'reportes2'}
        ]
    }
});