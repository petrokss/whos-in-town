import React from 'react';
import PropTypes from 'prop-types';
import { Text, Box, Stack, Button, HStack } from '@chakra-ui/react';

const Favorites = ({ favoriteEvents, onSelectEvent, onRemoveEvent }) => {
  return (
      <Stack spacing={2}>
        <Text fontWeight="bold" fontSize="lg">
          My favorites:
        </Text>
        {favoriteEvents.map((event) => (
          <Box
            key={event.id}
            borderColor="gray.300"
            borderWidth="thin"
            borderRadius="md"
            p={3}
          >
            <Text fontWeight="semibold">
              {event.artistName} - {event.name}
            </Text>
            <HStack spacing={2}>
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={() => onSelectEvent(event)}
              >
                View more...
              </Button>
              <Button
                variant="ghost"
                colorScheme="orange"
                onClick={() => onRemoveEvent(event)}
              >
                Remove from favorites
              </Button>
            </HStack>
          </Box>
        ))}
      </Stack>
  );
};

Favorites.propTypes = {
  favoriteEvents: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onSelectEvent: PropTypes.func.isRequired,
  onRemoveEvent: PropTypes.func.isRequired,
};

export default Favorites;
