/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'TestEditor.Application',

    name: 'TestEditor',

    requires: [
        // This will automatically load all classes in the TestEditor namespace
        // so that application classes do not need to require each other.
        'TestEditor.*'
    ],

    // The name of the initial view to create.
    mainView: 'TestEditor.view.main.Main'
});
