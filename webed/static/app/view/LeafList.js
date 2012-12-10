Ext.define ('Webed.view.LeafList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.leaf-list',
    store: 'Leafs',

    requires: [
        'Ext.grid.column.Number',
        'Ext.grid.column.Template'
    ],

    columns: [{
        flex: 2,
        text: 'Name',
        xtype: 'templatecolumn',
        tpl: '{name}',
        sortable: true
    },{
        flex: 1,
        text: 'Size',
        dataIndex: 'size',
        xtype: 'numbercolumn',
        renderer: Ext.util.Format.fileSize,
        sortable: true,
        align: 'right'
    }]
});