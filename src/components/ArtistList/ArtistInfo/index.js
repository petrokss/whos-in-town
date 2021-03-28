import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, Link, VStack, HStack } from '@chakra-ui/react';

const ArtistInfo = ({ isLoading, data }) => {
  return (
    <HStack
      spacing={2}
      borderColor="gray.300"
      borderWidth="thin"
      borderRadius="md"
      p={2}
    >
      <Image
        boxSize="150px"
        src={data.thumb_url}
        alt="band img"
        borderRadius="md"
      />
      <VStack spacing={2} textAlign="left" d="block">
        <Text fontWeight="bold">{data.name}</Text>
        <Text>Upcoming evens: {data.upcoming_event_count}</Text>
        <Text>
          <Link href={data.facebook_page_url} isExternal>
            Facebook link
          </Link>
        </Text>
        <Text>
          <Link href={data.url} isExternal>
            bandsintown link
          </Link>
        </Text>
      </VStack>
    </HStack>
  );
};

ArtistInfo.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.object,
};

export default ArtistInfo;
