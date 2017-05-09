function onRun(context) {
   
   var selection = context.selection;
   var selectionCount = selection.count();
   var doc = context.document;
   
   doc.showMessage('Layers selected: ' + selectionCount);
   
}