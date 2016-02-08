var dragitem = undefined;

   function setdragitem(item, evt) {
       dragitem=item;
       // alert('item: '+item);
       // item is an HTML DIV element.
       // evt is an event.

       // If the item should not be draggable, enable this next line.
       // evt.preventDefault();

       return true;
   }
   function cleardragitem() {
       dragitem=undefined;
       // alert('item: '+item);
   }
   function dodrag() {
       // alert('item: '+dragitem);
   }

   // This is required---used to tell WebKit that the drag should
   // be allowed.
   function handledragenter(elt, evt) {
       evt.preventDefault();
       return true;
   }
   function handledragover(elt, evt) {
       evt.preventDefault();
       return true;
   }


   function handledragleave(elt, evt) {

   }

   function handledrop(elt, evt) {
       // alert('drop');
       dragitem.style.display="none";
       var newid=dragitem.id + '_dest';
       var dest = document.getElementById(newid);
       dest.innerHTML = dragitem.innerHTML;
   }
