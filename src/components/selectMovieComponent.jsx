import React from "react";

export const SelectMovieComponent = ({ movieCategories }) => {

  var optionCategories = movieCategories.map((movieCategory) => {
    return (
      <option key={movieCategory} value={movieCategory}>
        {movieCategory}
      </option>
    )
  })

<<<<<<< Updated upstream
<<<<<<< HEAD
  optionCategories.unshift(<option value="">--Please choose a movie category--</option>);

=======
>>>>>>> 1bea7a4cd7f551e92b0b62cfc9b1ef989126f099
  console.log(optionCategories);
=======
  optionCategories.unshift(<option key="0" value="">--Please choose a movie category--</option>);
>>>>>>> Stashed changes

  return (
    <select name="pets" id="pet-select">
      {optionCategories}
    </select>
  );
};
