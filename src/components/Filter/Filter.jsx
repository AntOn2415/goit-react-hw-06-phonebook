import React from 'react';
import PropTypes from 'prop-types';
import {FilterName, FilterInput} from './Filter.styled'

const Filter = ({ value, onChangeFilter }) => {
  return (
    <FilterName>
      Find contacts by Name
      <FilterInput
        type="text"
        value={value}
        onChange={onChangeFilter}
      ></FilterInput>
    </FilterName>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default Filter;
