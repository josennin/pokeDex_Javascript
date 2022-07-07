function crearObjeto(){
    var producto = {};
    producto.nombre = $('#nombre').text();
    producto.imagen = $('.imagen').attr('src');
    producto.marca = $('#marca').find('b').empty().parent().text();
    producto.peso = $('#peso').find('b').empty().parent().text();
    producto.modelo = $('#modelo').find('b').empty().parent().text();
    producto.tamano = $('#tamano').find('b').empty().parent().text();
    producto.descripcion = $('#descripcion').text();
    var especificas = [];
    $('#caracteristicas li').each(function(){
        var especifica = {};
        especifica.key = $(this).find('b').text();
        especifica.value = $(this).find('b').empty().parent().text();
        especificas.push(especifica);
    });
    producto.especificas = especificas;
    $('#output').val(JSON.stringify(producto, null, 4));
    sessionStorage.setItem('producto',JSON.stringify(producto));
}

