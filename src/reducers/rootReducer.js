const initState = {
  posts: [
    {id: '1', title: 'Squirtle ', body: 'Squirtle, known as the Tiny Turtle Pokémon, are turtle Pokémon with large eyes and chubby cheeks, capable of moving either on two feet or on all fours. Their skin is a light blue, and they possess a long, curled tail'},
    {id: '2', title: 'Charmander ', body: 'Charmander was created as one of the first Pokémon and is a starter Pokémon the player can choose from at the beginning of Pokémon Red and Blue, and their remakes, Pokémon FireRed and LeafGreen. In the anime, Ash acquires a Charmander early in the series, and it became one of his most used Pokémon.'},
    {id: '3', title: 'Pikachu', body: 'It can attack using electricity which comes from two red pouches (called "Denkibukuro") on its cheeks. It can evolve into Raichu, which is bigger and stronger. A minuscule and frail Pokémon called Pichu can evolve into Pikachu. Pikachu appears in most Pokémon games in some way.'},
    {id: '4', title: 'Mimikyu', body: 'Mimikyu has solid defenses to set up at least once, and access to STAB priority (Along with STAB High Crit-Hit Ratio move), and the ever common Play Rough. To mix things up a bit, even Wood Hammer in exchange for a Heart Scale is a decent coverage move'},
    {id: '5', title: 'Charizard', body: 'Charizard as a Charmander was loyal, to the point of being naive; he believed that his trainer, Damian, would come back for him. However, upon discovering the truth that Damian is a selfish person, he rejected him as his trainer and became one of Ash Pokémon, knowing that Ash was dedicated, selfless, and an all-around better trainer than Damian after he saved his life.'}
  ]
}



const rootReducer = (state = initState, action) => {
  console.log(action);
  if(action.type === 'DELETE_POST'){
   let newPosts = state.posts.filter(post => {
     return post.id !== action.id
   });
   return {
     ...state,
     posts: newPosts
   }
  }
  return state;
}

export default rootReducer
