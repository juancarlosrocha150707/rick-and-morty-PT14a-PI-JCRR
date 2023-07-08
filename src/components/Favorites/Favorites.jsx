import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card';

const Favorites = (props) => {
  const { myFavorites } = props;
  return (
    <div>
      {myFavorites.map((char) => { // Agrega paréntesis alrededor de `(char)`
        return (
          <Card
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            key={char.id}
            id={char.id}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
