/* global carrito */

function Articulo(codigo, categoria, titulo, descripcion, imagen, precio, unidades) {
    this.codigo = codigo;
    this.categoria = categoria;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.precio = precio;
    this.unidades = unidades;
}

function ArticuloCarrito(titulo, descripcion, imagen, precio, unidades) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.precio = precio;
    this.unidades = unidades;
}

function Carrito(numero) {
    this.numero = numero;
    this.fecha = new Date();
    this.articulos = [];
    this.total;
}

Carrito.prototype.eliminarCarro = function () {
    this.articulos = [];
};


Carrito.prototype.anyadir = function (articulo) {
    comprobar = false;
    unidad = 0;
    if (this.articulos.length === 0) {
        this.articulos.push(articulo);
        comprobar = true;
    } else {
        for (i = 0; i < this.articulos.length; i++) {
            if (this.articulos[i].titulo === articulo.titulo) {
                unidad = parseInt(this.articulos[i].unidades) + 1;
                this.articulos[i].unidades = unidad;
                comprobar = true;
            } else {
                /*este else no hace nada*/
            }
        }
    }
    if (comprobar === false) {
        this.articulos.push(articulo);
    }
    totalcarrito();
    contararticuloscarrito();
    sessionStorage.setItem('tcarrito', JSON.stringify(carrito));
};


function contararticuloscarrito() {
    var contadorcarrito = document.getElementsByClassName('product-count');
    contadorcarrito[0].innerHTML = carrito.articulos.length;
}
