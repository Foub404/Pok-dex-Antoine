import PokemonCard from "./components/pokemonCard";

function App() {
  return (
    <section>
      <PokemonCard pokemon={pokemonList[0]} />
    </section>
  );
}

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default App;
