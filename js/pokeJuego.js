
$('<h1>Quien es este pokemon?</h1>').appendTo('body');
$('<label class="grande">Jugar!</label>').appendTo('body');
$('<img src="imgs/pokeboton.png" id="boton" onclick="buscarPokemon()">').appendTo('body');
$('<div id="loadingContainer"></div>').appendTo('body');
function buscarPokemon() {
    var numero = Math.floor(Math.random() * 152);
    $('#pokeCont').remove();
    $('<img src="imgs/loading.gif" id="loading">').appendTo('#loadingContainer');
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + numero,
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function (pokemon) {
            $('#loadingContainer').empty();
            var pokemonContainer = document.createElement('div');
            $(pokemonContainer).attr('id', 'pokeCont');
            $('<img src="' + pokemon.sprites.back_default + '" class="pokeimagen">').appendTo(pokemonContainer);
            $('<img src="' + pokemon.sprites.front_default + '" class="pokeimagen">').appendTo(pokemonContainer);
            var datosContainer = document.createElement('div');
            $(datosContainer).attr('id', 'datosContainer');
            $('<label>Nombre: </label><input id="nombre" type="text">').appendTo(datosContainer);
            $('<div id="resultadoNombre"></div>').appendTo(datosContainer);
            $('<br>').appendTo(datosContainer);
            $('<br>').appendTo(datosContainer);
            $('<label>Tipo: </label><input id="tipo" type="text">').appendTo(datosContainer);
            $('<div id="resultadoTipo"></div>').appendTo(datosContainer);
            $('<br>').appendTo(datosContainer);
            $('<br>').appendTo(datosContainer);
            $('<button onclick="adivinar(\'' + pokemon.name + '\',\'' + pokemon.types[0].type.name + '\')">Adivinar</button>').appendTo(datosContainer);
            $(pokemonContainer).append(datosContainer);
            $('body').append(pokemonContainer);
        }
    });
}

function adivinar(nombre, tipo) {
    $('#resultadoNombre').empty();
    $('#resultadoTipo').empty();
    var usuarioNombre = $('#nombre').val().toLowerCase();
    var usuarioTipo = $('#tipo').val().toLowerCase();
    if (usuarioNombre == nombre) {
        $('<label class="verde">Correcto</label>').appendTo('#resultadoNombre');
    } else {
        $('<label class="rojo">Incorrecto, el nombre es ' + nombre + '</label>').appendTo('#resultadoNombre');
    }
    if (usuarioTipo == tipo) {
        $('<label class="verde">Correcto</label>').appendTo('#resultadoTipo');
    } else {
        $('<label class="rojo">Incorrecto, el tipo es ' + tipo + '</label>').appendTo('#resultadoTipo');
    }

}