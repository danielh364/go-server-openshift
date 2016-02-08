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
     var valorProducto = dragitem.name;
     var productodatos = valorProducto.split("|");
     var comprobacion=productodatos[0];
     var numero=productodatos[1];

     if(comprobacion==="producto"){
       borrarArticulo(numero);
     }else{}
   }
