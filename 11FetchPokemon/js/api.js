//Esta es tu primera API REST, la cual nos permite obtener informacion sobre diferentes tipos de pokemon, conforme a lo que exista por parte del sitio https://pokeapi.co para ello lo primero que tenemos que establecer es como se va a comunicar nuestra aplicacion el el servidor del sitio
const pokeApiUrl = "https://pokeapi.co/api/v2/";

//necesitamos un objeto que se encargue de obtener cada uno de los campos del DOM referentes con el uso de la API, a partir de que el usuario ingresa el nombre del pokemon, debemos realizar una peticion al sitio, devuelvo el nombre del pokemon para que realice la busqueda y pueda obtener cada componente que tenemos maquetado

const pokedex = () =>{
    //cada stat vamos a definir un arreglo para obtener cada estadistica
    const pokemonStatsElements = {
        hp : document.getElementById("pokemonStatHp"),
        attack : document.getElementById("pokemonStatAttack"),
        defense : document.getElementById("pokemonStatDefense"),
        specialAttack : document.getElementById("pokemonStatSpecialAttack"),
        specialDefense : document.getElementById("pokemonStatSpecialDefense"),
        speed : document.getElementById("pokemonStatSpeed")
    };

    //necesitamos idenfiticar la clase de cada pokemon y se aplique la css a dicha clase

    let currentClassType = null;

    //necesitamos poder cambiar las imagenes del template ya sea por pokebola, no encontrado, o la imagen pokemon

    const imageTemplate = "<img class='pokedisplay' src='{imgSrc}' alt='pokedisplay' >";

    //necesitamos un objeto que se encargue de guardar donde estan las rutas de las imagenes que se van a ocupar para la pokedex

    const images = {
        imgPokemonNotFound : "../img/404.png",
        imgLoading : "../img/loading.gif"
    }

    //necesitamos un objeto que se encargue de obtener cada una de las referencias de los elementos de informacion del pokemon

    const containers = {
        imagenContainer : document.getElementById("pokedisplay-container"),
        pokemonTypesContainer : document.getElementById("pokemonTypes"),
        pokemonNameElement : document.getElementById("pokemonNameResult"),
        pokemonAbilitiesElement : document.getElementById("pokemonAbilities"),
        pokemonMovesElement : document.getElementById("pokemonMoves"),
        pokemonIdElement : document.getElementById("pokemonId")
    };

    //necesitamos un objeto que se encargue de obtener las referencias de cada uno de los botones de la pokedex

    const buttons = {
        all : Array.from(document.getElementsByClassName("btn")),
        search : document.getElementById("btnSearch"),
        next : document.getElementById("btnUp"),
        previos : document.getElementById("btnDown")
    };

    //necesitamos obtener la referencia una vez que el usuario haya escrito el nombre del pokemon

    const pokemonInput = document.getElementById("pokemonName");

    //cada una de las variables obtienen los elementos correspondientes en el html, y esto nos sirve para poder crear funciones especificas que se encarguen unicamente de 1 sola cosa

    //necesitmaos una funcion que obtenga los datos del pokemon una vez que se haya lanzado la peticion con el nombre
    const processPokemonTypes = (pokemonData) => {
        //una variable para obtener el tipo
        let pokemonType = "";
        //utilizamos la primera clase para dar el color a cada uno de los contenedores movimientos y hablidades del pokemon
        const firtsClass = pokemon.Data.types[0].type.name;
        //types es un arreglo que se obtiene por parte de la pokeapi, y nos responde por medio de un pokemonData, el cual tenemos re recorrer
        pokemonData.types.forEach((pokemonTypeData)=>{
            //lo primero que vamos a necesitar es etiquetar la clase del tipo de pokemon
            pokemonType += `<span class="pokemon-type ${pokemonTypeData.type.name}">${pokemonTypeData.type.name}</span>`;
        });

        //necesitamos quitar la clase previa del contenedor cada vez que sea una nueva busqueda
        if(currentClassType){
                containers.pokemonMovesElement.classList.remove(currentClassType);
                containers.pokemonAbilitiesElement.classList.remove(currentClassType);
        }
        //los volvemos agregar conforme a la primera clase
        containers.pokemonMovesElement.classList.add(firtsClass);
        containers.pokemonAbilitiesElement.classList.add(firtsClass);        
        currentClassType = firtsClass;

        //debo de agregar las etiquetas creadas previamente del forEach
        containers.pokemonTypesContainer.innerHTML = pokemonType;
    }

}