// const axios = require("axios");

// const getCharById = (res, id) => {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({ data }) => {
//       const { name, gender, species, origin, image, status } = data;
//       const character = { id, name, gender, species, origin, image, status };
//       res.writeHead(200, { "Content-type": "application/json" });
//       return res.end(JSON.stringify(character));
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-type": "text-plain" });
//       return res.end(error.message);
//     });
// };

// module.exports = getCharById;
//! promise
const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const id = req.params.id;
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
   .then((response) => {
      const { id, name, gender, species, origin, image, status } =
        response.data;
      const character = { id, name, gender, species, origin, image, status };

      return character.name
        ? res.status(200).json(character)
        : res.status(404).send("Not found");
    })

    .catch((error) => {
      return res.status(500).send(error.message);
    });
};

// const axios = require("axios");

// const URL = "https://rickandmortyapi.com/api/character/";

// const getCharById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log(id);
//     const { name, gender, species, origin, image, status } = await axios(
//       `https://rickandmortyapi.com/api/character/${id}`
//     ).data;
//     const character = { id, name, gender, species, origin, image, status };

//     return character.name
//       ? res.status(200).json(character)
//       : res.status(404).send("Not found");
//   } catch (error) {
//     return res.status(500).send("sou un error");
//   }
// };

module.exports = getCharById;
