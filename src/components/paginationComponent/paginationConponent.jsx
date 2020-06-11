import './paginationConponent.scss';
import React from "react";

export const PaginationComponent = ({
  onNextClicked,
  onPaginationLimitSelected,
  onPreviousClicked,
  isLast,
}) => {
  let nextButton;
  if (isLast == false) {
    nextButton = (
      <button type="button" onClick={onNextClicked}>
        Next
      </button>
    );
  }
  return (
    <section>
      <button type="button" onClick={onPreviousClicked}>
        Previous
      </button>
      <select name="pagination-limit" onChange={onPaginationLimitSelected}>
        <option key={4} value={4}>
          4
        </option>
        <option key={8} value={8}>
          8
        </option>
        <option key={12} value={12}>
          12
        </option>
      </select>
      {nextButton}
    </section>
  );
};
