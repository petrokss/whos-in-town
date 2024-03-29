import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { Spacer, Button } from '@chakra-ui/react';
import EllipsisText from '../ui/EllipsisText';

const EventItem = ({ event, onClick, isSelected }) => (
  <Button
    d="flex"
    borderRadius="md"
    p={2}
    onClick={() => onClick(event.id)}
    variant={isSelected ? 'solid' : 'outline'}
    colorScheme="blue"
  >
    <EllipsisText maxWidth="45%">
      {format(new Date(event.datetime), 'do MMM yyyy')}
    </EllipsisText>
    <Spacer />
    <EllipsisText maxWidth="50%">
      {[event.venue.city, event.venue.country].filter(Boolean).join(', ')}
    </EllipsisText>
  </Button>
);

EventItem.propTypes = {
  event: PropTypes.object,
  onClick: PropTypes.func,
};

export default EventItem;
