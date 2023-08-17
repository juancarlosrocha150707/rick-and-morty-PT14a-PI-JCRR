import axios from "axios";


// export const addFav = (id) => {
//   return (dispatch) => {
//     const endpoint = "http://localhost:3001/rickandmorty/fav";
    
//     axios.post(endpoint, id).then(({ data }) => {
//       dispatch({
//         type: "ADD_FAV",
//         payload: data,
//       });
//     });
//   };
// };
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
 
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
        
      });
    });
  };
};
// // ACTION | removeFav
// export const removeFav = (id) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
//   return (dispatch) => {
//     axios.delete(endpoint).then(({ data }) => {
//       return dispatch({
//         type: "REMOVE_FAV",
//         payload: data,
//       });
//     });
//   };
// };

export const filterCards = (gender) => {
  return {
    type: "FILTER",
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: "ORDER",
    payload: order,
  };
};
