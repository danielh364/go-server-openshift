var dragitem = undefined;

   function setdragitem(item, evt) {
       dragitem=item;
       return true;
   }
   
   function cleardragitem() {
       dragitem=undefined;
   }

   function handledragenter(elt, evt) {
       evt.preventDefault();
       return true;
   }

   function handledragover(elt, evt) {
       evt.preventDefault();
       return true;
   }

   function handledrop(elt, evt) {
$(dragitem).parent().find('a').trigger('click');
   }
