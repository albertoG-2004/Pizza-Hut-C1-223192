function pedidoTienda(){
    var btnTienda = document.getElementById('btn-recoger');
    var btnDomicilio = document.getElementById('btn-entrega');
    btnTienda.style.backgroundColor = "white";
    btnTienda.style.top = "210px";
    btnTienda.style.height = "60px";
    btnDomicilio.style.top = "220px";
    btnDomicilio.style.height = "50px";
    btnDomicilio.style.backgroundColor = "#E0DDDD";
    document.getElementById('titulo').innerHTML = "ORDENA ONLINE, RECOGE EN TIENDA";
    document.getElementById('lbl-datos').innerHTML = "Ingresa tu dirección y elige tu tienda más cercana";
    document.getElementsByClassName('input-datos')[0].placeholder="Ingresa tu CP o Colonia";
}
function pedidoDomicilio(){
    var btnDomicilio = document.getElementById('btn-entrega');
    var btnTienda = document.getElementById('btn-recoger');
    btnDomicilio.style.backgroundColor = "white";
    btnDomicilio.style.top = "210px";
    btnDomicilio.style.height = "60px";
    btnTienda.style.top = "220px";
    btnTienda.style.height = "50px";
    btnTienda.style.backgroundColor = "#E0DDDD";
    document.getElementById('titulo').innerHTML = "ORDENA ONLINE, RECIBE A DOMICILIO";
    document.getElementById('lbl-datos').innerHTML = "Ingresa tu dirección de envío o da click en la opción de tu ubicación actual";
    document.getElementsByClassName('input-datos')[0].placeholder="Ingresa tu calle y número";
}