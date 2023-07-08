import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterName, FilterInput } from './Filter.styled';


const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterName>
      Find contacts by Name
      <FilterInput
        type="text"
        value={filter}
        onChange={onChangeFilter}
      ></FilterInput>
    </FilterName>
  );
};

export default Filter;
