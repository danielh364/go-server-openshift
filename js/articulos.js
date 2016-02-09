/* global carrito */

window.onload = function () {
    carrito = new Carrito(1);
    tempcarrito = JSON.parse(sessionStorage.getItem('tcarrito'));
    modal = false;

    if (tempcarrito !== null) {
        carrito.fecha = tempcarrito.fecha;
        carrito.numero = tempcarrito.numero;
        carrito.articulos = tempcarrito.articulos;
    }
    contararticuloscarrito();
    totalcarrito();
};

function mostrar_articulos(articulo) {
    cont = 0;
    $categoria = articulo;

    $('#articulos').empty();
    $.ajax({
        type: 'GET',
        data: {categoria: "" + $categoria + ""},
        url: 'articulos.php',
        dataType: 'json',
        success: function (data) {
            $.each(data, function () {

                //codigo del div  del articulo, descripcion etc
                if (cont === 0) {
                    $('#titulocategoria').empty();
                    $('<h2>Productos</h2><h3>' + articulo + '</h3>').appendTo('#titulocategoria');
                    cont++;
                }

                var codigo = this.codigo;
                var categoria = this.categoria;
                var titulo = this.titulo;
                var descripcion = this.descripcion;
                var imagen = this.imagen;
                var precio = this.precio;
                var unidades = parseFloat(1);

                articulo1 = new Articulo(codigo, categoria, titulo, descripcion, imagen, precio, unidades);

                $('<div class="col-md-4 col-sm-7"> <div class="single-shop-product">  <div class="product-upper" >  <img src="img/' + articulo1.imagen + '" alt="" ><h2>' + articulo1.titulo + ' </h2><div class="product-carousel-price"> <ins>' + articulo1.precio + ' € /mes</ins> <p>' + articulo1.descripcion + '</p><div class="product-option-shop"> <a  class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="#carrito";>añadir al carrito</a> </div> </div> </div> </div></div>').appendTo('#articulos');

            });

        }
    });
}

function mostrar_articulosDestacados() {
    $.ajax({
        url: 'articulos_destacados.php',
        dataType: 'json',
        success: function (data) {
            $.each(data, function () {


                var codigo = this.codigo;
                var categoria = this.categoria;
                var titulo = this.titulo;
                var descripcion = this.descripcion;
                var imagen = this.imagen;
                var precio = this.precio;
                var unidades = parseFloat(1);

                articulo2 = new Articulo(codigo, categoria, titulo, descripcion, imagen, precio, unidades);

                $('<div class="col-md-4 col-sm-7"> <div class="single-shop-product">  <div class="product-upper" >  <img src="img/' + articulo2.imagen + '" alt="" ><h2>' + articulo2.titulo + ' </h2><div class="product-carousel-price"> <ins>' + articulo2.precio + ' € /mes</ins> <p>' + articulo2.descripcion + '</p><div class="product-option-shop"> <a  class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="#carrito";>añadir al carrito</a> </div> </div> </div> </div></div>').appendTo('#articulos');
            });
            botonarticulo();
        }
    });
}

function botonarticulo() {
    $('#articulos').on('click', '.add_to_cart_button', function () {
        titulo = $(this).parent().parent().parent().find('h2').text();
        descripcion = $(this).parent().parent().find('p').text();
        preciocontodo = $(this).parent().parent().find('ins').text();
        preciosplit = preciocontodo.split(" ");
        precio = parseFloat(preciosplit[0]);
        imagenSRC = $(this).parent().parent().parent().find('img').attr("src");
        imagensplit = imagenSRC.split("/");
        imagen = (imagensplit[1]);
        unidades = parseFloat(1);

        articuloCarrito = new ArticuloCarrito(titulo, descripcion, imagen, precio, unidades);
        carrito.anyadir(articuloCarrito);
        efectoAnyadirProducto();
    }
    );
}

function desplegablecarrito() {
    var divcarro = document.getElementsByClassName('carro');
    divcarro[0].innerHTML = "";
    if (carrito.articulos.length > 0) {
        for (i = 0; i < carrito.articulos.length; i++) {

            divcarro[0].innerHTML += '<div class="imagenytitulocarrito"><span class="item"><span class="item-left">';
            divcarro[0].innerHTML += '<img class="imgcarrito" src="img/' + carrito.articulos[i].imagen + '" alt="" /><span class="item-info">';
            divcarro[0].innerHTML += '<h5>' + carrito.articulos[i].titulo + '</h5></div> <div class="contenidoarticulocarrito"><span>unidades: </span>';
            divcarro[0].innerHTML += '<input type="button" class="minus" value="-" onclick="restarunidad(\'' + carrito.articulos[i].titulo + '\');">';
            divcarro[0].innerHTML += '<input class="valorunidades" type="text" size="1" min="0" max="2" value="' + carrito.articulos[i].unidades + '"disabled />';
            divcarro[0].innerHTML += '<input type="button" class="plus" value="+" onclick="sumarunidad(\'' + carrito.articulos[i].titulo + '\');"> <br />';
            divcarro[0].innerHTML += '<span> precio: ' + carrito.articulos[i].precio + ' € </span></span> </span> <span class="item-right">';
            divcarro[0].innerHTML += '<input type="button" class="btn btn-xs btn-danger pull-right" value="X" onclick="borrarArticulo(' + i + ');"></input></span></span> </div><br /><div class="linea2"></div>';
        }
    } else {
        divcarro[0].innerHTML = 'No hay articulos en el carrito';
    }
}

function totalcarrito() {
    total = 0;
    for (i = 0; i < carrito.articulos.length; i++) {
        total = total + (parseFloat(carrito.articulos[i].precio) * parseFloat(carrito.articulos[i].unidades));
    }

    var cartamunt = document.getElementsByClassName('cart-amunt');
    cartamunt[0].innerHTML = total + " €";


    if (modal === true) {
        var divcarroModal = document.getElementById('totalmodal');
        divcarroModal.innerHTML = "<h4 > Total - " + total + " €  </h4>";
    } else {
    }


    if (document.getElementById('totalpedido') !== null) {

        var divcarrotabla = document.getElementById('totalpedido');
        divcarrotabla.innerHTML = total + " €";
    } else {
    }
    carrito.total = total;
}


function restarunidad(articulo) {

    for (i = 0; carrito.articulos.length; i++) {

        if (articulo === carrito.articulos[i].titulo) {

            if (carrito.articulos[i].unidades > 1) {
                unidad = parseFloat(carrito.articulos[i].unidades) - 1;
                carrito.articulos[i].unidades = unidad;


                if (document.getElementsByClassName('valorunidades')[i] !== undefined) {
                    document.getElementsByClassName('valorunidades')[i].value = parseFloat(carrito.articulos[i].unidades);
                } else {
                }
                if (document.getElementById('tablacarro') !== null) {
                    document.getElementsByClassName('valorunidadestabla')[i].value = parseFloat(carrito.articulos[i].unidades);
                    document.getElementsByClassName('unidadesarticulo')[i].innerHTML = parseFloat(carrito.articulos[i].unidades) * parseFloat(carrito.articulos[i].precio) + " €";
                } else {
                }
                if (modal === true) {
                    document.getElementsByClassName('valorunidadesmodal')[i].value = parseFloat(carrito.articulos[i].unidades);
                } else {
                }
                totalcarrito();
                sessionStorage.setItem('tcarrito', JSON.stringify(carrito));
            }
        } else {
        }
    }
}

function sumarunidad(articulo) {
    for (i = 0; carrito.articulos.length; i++) {
        if (articulo === carrito.articulos[i].titulo) {
            unidad = parseFloat(carrito.articulos[i].unidades) + 1;
            carrito.articulos[i].unidades = unidad;

            if (document.getElementsByClassName('valorunidades')[i] !== undefined) {
                document.getElementsByClassName('valorunidades')[i].value = parseFloat(carrito.articulos[i].unidades);
            } else {
            }

            if (document.getElementById('tablacarro') !== null) {
                document.getElementsByClassName('valorunidadestabla')[i].value = parseFloat(carrito.articulos[i].unidades);
                document.getElementsByClassName('unidadesarticulo')[i].innerHTML = parseFloat(carrito.articulos[i].unidades) * parseFloat(carrito.articulos[i].precio) + " €";
            } else {
            }

            if (modal === true) {
                document.getElementsByClassName('valorunidadesmodal')[i].value = parseFloat(carrito.articulos[i].unidades);
            } else {
            }

            totalcarrito();
            sessionStorage.setItem('tcarrito', JSON.stringify(carrito));
        }
    }
}

function borrarArticulo(posicion) {

    if (posicion === 0) {
        carrito.articulos.shift();
        totalcarrito();
    } else {
        carrito.articulos.splice(posicion, 1);
        totalcarrito();
    }
    contararticuloscarrito();
    if (modal === true) {
        CarritoModal();
    }


    if (document.getElementById('totalpedido') !== null) {
        tablacarrito();
    } else {
    }

    desplegablecarrito();
    efectoAnyadirProducto();
    sessionStorage.setItem('tcarrito', JSON.stringify(carrito));
}

function CarritoModal() {
    modal = true;
    var divcarroModal = document.getElementById('carritoModal');
    divcarroModal.innerHTML = "";
    if (carrito.articulos.length > 0) {
        for (i = 0; i < carrito.articulos.length; i++) {

            divcarroModal.innerHTML += '<div class="articulomodal"><p><img class="imgcarrito" src="img/' + carrito.articulos[i].imagen + '" alt="" />';
            divcarroModal.innerHTML += '<h5>' + carrito.articulos[i].titulo + '</h5></p><p><span>' + carrito.articulos[i].descripcion + ' </span>';
            divcarroModal.innerHTML += '</p><p><span> unidades: </span>';
            divcarroModal.innerHTML += '<input type="button" class="minus" value="-" onclick="restarunidad(\'' + carrito.articulos[i].titulo + '\');" /><input class="valorunidadesmodal" type="text"  name="numericInput" size="1" min="0" max="2" value="' + carrito.articulos[i].unidades + '" disabled />';
            divcarroModal.innerHTML += '<input type="button" class="plus" value="+" onclick="sumarunidad(\'' + carrito.articulos[i].titulo + '\');" />';
            divcarroModal.innerHTML += '<span> precio: ' + carrito.articulos[i].precio + ' € </span> <input type="button" class="btn btn-xs btn-danger pull-right" value="X" onclick="borrarArticulo(' + i + ');"></input>';
            divcarroModal.innerHTML += '</p></div><br /><div class="linea"></div><br />';

        }
    } else {
        divcarroModal.innerHTML = 'No hay articulos en el carrito';
    }
    totalcarrito();
}

function CerrarModal() {
    modal = false;
}

function tablacarrito() {
    var divtabla = document.getElementById('tablacarro');
    divtabla.innerHTML = "";
      document.getElementById("papelera").style.display = 'block';
    if (carrito !== null && carrito.articulos.length >= 1) {
        for (i = 0; i < carrito.articulos.length; i++) {
            divtabla.innerHTML += '<tr class="cart_item"><td class="product-remove"><a title="Remove this item" class="remove" href="#"  onclick="borrarArticulo(' + i + ');">×</a></td><td class="product-thumbnail"><img name="producto|'+i+'" ondragstart="setdragitem(this, event);" ondragend="cleardragitem();" width="145" height="145" class="shop_thumbnail" src="img/' + carrito.articulos[i].imagen + '"></td><td class="product-name"> <div class="expander" id="tbox">' + carrito.articulos[i].titulo + '</div><p class="texttoggle"> <span class="clasenegrita">Descripcion del producto:</span> ' + carrito.articulos[i].descripcion + '</p></td><td class="product-price"><span class="amount">' + carrito.articulos[i].precio + ' €</span></td><td class="product-quantity"><div class="quantity buttons_added"> <input type="button" class="minus" value="-" onclick="restarunidad(\'' + carrito.articulos[i].titulo + '\');" /><input class="valorunidadestabla" type="text"  name="numericInput" size="1" min="0" max="2" value="' + carrito.articulos[i].unidades + '" disabled /> <input type="button" class="plus" value="+" onclick="sumarunidad(\'' + carrito.articulos[i].titulo + '\');" />   </div>  </td><td class="product-subtotal"><span class="unidadesarticulo">' + parseFloat(carrito.articulos[i].precio) * parseFloat(carrito.articulos[i].unidades) + ' €</span></td></tr>';
      }
    } else {
        var divinfo = document.getElementById('sinarticulos');
        divinfo.innerHTML = "No hay articulos en el carrito";
        document.getElementById("papelera").style.display = 'none';
    }

    $('.expander').click(function(){
if($(this).attr('class')==='expander mostrando'){
        $('.expander').removeClass("mostrando");
        $('.mostrando').next().slideToggle(200);
        $(this).next().slideToggle(200);

}else{
        $('.expander').removeClass("mostrando");
        $(this).addClass("mostrando");
        jQuery(".texttoggle").hide();
        $(this).next().slideToggle(200);
}
    });
}



function pagarUsuarioRegistrado() {
    $.ajax({
        type: "POST",
        url: "seguridad.php",
        success: function (data) {
              if (carrito.total > 0) {
            openNCuentaModal();  } else {
                  sweetAlert("Error", "No tienes ningún articulo en la cesta", "error");
              }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            /*alert("Status: " + textStatus); alert("Error: " + errorThrown);*/
            openLoginModal();
        }
    });
}

function asignaryenviarpago(){
      var comprobar = true;
    var ncuenta = document.getElementById('ncuenta').value;

    if (ncuenta == "" && comprobar == true) {
        shakeModalError("Numero de Cuenta: No puede estar vacio.");
        comprobar = false;
    }
if(comprobar===true){

  setTimeout(function () {
      $('#loginModal').modal('toggle');
  }, 650);
  carrito.ncuenta=ncuenta;
  enviarCarrito();
}
}



function enviarCarrito() {

        enviarcarrito = JSON.stringify(carrito);
        $.ajax({
            type: "POST",
            url: "./dao/carritoDAO.php",
            data: 'datos=' + enviarcarrito,
            success: function (data) {
              if(data==="Pago realizado con exito"){
                swal("",data, "success");
                carrito.articulos = [];
                totalcarrito();
                contararticuloscarrito();
                tablacarrito();
                sessionStorage.setItem('tcarrito', JSON.stringify(carrito));
              }else{
                  sweetAlert("Error", data, "error");
              }

            }
        });
}

function enviarEmailContacto() {


      var comprobar = true;

      var nombre = document.getElementById('namecontact').value;
      var email = document.getElementById('emailcontact').value;
      var mensaje = document.getElementById('messagecontact').value;


      var validarCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (nombre === "" && email === "" && mensaje === "" && comprobar === true) {
          sweetAlert("Error", "No pueden estar todos los campos vacios.", "error");
          comprobar = false;
      }
      if (nombre === "" && comprobar === true) {
          sweetAlert("Error", "Nombre: no puede estar vacio.", "error");
          comprobar = false;
      }

      if (email === "" && comprobar === true) {
          sweetAlert("Error", "Email: no puede estar vacio.", "error");
          comprobar = false;
      }

      if (!validarCorreo.test(email) && comprobar === true) {
          sweetAlert("Error", "Email: Formato incorrecto.", "error");
          comprobar = false;
      }

      if (mensaje === "" && comprobar === true) {
          sweetAlert("Error", "Mensaje: no puede estar vacio.", "error");
          comprobar = false;
      }
      if (comprobar === true) {
          var dataString = $('#contact_form').serialize();
          $.ajax({
              type: "POST",
              url: "./dao/contacto.php",
              data: dataString,
              success: function (data) {
                if(data!=="Error al enviar el Email"){
                    swal("", "" + data + "", "success");
                }else{
                  sweetAlert("Error", data, "error");
                }
              }
          });
      }
}

function efectoAnyadirProducto() {
    $('.shopping-item').transition({opacity: 0});
    $('.shopping-item').transition({opacity: 100});
}
