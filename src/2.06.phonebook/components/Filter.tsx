import React, { ChangeEventHandler } from 'react'

interface FilterProps {
  newFilter: string,
  filterChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const Filter = ({newFilter, filterChangeHandler} : FilterProps) => {
  return (
    <div>
      filter shown with <input value={newFilter} onChange={filterChangeHandler} />
    </div>
  );
};

export default Filter;