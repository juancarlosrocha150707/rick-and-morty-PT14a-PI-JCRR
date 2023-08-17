const initialState = {
  myFavorites: [],
  allcharacters: [],
};
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // REDUCER | ADD_FAV
    case "ADD_FAV":
      return { myFavorites: payload, allCharacters: payload };

    // REDUCER | REMOVE_FAV
    case "REMOVE_FAV":
      return { myFavorites: payload, allCharacters: payload  };

    case "FILTER":
      return {
        ...state,
        myFavorites: state.allCharacters.filter((character) =>
          payload ? character.gender === payload : true
        ),
      };

    case "ORDER":
      let orderCharacters = [...state.allCharacters];
      let orderFavs = [...state.myFavorites];

      //eslint-disable-next-line
      if (payload == "A") {
        orderCharacters = orderCharacters.sort((a, b) => a.id - b.id);
        orderFavs = orderFavs.sort((a, b) => a.id - b.id);
        //eslint-disable-next-line
      } else if (payload == "D") {
        orderCharacters = orderCharacters.sort((a, b) => b.id - a.id);
        orderFavs = orderFavs.sort((a, b) => b.id - a.id);
      }
     
    default:
      return state;
  }
};
export default rootReducer;
