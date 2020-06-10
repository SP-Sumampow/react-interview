import React from "react";

export const SelectMovieComponent = ({
  movieCategories,
  onCategorySelected,
}) => {
  var optionCategories = movieCategories.map((movieCategory) => {
    return (
      <option key={movieCategory} value={movieCategory}>
        {movieCategory}
      </option>
    );
  });


  optionCategories.unshift(
    <option key="all" value="all">
      All
    </option>
  );
  
  optionCategories.unshift(
    <option key="unknown" value="all">
      --Please choose a movie category--
    </option>
  );

  console.log(optionCategories);

  return (
    <select name="filter-category" onChange={onCategorySelected}>
      {optionCategories}
    </select>
  );
};
