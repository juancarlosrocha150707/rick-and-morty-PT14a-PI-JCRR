let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  let deletedchar = myFavorites.filter((char) => {
    return char.id !== Number(id);
  });
 
  myFavorites = deletedchar;
  return res.json(myFavorites);
};
module.exports = { postFav, deleteFav };
