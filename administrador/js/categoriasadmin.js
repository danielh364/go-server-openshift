$(document).ready(function () {

//Le quitamos la funcion al submit del formulario imagen para enviarlo mediante ajax.
  $("#formularioArticuloImagen").on("submit", function(e){
      e.preventDefault();
      var f = $(this);
  });


  document.getElementById("menujqgrid").style.display = 'none';

  $(".nav a").on("click", function () {
            $(".nav").find(".active").removeClass("active");
            $(this).parent().addClass("active");
        });

//Insertar
        jQuery("#cliente1").click( function(){
        	openFormClientesModal();
        });

//Actualizar
        jQuery("#cliente2").click( function(){
                  var id = jQuery("#tablaclientes").jqGrid('getGridParam','selrow');
                  var ret = jQuery("#tablaclientes").jqGrid('getRowData',id);
          if (id)	{
            document.getElementById("usuario").value = ret.usuario;
            document.getElementById("usuariom").value = ret.usuario;
            document.getElementById("nombrem").value = ret.nombre;
            document.getElementById("apellidosm").value = ret.apellidos;
            document.getElementById("emailm").value = ret.email;
            document.getElementById("usuariop").value = ret.usuario;
            document.getElementById("usuariooculto").value = ret.usuario;
            openForModificarClientesModal();
                 }
                   else {sweetAlert("Error","No se ha seleccionado ninguna fila a modificar", "error");}
                });

//Eliminar Cliente

        jQuery("#cliente3").click( function(){
          var id = jQuery("#tablaclientes").jqGrid('getGridParam','selrow');
          var ret = jQuery("#tablaclientes").jqGrid('getRowData',id);
	if (id)	{
                  $.ajax({
                      type: "POST",
                      url: "./dao/clientesDAO.php",
                        data: 'buttonformulario=Borrar Usuario&usuario='+ret.usuario,
                      success: function (data) {
                        if(data!=="Se ha borrado correctamente."){
                        sweetAlert("Error",data, "error");}
                        $("#tablaclientes").trigger("reloadGrid");
                      }
                  });
} else {sweetAlert("Error","No se ha seleccionado ninguna fila a borrar", "error");}
        });


        //Insertar Administrador
                jQuery("#administrador1").click( function(){
                	openFormAdministradoresModal();
                });

        //Actualizar administrador
                jQuery("#administrador2").click( function(){
                          var id = jQuery("#tablaadministradores").jqGrid('getGridParam','selrow');
                          var ret = jQuery("#tablaadministradores").jqGrid('getRowData',id);
                  if (id)	{

                    document.getElementById("administradorp").value = ret.usuario;
                    document.getElementById("administradorpoculto").value = ret.usuario;
                    openForModificarAdministradorModal();
                         }
                           else {sweetAlert("Error","No se ha seleccionado ninguna fila a modificar", "error");}
                        });

        //Eliminar administradores

                jQuery("#administrador3").click( function(){
                  var id = jQuery("#tablaadministradores").jqGrid('getGridParam','selrow');
                  var ret = jQuery("#tablaadministradores").jqGrid('getRowData',id);
        	if (id)	{
                          $.ajax({
                              type: "POST",
                              url: "./dao/administradoresDAO.php",
                                data: 'buttonformulario=Borrar Administrador&usuario='+ret.usuario,
                              success: function (data) {
                                if(data!=="Se ha borrado correctamente."){
                                sweetAlert("Error",data, "error");}
                                $("#tablaadministradores").trigger("reloadGrid");
                              }
                          });
        } else {sweetAlert("Error","No se ha seleccionado ninguna fila a borrar", "error");}
                });



//Insertar
        jQuery("#articulos1").click( function(){
          ListarCategorias();
          openFormArticulosModal();
        });
//Actualizar
        jQuery("#articulos2").click( function(){
          var id = jQuery("#tablaarticulos").jqGrid('getGridParam','selrow');
          var ret = jQuery("#tablaarticulos").jqGrid('getRowData',id);
        if (id)	{
        document.getElementById("idarticuloM").value = ret.id;
        document.getElementById("idarticuloNoculto").value = ret.id;
        document.getElementById("tituloM").value = ret.titulo;
        document.getElementById("precioM").value = ret.precio;
        document.getElementById("stockM").value = ret.stock;
        document.getElementById("imagenM").value = ret.imagen;
        document.getElementById("descripcionM").value = ret.descripcion;
        ListarCategoriasM(ret.categoria);
        openFormModificarArticuloModal();
         }
           else {sweetAlert("Error","No se ha seleccionado ninguna fila a modificar", "error");}
        });
//Eliminar
        jQuery("#articulos3").click( function(){
          var id = jQuery("#tablaarticulos").jqGrid('getGridParam','selrow');
          var ret = jQuery("#tablaarticulos").jqGrid('getRowData',id);
  if (id)	{
                  $.ajax({
                      type: "POST",
                      url: "./dao/articulosDAO.php",
                        data: 'buttonformulario=Borrar Articulo&idarticulo='+ret.id,
                      success: function (data) {
                        if(data!=="Se ha borrado correctamente."){
                        sweetAlert("Error",data, "error");}
                         $("#tablaarticulos").trigger("reloadGrid");
                      }
                  });
  } else { sweetAlert("Error","No se ha seleccionado ninguna fila a borrar", "error");}
        });

//Subir Imagen
jQuery("#articulos4").click( function(){
  openFormArticulosFotoModal();
});


//Insertar
        jQuery("#categorias1").click( function(){
          openFormCategoriasModal();
        });

//Actualizar
        jQuery("#categorias2").click( function(){
          var id = jQuery("#tablacategorias").jqGrid('getGridParam','selrow');
          var ret = jQuery("#tablacategorias").jqGrid('getRowData',id);
  if (id)	{
    document.getElementById("idcategoria").value = ret.idcategoria;
    document.getElementById("idcategoriaoculta").value = ret.idcategoria;
    document.getElementById("nombrecategoria").value = ret.nombre;
    openFormModificarCategoriasModal();
         }
           else {sweetAlert("Error","No se ha seleccionado ninguna fila a modificar", "error");}
        });

//Eliminar
        jQuery("#categorias3").click( function(){
          var id = jQuery("#tablacategorias").jqGrid('getGridParam','selrow');
          var ret = jQuery("#tablacategorias").jqGrid('getRowData',id);
  if (id)	{
                  $.ajax({
                      type: "POST",
                      url: "./dao/categoriasDAO.php",
                        data: 'buttonformulario=Borrar Categoria&idcategoria='+ret.idcategoria,
                      success: function (data) {
                        if(data!=="Se ha borrado correctamente."){
                        sweetAlert("Error",data, "error");}
                        $("#tablacategorias").trigger("reloadGrid");
                      }
                  });
} else { sweetAlert("Error","No se ha seleccionado ninguna fila a borrar", "error");}
        });



        jQuery("#actualizarpedidos").click( function(){
          $("#tablapedidos").trigger("reloadGrid");
        });

});
