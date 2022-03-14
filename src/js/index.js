/*
quando clicar pokemon listagem temos que esconder pokemon abertoe mostrar o cartão correspondente ao que foi selecionado
para isso trabalharemos com dois elementos, listagem e cartão pokemon

precisamos criar duas variaveis no JS pra trabalhar com os elementos na tela

//vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem pokemons

-remover a classe: aberto só do cartão que está aberto;
- remover a classe ativa que marca o pokemon selecionado;
-adicionar a classe ativo no item da lista selecionado.
*/
// precisamos criar duas váriaveis JS pra trabalhar com os elementos da tela


const listaSelecaoPokemons = document.querySelectorAll(`.pokemon`)
const pokemonCard = document.querySelectorAll(`.cartao-pokemon`)  


listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem pokemons

    pokemon.addEventListener(`click`, () => {
    //-remover a classe: aberto só do cartão que está aberto;
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')

    // -ao clicar em pokemon da listagem , pegamos o id desse pokemon pra saber qual cartão mostrar;
    const idPokemonSelecionado = pokemon.attributes.id.value

    const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
    cartaoPokemonParaAbrir.classList.add('aberto')

    //- remover a classe ativa que marca o pokemon selecionado;
    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')

    //-adicionar a classe ativo no item da lista selecionado.
    const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})