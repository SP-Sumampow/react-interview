import React from "react";

export const PaginationComponent = ({
  onNextClicked,
  onPaginationAmountSelected,
  onPreviousClicked,
}) => {
  return (
    <section>
      <button type="button" onClick={onPreviousClicked}>
        Previous
      </button>

      <select name="pagination-limit" onChange={onPaginationAmountSelected}>
        <option key={3} value={3} >
          3
        </option>
        <option key={8} value={8}>
          8
        </option>
        <option key={12} value={12}>
          12
        </option>
      </select>
      <button type="button" onClick={onNextClicked}>
        Next
      </button>
    </section>
  );
};
