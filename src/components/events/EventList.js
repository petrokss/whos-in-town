import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from '@chakra-ui/react';
import EventItem from './EventListItem';

const EventList = ({ events, onEventSelect, selectedEventId }) => {
  return (
    <Stack spacing={2}>
      {events.map((event) => (
        <EventItem
          isSelected={event.id === selectedEventId}
          key={event.id}
          event={event}
          onClick={onEventSelect}
        />
      ))}
    </Stack>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
  onEventSelect: PropTypes.func,
  selectedEventId: PropTypes.string,
};

export default EventList;
