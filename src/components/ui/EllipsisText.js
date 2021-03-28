import React from 'react';
import { Text } from '@chakra-ui/react';

const EllipsisText = (props) => (
  <Text
    overflow="hidden"
    textOverflow="ellipsis"
    whiteSpace="nowrap"
    {...props}
  />
);

export default EllipsisText;