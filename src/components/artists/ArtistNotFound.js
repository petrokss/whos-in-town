import React from 'react';
import { VStack, Text } from '@chakra-ui/react';

const ArtistNotFound = () => (
  <VStack textAlign="center" spacing={1}>
    <Text fontSize="xxx-large">🤷‍♀️</Text>
    <Text color="orange.600" fontWeight="bold">
      Artist not found
    </Text>
  </VStack>
);

export default ArtistNotFound;
