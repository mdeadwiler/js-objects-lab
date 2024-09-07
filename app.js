const pokemon = require('./data.js')
console.log(pokemon);

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  console.dir(pokemon, { maxArrayLength: null });

  //Exercise 2
  console.log(game);

  /*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.party

/*1*/                /*2*/
game.difficulty = "Medium";

console.log(game);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
game.party.push(pokemon[3])

console.log(game.party);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
game.party.push(pokemon[6],pokemon[9],pokemon[10]);

console.log(game.party);


/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

function updateGymCompletion(gyms) {
  gyms.forEach(gyms => {
      if (gyms.difficulty < 3) {
          gyms.completed = true;
      }
  });
  return gyms;
}

// This will update gyms array
const updatedGyms = updateGymCompletion.gyms;

// invoke to update gyms
console.log(updatedGyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
let party = [
  { name: "Bulbasaur", number: 1 },
  { name: "Charmander", number: 4 },
  { name: "Squirtle", number: 7 },
  { name: "Pikachu", number: 25 }
];

// evolution defines the evolve of each of the pokemon I have selected
const evolution = {
  1: { name: "Ivysaur", number: 2 },
  4: { name: "Charmeleon", number: 5 },
  7: { name: "Wartortle", number: 8 },
  25: { name: "Raichu", number: 26 }
};

function evolvePokemon(party) {
  for (let i = 0; i < party.length; i++) {
      const pokemon = party[i];
      if (evolution[pokemon.number]) {
          // Replace the current Pokémon with its evolved form
          party.splice(i, 1, evolution[pokemon.number]);
      }
  }
  return party;
}

// Evolve the starter Pokémon in the party
const evolvedParty = evolvePokemon(party);

// Log the evolved party to see the results
console.log("Evolved Party:", evolvedParty);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/



function pokemonNames(party) {
  console.log("Pokémon party:");
  party.forEach((pokemon, i) => {
      console.log(`${i + 1}. ${pokemon.name}`);
  });
}

// Call the function to print the Pokémon names
pokemonNames(party);

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/


function printStarterPokemon(pokemonArray) {
  const starterNumbers = [1, 4, 7, 25]; // Bulbasaur, Charmander, Squirtle, Pikachu

  console.log("Starter Pokémon:");
  pokemonArray.forEach(pokemon => {
      if (starterNumbers.includes(pokemon.number)) {
          console.log(`${pokemon.number}: ${pokemon.name}`);
      }
  });
}

// Call the function to print the starter Pokémon
printStarterPokemon(pokemon);