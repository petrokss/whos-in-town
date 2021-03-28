import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@chakra-ui/react';

const SearchInput = ({ onChange, value }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search artist..."
      autoFocus
    />
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchInput;
