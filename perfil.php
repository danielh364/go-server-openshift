<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>GoServer</title>

        <!-- Google Fonts -->
        <link rel="shortcut icon" href="img/favicon.ico">
        <link rel="stylesheet" href="css/googlefonttitillium.css">
        <link rel="stylesheet" href="css/googlefontrobotocondensed.css">
        <link rel="stylesheet" href="css/googlefontraleway.css">

        <!-- Bootstrap -->
        <link rel="stylesheet" href="bootstrap/bootstrap.min.css">

        <!-- Font Awesome -->
        <link rel="stylesheet" href="font-awesome-4.5.0/css/font-awesome.min.css">

        <!-- Custom CSS -->
        <link rel="stylesheet" href="css/owl.carousel.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/responsive.css">
        <link rel="stylesheet" href="css/login-register.css">
        <link rel="stylesheet" type="text/css" href="css/sweetalert.css">



        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <![endif]-->
    </head>
    <body>
        <?php include("seguridad.php"); ?>
        <div class="header-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-4, col-md-offset-4">
                        <div class="user-menu">
                            <ul>
                                <li><a data-toggle="modal" href="javascript:void(0)" class="identificate"><i class="fa fa-user"></i>Identificate</a></li>
                                <li><a data-toggle="modal" href="javascript:void(0)" class="registrarse"><i class="fa fa-user"></i> Registrarse</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- End header area -->


        <div class="modal fade login" id="loginModal">
            <div class="modal-dialog login animated">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">Login</h4>
                    </div>
                    <div class="modal-body">
                        <div class="box">
                            <div class="content">


                                <div class="form loginBox">
                                    <form id="formulariorAcceso" method="post"  accept-charset="UTF-8">
                                        <input id="usuarioAcc" class="form-control" type="text" placeholder="Usuario" name="usuario">
                                        <input id="passwordAcc" class="form-control" type="password" placeholder="Contraseña" name="password">
                                        <div class="mensajeformulario"></div>
                                        <input class="btn btn-default btn-login loginboton" value="Acceder Cuenta" name="buttonformulario" >
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="content registerBox" style="display:none;">
                                <div class="form">
                                    <form method="post" html="{:multipart=>true}" data-remote="true" id="formularioregistro" accept-charset="UTF-8">
                                        <input id="nombrer" class="form-control" type="text" placeholder="Nombre" name="nombre">
                                        <input id="apellidosr" class="form-control" type="text" placeholder="Apellidos" name="apellidos">
                                        <input id="usuarior" class="form-control" type="text" placeholder="usuario" name="usuario">
                                        <input id="emailr" class="form-control" type="text" placeholder="Email" name="email">
                                        <input id="passwordr" class="form-control" type="password" placeholder="Contraseña" name="password">
                                        <div class="mensajeformulario"></div>
                                        <input class="btn btn-default btn-register botonregistro"  value="Crear Cuenta" name="buttonformulario" >
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="forgot login-footer">
                            <span>Crear una
                                <a class="registerform" href="javascript:void(0)"> Cuenta</a>
                                ?</span>
                        </div>
                        <div class="forgot register-footer" style="display:none">
                            <span>Ya tienes una cuenta?</span>
                            <a class="loginform" href="javascript:void(0)">Identificate</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="site-branding-area">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="logo">
                            <h1><a href="index.html"><span>Go</span>Server</a></h1>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="shopping-item">


                            <li class="dropdown">
                                <span >Total - </span> <span class="cart-amunt">0€</span> <span class="product-count"> 0 </span>
                                <a href="#"  class="dropdown-toggle carritodrop" data-toggle="dropdown" role="button" aria-expanded="false"> <span class="fa fa-shopping-cart"></span><span class="caret"></span></a>
                                <ul class="dropdown-menu dropdown-cart" role="menu">

                                    <div class="carro">
                                        <!-- funcion de los articulos  -->
                                    </div>

                                    <li class="divider"></li>
                                    <div id="botonmodal">
                                        <button type="button" class="btn btn-info btn-md, bmodal funcionmodalcarrito" data-toggle="modal" data-target="#myModal">Ver Carrito</button>
                                    </div>
                                </ul>

                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- End site branding area -->
        <!-- Modal -->
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Carrito</h4>
                    </div>
                    <div class="linea"></div>
                    <div class="modal-body" id="carritoModal"></div>
                    <div id="totalmodal"></div>
                    <div class="modal-footer">
                        <a href="cart.html"><button type="button" class="btn btn-success btn-md, bmodal">Pagar</button></a>
                        <button type="button" class="btn btn-danger btn-md" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>

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
                            <li><a href="index.html">Inicio</a></li>
                            <li ><a href="productos.html">Productos</a></li>
                            <li><a href="cart.html">Carrito</a></li>
                            <li><a href="contacto.html">Contacto</a></li>
                            <li><a href="faq.html">FAQ</a></li>
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
                            <div id="titulocategoria"><h2>Perfil</h2> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="single-product-area">
            <div class="zigzag-bottom"></div>
            <div class="container">


                <div class="row">

                    <!-- left column -->
                    <div class="col-md-3">
                        <div class="single-sidebar">
                            <h2 class="sidebar-title">Menú</h2>
                            <ul>
                                <!-- Aqui van las categorias pintadas recogidas del php (AJAX) -->
                                <div id="perfil">
                                    <a id="miperfil" href="#">Mi Perfil</a>
                                    <br />
                                    <a id="facturasusuario" href="#">Facturas</a>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <!-- edit form column -->
                    <div class="col-md-9 personal-info" >
                        <div id="formularioperfil">
                            <h4 align=center>Mi Perfil</h4>
                            <form id="editarperfil" class="form-horizontal" role="form">
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">Nombre:</label>
                                    <div class="col-lg-8">
                                        <input id="infonombre" class="form-control" type="text" name="nombre" >
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">Apellidos:</label>
                                    <div class="col-lg-8">
                                        <input id="infoapellidos" class="form-control" type="text" name="apellidos" >
                                    </div></div><div class="form-group">
                                    <label class="col-lg-3 control-label">Email:</label>
                                    <div class="col-lg-8">
                                        <input id="infoemail" class="form-control" type="text" name="email">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-3 control-label">Usuario:</label>
                                    <div class="col-md-8">
                                        <input id="infousuario" class="form-control" type="text"  name="usuario" disabled>
                                    </div></div>
                                <div class="form-group">
                                    <label class="col-md-3 control-label"></label>
                                    <div class="col-md-8">
                                        <input type="button" class="btn btn-primary changepassmodal" value="Modificar Contraseña">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-3 control-label"></label>
                                    <div class="col-md-8">
                                        <input class="btn btn-primary modificarperfil" name="buttonformulario"  value="Guardar Cambios">
                                        <span></span>
                                        <a class="perfilredirect"><input type="reset" class="btn btn-default" value="Cancelar"></a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div id="facturas">

                        </div>

                    </div>
                </div>
            </div>

        </div>


        <div class="modal fade login" id="modalpassd">
            <div class="modal-dialog login animated">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">Cambiar Contraseña</h4>
                    </div>
                    <div class="modal-body">
                        <div class="box">
                            <div class="content">


                                <div class="form loginBox">
                                    <form id="cambiarpass" method="post"  accept-charset="UTF-8">
                                        <label>Nueva Contraseña:</label>
                                        <input id="passwordc1" class="form-control" type="password" placeholder="Nueva Contraseña" name="password1">
                                        <label>Repetir Contraseña:</label>
                                        <input id="passwordc2" class="form-control" type="password" placeholder="Repetir Contraseña" name="password2">
                                        <div class="mensajeformulario"></div>
                                        <input class="btn btn-default btn-login changeuserpass" value="Cambiar Contraseña" name="buttonformulario">
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
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
                            <p>Si te gusta nuestra pagina compartenos! Estamos en todas las redes sociales, así podrás acceder a nuevas ofertas siendo el primero en recibirlas</p>
                            <div class="footer-social">
                                <a href="#" target="_blank"><i class="fa fa-facebook"></i></a>
                                <a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
                                <a href="#" target="_blank"><i class="fa fa-youtube"></i></a>
                                <a href="#" target="_blank"><i class="fa fa-linkedin"></i></a>
                                <a href="#" target="_blank"><i class="fa fa-pinterest"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                        <div class="footer-newsletter">
                            <h2 class="footer-wid-title">Newsletter</h2>
                            <p>Suscríbete a nuestro newsletter y encontrarás ofertas exclusivas en tu mail!</p>
                            <div class="newsletter-form">
                                <input type="email" placeholder="Introduce tu email">
                                <input type="submit" value="Subscribir">
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
                            <i class="fa fa-cc-discover"></i>
                            <i class="fa fa-cc-mastercard"></i>
                            <i class="fa fa-cc-paypal"></i>
                            <i class="fa fa-cc-visa"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

          <!-- build:js ./js/perfil.min.js -->
        <script src="js/jquery-2.1.4.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/sweetalert.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/jquery.sticky.js"></script>
        <script src="js/login-register.js"></script>
        <script src="js/jquery.transit.min.js"></script>
        <script src="js/jspdf.min.js"></script>
        <script src="js/jspdf.plugin.autotable.js"></script>
        <script src="js/clases.js"></script>
        <script src="js/categorias.js"></script>
        <script src="js/articulos.js"></script>
        <script src="js/perfilready.js"></script>
        <script src="js/jquery.easing.1.3.min.js"></script>
        <script src="js/main.js"></script>
        <!-- endbuild -->
    </body>
</html>
