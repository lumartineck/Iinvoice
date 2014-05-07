/**
 * Created by lumartin on 05/05/14.
 */
Ext.define('Iinvoice.store.Clients', {
    extend: 'Ext.data.Store',
    requires:['Iinvoice.model.Client'],
    config:{
        model:'Iinvoice.model.Client',
        autoLoad:true
    }
});