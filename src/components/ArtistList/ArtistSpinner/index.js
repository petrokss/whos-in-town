import React from 'react';
import { Spinner, Center } from '@chakra-ui/react';

const ArtistSpinner = () => (
  <Center>
    <Spinner
      thickness="2px"
      speed="1s"
      emptyColor="gray.200"
      color="blue.500"
      size="lg"
    />
  </Center>
);

export default ArtistSpinner;
