$('<div id="contenedor"></div>').appendTo('body');
$('<h3>Que pokemon desea ver?</h3>').appendTo('#contenedor');
$('<input type="number" id="numero">').appendTo('#contenedor');
$('<img src="imgs/pokeboton.png" id="boton" onclick="buscarPokemon()">').appendTo('#contenedor');
function buscarPokemon() {
    var numero = $('#numero').val();
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + numero,
        error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        },
        success: function (pokemon) {
            $('#pokeCont').remove();
            var pokemonContainer = document.createElement('div');
            $(pokemonContainer).attr('id', 'pokeCont');
            $('<img src="' + pokemon.sprites.back_default + '" class="pokeimagen">').appendTo(pokemonContainer);
            $('<img src="' + pokemon.sprites.front_default + '" class="pokeimagen">').appendTo(pokemonContainer);
            $('<h1>Nombre: ' + pokemon.name + '</h1>').appendTo(pokemonContainer);
            $('<h2>Tipo: ' + pokemon.types[0].type.name + '</h2>').appendTo(pokemonContainer);
            $('<h2>Atributos: </h2>').appendTo(pokemonContainer);
            var lista = document.createElement('ul');
            $('<li>Peso: ' + pokemon.weight + '</li>').appendTo(lista);
            $('<li>Altura: ' + pokemon.height + '</li>').appendTo(lista);
            $('<li>Numero: ' + pokemon.id + '</li>').appendTo(lista);
            $('<li>Experiencia Base: ' + pokemon.base_experience + '</li>').appendTo(lista);
            $(lista).appendTo(pokemonContainer);
            $('body').append(pokemonContainer);
        }
    });


    return false;
}