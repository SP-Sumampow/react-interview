import React from "react";

export const SelectMovieComponent = ({ movieCategories }) => {

  var optionCategories = movieCategories.map((movieCategory) => {
    return (
      <option key={movieCategory} value={movieCategory}>
        {movieCategory}
      </option>
    )
  })

  optionCategories.unshift(<option value="">--Please choose a movie category--</option>);

  console.log(optionCategories);

  return (
    <select name="pets" id="pet-select">
      {optionCategories}
    </select>
  );
};
