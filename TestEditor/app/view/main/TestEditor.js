/**
 * This view is an example list of people.
 */
Ext.define('TestEditor.view.main.TestEditor', {
    extend: 'Ext.grid.Panel',
    xtype: 'testeditor',
    requires: [
        'Ext.grid.plugin.CellEditing' 
    ],
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1,
        id: 'cellEditingId'
    },

    title: 'TestEditor',
    reference: 'testeditorgrid',
    controller: 'testeditorcontroller',

    viewModel: {
        stores: {
            testStore: {}
        }
    },

    bind: {
        store: '{testStore}'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name', flex: 1,
        editor: {
            field: {
                displayField: 'textName',
                valueField: 'textId',
            }
        } },
        {
            text: 'Project',
            id: 'projectColumnId',
            dataIndex: 'psa_project_name',
            editor: {
                field: {
                    xtype: 'combobox',
                    queryMode: 'local',
                    displayField: 'comboName',
                    valueField: 'comboId',
                    forceSelection: true,
                    bind: {
                        store: '{testeditorgrid.selection.projectStore}'
                    },
                    anyMatch: true
                }
            }
        }
    ],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'button',
            text: 'Left Button'
        }, {
            xtype: 'tbfill'
        }, {
            xtype: 'button',
            text: 'Focus!',
            bind: {
                handler: 'buttonClick'
            }
        }]
    }]
});
