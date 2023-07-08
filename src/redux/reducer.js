const initialState = {
  myFavorites: [],
  allcharacters: [],
};
const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      let copy1 = state.allcharacters;
      copy1.push(payload);
      return { ...state, myFavorites: copy1, allcharacters: copy1 };

    case "REMOVE_FAV":
      let copy2 = state.myFavorites.filter((char) => {
        return char.id !== Number(payload);
      });
      return {
        ...state,
        myFavorites: copy2,
      };

    case "FILTER":
      let copy3 = state.allcharacters.filter((char) => {
        return char.gender === payload;
      });

      return {
        ...state,
        myFavorites: copy3,
      };

    case "ORDER":
      let copy4 = state.allcharacters;
      let order = copy4.sort((a, b) => {
        if (payload === "A") {
          return a.id - b.id;
        } else if (payload === "D") {
          return b.id - a.id;
        } else {
          return 0;
        }
      });

      return { ...state, myFavorites: order };

    default:
      return state;
  }
};
export default rootReducer;
