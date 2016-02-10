<!DOCTYPE html>
<html lang="en">
    <head>
      <?php include 'seguridad.php';?>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>GoServer-Backend</title>

        <!-- Google Fonts -->
        <link rel="shortcut icon" href="img/favicon.ico">
        <link rel="stylesheet" href="css/googlefonttitillium.css">
        <link rel="stylesheet" href="css/googlefontrobotocondensed.css">
        <link rel="stylesheet" href="css/googlefontraleway.css">
        <link rel="stylesheet" href="css/font-mfizz-2.2/font-mfizz.css">
        <link rel="stylesheet" type="text/css" href="css/sweetalert.css">
        <script src="js/sweetalert.min.js"></script>
        <!-- Bootstrap -->
        <link rel="stylesheet" href="bootstrap/bootstrap.min.css">

        <!-- Font Awesome -->
        <link rel="stylesheet" href="font-awesome-4.5.0/css/font-awesome.min.css">

        <!-- Custom CSS -->
        <link rel="stylesheet" href="css/owl.carousel.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/responsive.css">
        <link rel="stylesheet" href="css/login-register.css">
        <link rel="stylesheet" href="css/ui.jqgrid.css">
        <link rel="stylesheet" href="css/ui.jqgrid-bootstrap.css">
        <link rel="stylesheet" href="css/ui.jqgrid-bootstrap-ui.css">
        <link rel="stylesheet" href="css/jquery-ui.css">


        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <div class="header-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-4, col-md-offset-4">
                        <div class="user-menu">
                            <ul>
                                <li><a data-toggle="modal" href="javascript:void(0)"class="cerrarsession"><i class="fa fa-user"></i> Salir</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- End header area -->

        <div class="site-branding-area">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="logo">
                            <h1><a href="#"><span>Go</span>Server</a><span> Administrador</span></h1>
                        </div>
                    </div>


                </div>
            </div>
        </div> <!-- End site branding area -->
        <!-- Modal -->


        <div class="mainmenu-area">
            <div class="container">
                <div class="row">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="navbar-collapse collapse">
                        <ul class="nav navbar-nav">
                            <li><a class="tabla1"  href="#">Clientes</a></li>
                            <li><a class="tabla2"  href="#">Administradores</a></li>
                            <li><a class="tabla3"  href="#">Articulos</a></li>
                            <li><a class="tabla4"  href="#">Categorias</a></li>
                            <li><a class="tabla5" href="#">Pedidos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> <!-- End mainmenu area -->

        <div class="product-big-title-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="product-bit-title text-center">
                            <div><h2>Panel Administrativo</h2> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="single-product-area">
            <div class="zigzag-bottom"></div>
            <div class="container">


                <div class="row">
                    <div class="col-md-2">

                        <div id="menujqgrid" class="single-sidebar">
                            <h2 id="titulomenu" class="sidebar-title">Menú</h2>
                            <ul>
                                <!-- Aqui van las categorias pintadas recogidas del php (AJAX) -->
                                <div id="menuclientes">
                                <a href="#" id="cliente1">Insertar</a><br />
                                <a href="#" id="cliente2">Actualizar</a><br />
                                <a href="#" id="cliente3">Eliminar</a><br />
                                </div>

                                <div id="menuadministradores">
                                <a href="#" id="administrador1">Insertar</a><br />
                                <a href="#" id="administrador2">Actualizar</a><br />
                                <a href="#" id="administrador3">Eliminar</a><br />
                                </div>

                                <div id="menuarticulos">
                                <a href="#" id="articulos1">Insertar</a><br />
                                <a href="#" id="articulos4">Subir Imagen</a><br />
                                <a href="#" id="articulos2">Actualizar</a><br />
                                <a href="#" id="articulos3">Eliminar</a><br />
                                </div>
                                <div id="menucategorias">
                                <a href="#" id="categorias1">Insertar</a><br />
                                <a href="#" id="categorias2">Actualizar</a><br />
                                <a href="#" id="categorias3">Eliminar</a><br />
                                </div>
                                <div id="menupedidos">
                                <img id="imgfactura" src="img/facturas.png" alt="Facturas" />
                                <a href="#" align=center id="actualizarpedidos">Actualizar</a><br />
                                <a href="#" align=center id="eliminarPedidos">Eliminar pedidos incompletos</a><br />
                                </div>
                            </ul>
                        </div>
                    </div>


                            <div class="modal fade login" id="loginModal">
                                <div class="modal-dialog login animated">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                          <div id="tituloclientes"><h4 class="modal-title">Clientes</h4></div>
                                          <div id="tituloadministradores"><h4 class="modal-title">Administradores</h4></div>
                                          <div id="titulopassword"><h4 class="modal-title">Modificar Contraseña</h4></div>
                                          <div id="tituloarticulos"><h4 class="modal-title">Articulos</h4></div>
                                          <div id="titulocategorias"><h4 class="modal-title">Categorias</h4></div>
                                        </div>
                                        <div class="modal-body">
                                            <div class="box">
                                                <div class="content">
                                                    <div class="form loginBox">

                                                      <div  id="formularioclientes">
                                                        <form id="formclientes" method="post"  accept-charset="UTF-8">
                                                          <input id="usuarioc" class="form-control" type="text" placeholder="usuario" name="usuario">
                                                          <input id="nombrec" class="form-control" type="text" placeholder="Nombre" name="nombre">
                                                          <input id="apellidosc" class="form-control" type="text" placeholder="Apellidos" name="apellidos">
                                                          <input id="passwordc" class="form-control" type="password" placeholder="Contraseña" name="password">
                                                          <input id="emailc" class="form-control" type="text" placeholder="Email" name="email">
                                                        <div class="mensajeformulario"></div>
                                                            <input class="btn btn-default btn-login formaltacliente" value="Crear Cliente" name="buttonformulario">
                                                        </form>
                                                      </div>

                                                      <div  id="formularioclientesModificar">
                                                        <form id="formMclientes" method="post"  accept-charset="UTF-8">
                                                        <label  class="tooltipp" ><input id="usuario" class="form-control" type="text" placeholder="usuario" disabled name="usuario"><span>Usuario</span> </label>
                                                        <input id="usuariom" class="form-control" type="text" placeholder="usuario"  name="usuario">
                                                        <label  class="tooltipp" ><input id="nombrem" class="form-control" type="text" placeholder="Nombre" name="nombre"><span>Nombre</span> </label>
                                                        <label  class="tooltipp" ><input id="apellidosm" class="form-control" type="text" placeholder="Apellidos" name="apellidos"><span>Apellidos</span> </label>
                                                        <label  class="tooltipp" ><input id="emailm" class="form-control" type="text" placeholder="Email" name="email"><span>Email</span> </label>
                                                        <div class="mensajeformulario"></div>
                                                        <input class="btn btn-default btn-login clientepasswordmodal" value="Modificar Contraseña" name="buttonpassword">
                                                        <br />
                                                        <input class="btn btn-default btn-login modificarperfil" value="Modificar Cliente" name="buttonformulario">
                                                        </form>
                                                      </div>

                                                      <div  id="formularioclientepasswordModificar">
                                                        <form id="formclientesPassword" method="post"  accept-charset="UTF-8">
                                                          <label  class="tooltipp" >
                                                          <input id="usuariop"class="form-control" type="text" placeholder="usuario" disabled name="usuario"><span>Usuario</span> </label>
                                                          <input id="usuariooculto" class="form-control" type="text" placeholder="usuario"  name="usuario">
                                                          <input id="passwordm1" class="form-control" type="password" placeholder="Nueva Contraseña" name="password1">
                                                          <input id="passwordm2" class="form-control" type="password" placeholder="Repetir Contraseña" name="password2">
                                                        <div class="mensajeformulario"></div>
                                                        <input class="btn btn-default btn-login userpasswordmod" value="Cambiar Contraseña" name="buttonformulario">
                                                        <br />
                                                        <input class="btn btn-default btn-login clientemodal" value="Volver" name="buttonvolver">
                                                        </form>
                                                      </div>

                                                      <div  id="formularioadministradores">
                                                        <form id="formAdministrador" method="post"  accept-charset="UTF-8">
                                                          <input id="usuarioA" class="form-control" type="text" placeholder="usuario" name="usuario">
                                                          <input id="passwordA" class="form-control" type="password" placeholder="Contraseña" name="password">
                                                        <div class="mensajeformulario"></div>
                                                            <input class="btn btn-default btn-login altaadministrador" value="Crear Administrador" name="buttonformulario">
                                                        </form>
                                                      </div>

                                                      <div  id="formularioadministradorpasswordModificar">
                                                        <form id="formAdministradorPassword" method="post"  accept-charset="UTF-8">
                                                          <label  class="tooltipp" >
                                                          <input id="administradorp"class="form-control" type="text" placeholder="usuario" disabled name="usuario"><span>Usuario</span> </label>
                                                          <input id="administradorpoculto" class="form-control" type="text" placeholder="usuario"  name="usuario">
                                                          <input id="Apasswordm1" class="form-control" type="password" placeholder="Nueva Contraseña" name="password1">
                                                          <input id="Apasswordm2" class="form-control" type="password" placeholder="Repetir Contraseña" name="password2">
                                                        <div class="mensajeformulario"></div>
                                                        <input class="btn btn-default btn-login adminpassword" value="Cambiar Contraseña" name="buttonformulario">
                                                        <br />
                                                        </form>
                                                      </div>



                                                      <div id="formularioarticulos">
                                                         <form id="formularioArticuloNuevo" method="post"  accept-charset="UTF-8">
                                                          <select name="categoria" id="categoriaN"></select>
                                                          <input id="tituloN" class="form-control" type="text" placeholder="Titulo" name="titulo">
                                                          <input id="precioN" class="form-control" type="number" min="1" placeholder="Precio" name="precio">
                                                          <input id="stockN" class="form-control" type="number" min="1" placeholder="Stock" name="stock">
                                                          <input id="imagenN" class="form-control" type="text" placeholder="Imagen" name="imagen">
                                                          <input id="descripcionN" class="form-control" type="text" placeholder="Descripcion" name="descripcion">
                                                        <div class="mensajeformulario"></div>
                                                            <input class="btn btn-default btn-login altaarticulo" value="Crear Articulo" name="buttonformulario">
                                                        </form>
                                                      </div>

                                                      <div id="formularioarticulosModificar">
                                                         <form id="formularioMArticulo" method="post"  accept-charset="UTF-8">
                                                           <label  class="tooltipp" >
                                                          <input id="idarticuloM" class="form-control" type="text" placeholder="Id Articulo" disabled name="idarticulo"><span>Id Articulo</span> </label>
                                                          <input id="idarticuloNoculto" class="form-control" type="text" placeholder="Id Articulo" name="idarticulo">
                                                          <select name="categoria" id="categoriaM"></select>
                                                          <label  class="tooltipp" >
                                                          <input id="tituloM" class="form-control" type="text" placeholder="Titulo" name="titulo"><span>Titulo</span> </label>
                                                          <label  class="tooltipp" >
                                                          <input id="precioM" class="form-control" type="number" min="1" placeholder="Precio" name="precio"><span>Precio</span> </label>
                                                          <label  class="tooltipp" >
                                                          <input id="stockM" class="form-control" type="number" min="1" placeholder="Stock" name="stock"><span>Stock</span> </label>
                                                          <label  class="tooltipp" >
                                                          <input id="imagenM" class="form-control" type="text" placeholder="Imagen" name="imagen"><span>Imagen</span> </label>
                                                          <label  class="tooltipp" >
                                                          <input id="descripcionM" class="form-control" type="text" placeholder="Descripcion" name="descripcion"><span>Descripcion</span> </label>
                                                        <div class="mensajeformulario"></div>
                                                            <input class="btn btn-default btn-login artfotomodal" value="Subir Imagen" name="buttonimagen">
                                                            <br />
                                                            <input class="btn btn-default btn-login modarticulo" value="Modificar Articulo" name="buttonformulario">
                                                        </form>
                                                      </div>

                                                      <div id="formularioarticulosimagen">
                                                         <form id="formularioArticuloImagen" enctype="multipart/form-data" action="./dao/articuloUpload.php" method="POST"  accept-charset="UTF-8">
                                                           <input  id="articulofoto" class="form-control" name="uploadedfile" type="file" />
                                                           <div class="mensajeformulario"></div>
                                                           <input class="btn btn-default btn-login insertarfoto" type="submit" value="Subir archivo"/>
                                                          </form>
                                                      </div>


                                                      <div id="formulariocategorias">
                                                         <form id="formularioCategoriaNueva" method="post"  accept-charset="UTF-8">
                                                          <input id="nombrecategoriaN" class="form-control" type="text" placeholder="Nombre Categoria" name="nombrecategoria">
                                                        <div class="mensajeformulario"></div>
                                                            <input class="btn btn-default btn-login altacategoria" value="Crear Categoria" name="buttonformulario">
                                                        </form>
                                                      </div>

                                                      <div id="formulariocategoriasModificar">
                                                         <form id="formularioCategoriaModificar" method="post"  accept-charset="UTF-8">
                                                          <label  class="tooltipp" > <input id="idcategoria" class="form-control" type="text" placeholder="Id Categoria" disabled name="idcategoria"><span>Id Categoria</span> </label>
                                                          <input id="idcategoriaoculta" class="form-control" type="text" placeholder="Id Categoria"  name="idcategoria">
                                                          <label  class="tooltipp" ><input id="nombrecategoria" class="form-control" type="text" placeholder="Nombre Categoria" name="nombrecategoria"> <span>Categoria</span> </label>
                                                        <div class="mensajeformulario"></div>
                                                          <input class="btn btn-default btn-login modcategoria" value="Modificar Categoria" name="buttonformulario">
                                                        </form>
                                                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <div class="forgot login-footer">

                                            </div>
                                            <div class="forgot register-footer" style="display:none">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                    <div class="col-md-8">
        <img id="imgserver" src="img/servers.png" alt="Servers">
                        <!-- Aqui iran pintados los productos que esten segun categoria-->
        <div  align="center" id="jqgridTabla1">
                          <table id="tablaclientes"></table>
                          <div id="pieclientes"></div>
        </div>
        <div align="center" id="jqgridTabla2">
                          <table id="tablaarticulos"></table>
                          <div id="piearticulos"></div>
        </div>
        <div align="center" id="jqgridTabla3">
                          <table id="tablacategorias"></table>
                          <div id="piecategorias"></div>
        </div>
        <div align="center" id="jqgridTabla4">
                          <table id="tablapedidos"></table>
                          <div id="piepedidos"></div>
                          <br />
                          <table id="detallepedido"></table>
                          <div id="detallepedidopie"></div>
      </div>
      <div align="center" id="jqgridTabla5">
                        <table id="tablaadministradores"></table>
                        <div id="pieadministradores"></div>
      </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="footer-top-area">
            <div class="zigzag-bottom"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="footer-about-us">
                            <h2><span>Go</span>Server</h2>
                            <p>Algunas de las tecnologias mas usadas en la web son:</p>

                            <div class="footer-social">
                                <a href="https://www.mysql.com/" target="_blank"><i class="icon-mysql"></i></a>
                                <a href="http://www.w3schools.com/html/" target="_blank"><i class="icon-html"></i></a>
                                <a href="http://www.w3schools.com/css/" target="_blank"><i class="icon-css"></i></a>
                                <a href="http://www.php.net/" target="_blank"><i class="icon-php"></i></a>
                                <a href="http://www.w3schools.com/js/" target="_blank"><i class="icon-javascript"></i></a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        <div class="footer-bottom-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="copyright">
                            <p>  Coded with <i class="fa fa-heart"></i> by Fantastic 4 team &copy;</p>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="footer-card-icon">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Latest jQuery form server -->
        <script src="js/jquery-2.1.4.min.js"></script>

        <!-- Bootstrap JS form CDN -->
        <script src="js/bootstrap.min.js"></script>

        <!-- jQuery sticky menu -->
        <!-- build:js ./administrador.min.js -->
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.sticky.js"></script>
        <script src="js/login.js"></script>
        <script src="js/grid.locale-es.js"></script>
        <script src="js/jquery.jqGrid.min.js"></script>
        <script src="js/tablasjqgrid.js"></script>
        <script src="js/formjqgrid.js"></script>
        <script src="js/funcionesBotones.js"></script>
        <!-- endbuild -->
        <!-- jQuery easing -->
        <script src="js/jquery.easing.1.3.min.js"></script>
        <!-- Main Script -->
        <script src="js/main.js"></script>
    </body>
</html>
