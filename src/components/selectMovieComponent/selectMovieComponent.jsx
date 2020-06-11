import "./selectMovieComponent.scss";
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
    <option className="cathegoryOptions" key="unknown" value="all" >
      --Please choose a movie category--
    </option>
  );

  return (
    <select name="filter-category" onChange={onCategorySelected}>
      {optionCategories}
    </select>
  );
};
