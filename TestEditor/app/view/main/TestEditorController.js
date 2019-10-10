/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('TestEditor.view.main.TestEditorController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.testeditorcontroller',

    init: function(){
        var me = this,
            store = me.getViewModel().get('testStore');
       
        store.loadRawData([
            { name: 'Juan', 
              projectStore: Ext.create('Ext.data.Store', {
                  data: [{
                      comboId: 1,
                      comboName: 'Project1' 
                    },
                    {
                        comboId: 2,
                        comboName: 'Project2' 
                    }]
              })
        },
        { name: 'Pedro', 
        projectStore: Ext.create('Ext.data.Store', {
            data: [{
                comboId: 3,
                comboName: 'Project3' 
              },
              {
                  comboId: 4,
                  comboName: 'Project4' 
              }]
        })
  }
    ]);
    //debugger
    //me.getView().getPlugin('cellEditingId').startEditByPosition({ row: 0, column: 1 });

    },

    buttonClick: function(){
        this.view.setSelection(this.view.store.getAt(0));
        this.view.getPlugin('cellEditingId').startEditByPosition({ row: 0, column: 0 });
    }
});
