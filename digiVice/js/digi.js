$('<div id="contenedor"></div>').appendTo('body');
$('<img src="imgs/pokemon_list.jpg" class="imagen">').appendTo('body');
$('<h3>Que Digimon desea ver?</h3>').appendTo('#contenedor');
$('<input type="number" id="numero">').appendTo('#contenedor');
$('<img src="imgs/digivice.png" id="boton" onclick="buscarDigimon()">').appendTo('#contenedor');
function buscarDigimon() {
    var numero = $('#numero').val();
    $.ajax({
        url: "https://digimon-api.herokuapp.com/api/digimon/id/" + numero,
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function (digimon) {
            $('#pokeCont').remove();
            var digiContainer = document.createElement('div');
            $(digiContainer).attr('id', 'digiCont');
            $('<img src="' + digimon.sprites.back_default + '" class="digimagen">').appendTo(digiContainer);
            $('<img src="' + digimon.sprites.front_default + '" class="digimagen">').appendTo(digiContainer);
            $('<h1>Nombre: ' + digimon.name + '</h1>').appendTo(digiContainer);
            $('<h2>Tipo: ' + digimon.types[0].type.name + '</h2>').appendTo(digiContainer);
            $('<h2>Atributos: </h2>').appendTo(digiContainer);
            var lista = document.createElement('ul');
            $('<li>Peso: ' + digimon.weight + '</li>').appendTo(lista);
            $('<li>Altura: ' + digimon.height + '</li>').appendTo(lista);
            $('<li>Numero: ' + digimon.id + '</li>').appendTo(lista);
            $('<li>Experiencia Base: ' + digimon.base_experience + '</li>').appendTo(lista);
            $(lista).appendTo(digiContainer);
            $('body').append(digiContainer);
        }
    });


    return false;
}