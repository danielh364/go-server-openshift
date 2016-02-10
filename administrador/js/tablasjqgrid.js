function tablaClientes() {
  document.getElementById("titulomenu").style.display = 'block';
  document.getElementById("menujqgrid").style.display = 'block';
  jQuery("#jqgridTabla1").show().siblings().hide();
  jQuery("#menuclientes").show().siblings().hide();

  jQuery("#tablaclientes").jqGrid({
     	url:'jqgrid/clientes.php',
  	datatype: "json",
    colNames: ["usuario", "nombre", "apellidos", "password","email"],
  colModel: [
  { name: "usuario",index:'usuario', align:"center",width:150},
  { name: "nombre",index:'nombre',  align:"center",width:150},
  { name: "apellidos",index:'apellidos', align:"center", width:150},
  { name: "password",index:'password', hidden: true},
  { name: "email",index:'email',  align:"center",width:180}
  ],
     	rowNum:5,
     	rowList:[5,10,15],
     	pager: '#pieclientes',
     	sortname: 'usuario',
      viewrecords: true,
      sortorder: "asc",
      height:'auto',
      caption:"Clientes",
  }).navGrid("#pieclientes",{edit:false,add:false,del:false});
}

function tablaAdministradores(){

  document.getElementById("titulomenu").style.display = 'block';
  document.getElementById("menujqgrid").style.display = 'block';
  jQuery("#jqgridTabla5").show().siblings().hide();
  jQuery("#menuadministradores").show().siblings().hide();

  jQuery("#tablaadministradores").jqGrid({
     	url:'jqgrid/administradores.php',
  	datatype: "json",
    colNames: ["usuario","password"],
  colModel: [
  { name: "usuario",index:'usuario', align:"center",width:650},
  { name: "password",index:'password', hidden: true}
  ],
     	rowNum:5,
     	rowList:[5,10,15],
     	pager: '#pieadministradores',
     	sortname: 'usuario',
      viewrecords: true,
      sortorder: "asc",
      height:'auto',
      caption:"Administradores",
  }).navGrid("#pieadministradores",{edit:false,add:false,del:false});
}
function tablaArticulos() {
  document.getElementById("titulomenu").style.display = 'block';
  document.getElementById("menujqgrid").style.display = 'block';
  jQuery("#jqgridTabla2").show().siblings().hide();
  jQuery("#menuarticulos").show().siblings().hide();

  jQuery("#tablaarticulos").jqGrid({
     	url:'jqgrid/articulos.php',
  	datatype: "json",
    colNames: ["idarticulo", "categoria", "titulo","precio","stock","imagen","descripcion"],
  colModel: [
  { name: "id",index:'idarticulo', align:"center",hidden: true},
  { name: "categoria",index:'categoria',  align:"center",width:120},
  { name: "titulo",index:'titulo', align:"center", width:150},
  { name: "precio",index:'precio', align:"center", width:50},
  { name: "stock",index:'stock',  align:"center",width:50},
  { name: "imagen",index:'imagen',  align:"left",width:150},
  { name: "descripcion",index:'descripcion',  align:"left",width:550}
  ],
     	rowNum:10,
     	rowList:[10,20,30,40],
     	pager: '#piearticulos',
     	sortname: 'idarticulo',
      viewrecords: true,
      height:'auto',
      sortorder: "asc",
      caption:"Articulos",
  }).navGrid("#piearticulos",{edit:false,add:false,del:false});

}


function tablaCategorias() {
  document.getElementById("titulomenu").style.display = 'block';
  document.getElementById("menujqgrid").style.display = 'block';
  jQuery("#jqgridTabla3").show().siblings().hide();
  jQuery("#menucategorias").show().siblings().hide();

  jQuery("#tablacategorias").jqGrid({
     	url:'jqgrid/categorias.php',
  	datatype: "json",
    colNames: ["idcategoria", "nombre"],
  colModel: [
  { name: "idcategoria",index:'idcategoria', align:"center",hidden: true},
  { name: "nombre",index:'nombre',  align:"center",width:650}
  ],
     	rowNum:5,
     	rowList:[5,10,15,20],
     	pager: '#piecategorias',
     	sortname: 'idcategoria',
      viewrecords: true,
      sortorder: "asc",
      height:'auto',
      caption:"categorias",
  }).navGrid("#piecategorias",{edit:false,add:false,del:false});
}


function tablaPedidos() {
  document.getElementById("titulomenu").style.display = 'none';
  document.getElementById("menujqgrid").style.display = 'block';
  jQuery("#jqgridTabla4").show().siblings().hide();
  jQuery("#menupedidos").show().siblings().hide();

  jQuery("#tablapedidos").jqGrid({
     	url:'jqgrid/pedidos.php',
  	datatype: "json",
    colNames: ["idPedido", "Usuario","Fecha","total","Pagado"],
  colModel: [
  { name: "idPedido",index:'idPedido', align:"center",width:150},
  { name: "Usuario",index:'Usuario',  align:"center",width:150},
  { name: "Fecha",index:'Fecha',  align:"center",width:150},
  { name: "total",index:'total',  align:"center",width:150},
  { name: "Pagado",index:'Pagado',  align:"center",width:150}
  ],
     	rowNum:10,
     	rowList:[10,20,30,40],
     	pager: '#piepedidos',
     	sortname: 'idPedido',
      viewrecords: true,
      sortorder: "desc",
      height:'auto',
      caption:"Pedidos",
      onSelectRow: function(ids) {
  if(ids == null) {
    ids=0;
    if(jQuery("#detallepedido").jqGrid('getGridParam','records') >0 )
    {
      jQuery("#detallepedido").jqGrid('setGridParam',{url:"jqgrid/detallepedidos.php?q=1&id="+ids,page:1});
      jQuery("#detallepedido").jqGrid('setCaption',"Detalle Pedido: "+ids)
      .trigger('reloadGrid');
    }
  } else {
    jQuery("#detallepedido").jqGrid('setGridParam',{url:"jqgrid/detallepedidos.php?q=1&id="+ids,page:1});
    jQuery("#detallepedido").jqGrid('setCaption',"Detalle Pedido: "+ids)
    .trigger('reloadGrid');
  }
}
  }).navGrid("#piepedidos",{edit:false,add:false,del:false});

  jQuery("#detallepedido").jqGrid({
  	height: 100,
     	url:'jqgrid/detallepedidos.php?q=1&id=0',
  	datatype: "json",
     	colNames:['idpedido','idarticulo','titulo','unidades','precio'],
     	colModel:[
     		{name:'idpedido',index:'idpedido', width:70, hidden: true},
     		{name:'idarticulo',index:'idarticulo', width:70, hidden: true},
     		{name:'titulo',index:'titulo', width:200, align:"center"},
     		{name:'unidades',index:'unidades', width:80, align:"center"},
     		{name:'precio',index:'precio', width:80, align:"center"}
     	],
     	rowNum:5,
     	rowList:[5,10,20],
     	pager: '#detallepedidopie',
     	sortname: 'idpedido',
      viewrecords: true,
      sortorder: "asc",
      height:'auto',
  	multiselect: true,
  	caption:"Detalle Pedido"
  }).navGrid('#detallepedidopie',{add:false,edit:false,del:false});
}
