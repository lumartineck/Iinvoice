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
            {name: 'Facturas',  icon: 'http://placehold.it/64x64', action: 'facturas'},
            {name: 'Clientes',   icon: 'http://placehold.it/64x64', action: 'clientes'},
            {name: 'Gastos', icon: 'http://placehold.it/64x64', action: 'gastos'},
            {name: 'Proyectos', icon: 'http://placehold.it/64x64', action: 'proyectos'},
            {name: 'Estimados',   icon: 'http://placehold.it/64x64', action: 'estimados'},
            {name: 'Reportes',   icon: 'http://placehold.it/64x64', action: 'reportes'},
            {name: 'Facturas 2',  icon: 'http://placehold.it/64x64', action: 'facturas2'},
            {name: 'Clientes 2',   icon: 'http://placehold.it/64x64', action: 'clientes2'},
            {name: 'Gastos 2', icon: 'http://placehold.it/64x64', action: 'gastos2'},
            {name: 'Proyectos 2', icon: 'http://placehold.it/64x64', action: 'proyectos2'},
            {name: 'Estimados 2',   icon: 'http://placehold.it/64x64', action: 'estimados2'},
            {name: 'Reportes 2',   icon: 'http://placehold.it/64x64', action: 'reportes2'}
        ]
    }
});