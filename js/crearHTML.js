var producto = JSON.parse(sessionStorage.getItem('producto'));
window.onload = function(){
    $('#nombre').text(producto.nombre);
    $('#descripcion').text(producto.descripcion);
    $('#marca').append(producto.marca);
    $('#peso').append(producto.peso);
    $('#tamano').append(producto.tamano);
    $('#modelo').append(producto.modelo);
    $('.imagen').attr('src',producto.imagen);
    producto.especificas.map(function(e){
        $('<li><b>'+e.key+' </b>'+e.value+'</li>').appendTo('#caracteristicas');
    });
}