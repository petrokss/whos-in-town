import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import {
  Text,
  Link,
  Divider,
  Badge,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const EventInfo = ({
  event,
  isFavorite,
  addToFavoriteEvent,
  removeFromFavoriteEvents,
}) => {
  const { venue, offers } = event;
  const location = [venue.city, venue.region, venue.country]
    .filter(Boolean)
    .join(', ');
  return (
    <VStack
      spacing={2}
      borderColor="gray.300"
      borderWidth="thin"
      borderRadius="md"
      p={2}
      textAlign="left"
    >
      <Button
        leftIcon={<StarIcon color={isFavorite && 'yellow.300'} />}
        onClick={() =>
          isFavorite
            ? removeFromFavoriteEvents(event)
            : addToFavoriteEvent(event)
        }
      >
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </Button>
      <Text>{venue.name}</Text>
      <Text>{format(new Date(event.datetime), 'do MMM yyyy')}</Text>
      <Text>{location}</Text>
      <Divider />
      {event.description && (
        <>
          <Text>{event.description}</Text>
          <Divider />
        </>
      )}
      {offers.map((offer) => (
        <HStack key={offer.url} spacing={2}>
          <Link href={offer.url} isExternal>
            {offer.type}
          </Link>
          <Badge colorScheme={offer.status === 'available' ? 'teal' : 'red'}>
            {offer.status}
          </Badge>
        </HStack>
      ))}
    </VStack>
  );
};

EventInfo.propTypes = {
  event: PropTypes.object,
};

export default EventInfo;
