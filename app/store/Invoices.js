/**
 * Created by lumartin on 06/05/14.
 */
Ext.define('Iinvoice.store.Invoices', {
    extend: 'Ext.data.Store',
    requires:['Iinvoice.model.Invoice'],
    config:{
        model:'Iinvoice.model.Invoice',
        autoLoad:true
    }
});