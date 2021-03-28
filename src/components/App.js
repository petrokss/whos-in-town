import React from 'react';
import { useDebounce } from 'use-debounce';
import { Box, VStack } from '@chakra-ui/react';
import { useArtist, useEvents } from '../api/hooks';
import {
  getLocalStorageData,
  saveLocalStorage,
} from '../utils/localStorage';
import SearchInput from './artists/SearchArtistInput';
import ArtistInfo from './artists/ArtistInfo';
import EventList from './events/EventList';
import EventInfo from './events/EventInfo';
import Favorites from './favorites/Favorites';
import ArtistNotFound from './artists/ArtistNotFound';
import ArtistSpinner from './ui/Spinner';

const App = () => {
  const [searchArtist, setSearchArtist] = React.useState('');
  const [isEventFromFavorites, setEventFromFavorites] = React.useState(false);
  const [searchValue] = useDebounce(
    searchArtist,
    isEventFromFavorites ? 0 : 1000
  );
  const [selectedEventId, setSelectedEventId] = React.useState(null);
  const [favoriteEvents, setFavoriteEvents] = React.useState(() =>
    getLocalStorageData('favoriteEvents', [])
  );
  const {
    data: artist,
    error: artistsError,
    isLoading: isArtistsLoading,
  } = useArtist(searchValue);
  const {
    data: events,
    error: eventsError,
    isLoading: isEventsLoading,
  } = useEvents(searchValue);

  React.useEffect(() => {
    if (!isEventFromFavorites) {
      setSelectedEventId(null);
    } else {
      setEventFromFavorites(false);
    }
  }, [searchValue]);

  const handleChangeInput = (e) => {
    setSearchArtist(e.target.value);
  };

  const updateFavoriteEvents = (newFavoriteEvents) => {
    setFavoriteEvents(newFavoriteEvents);
    saveLocalStorage('favoriteEvents', newFavoriteEvents);
  };

  const addToFavoriteEvent = (event) => {
    const newFavoriteEvents = [
      ...favoriteEvents,
      {
        id: event.id,
        artistName: artist.name,
        name: event.venue.name,
        datetime: event.datetime,
      },
    ];
    updateFavoriteEvents(newFavoriteEvents);
  };
  const removeFromFavoriteEvents = (event) => {
    const newFavoriteEvents = favoriteEvents.filter((e) => e.id !== event.id);
    updateFavoriteEvents(newFavoriteEvents);
  };

  const selectEvent = (event) => {
    setEventFromFavorites(true);
    setSearchArtist(event.artistName);
    setSelectedEventId(event.id);
  };

  const eventInfo = React.useMemo(() => {
    if (events && selectedEventId) {
      return events.find((e) => e.id === selectedEventId);
    }
  }, [selectedEventId, events]);

  return (
    <Box d="flex" justifyContent="space-between" m={4}>
      <Box w="30%">
        <VStack spacing={2} d="block">
          <SearchInput
            onChange={(vals) => handleChangeInput(vals)}
            value={searchArtist}
          />
          {artist === '' && <ArtistNotFound />}
          {isArtistsLoading && <ArtistSpinner />}
          {artist && <ArtistInfo data={artist} isLoading={isArtistsLoading} />}
          {events && (
            <EventList
              events={events}
              onEventSelect={setSelectedEventId}
              selectedEventId={selectedEventId}
              favoriteEvents={favoriteEvents}
            />
          )}
        </VStack>
      </Box>
      <Box w="30%">
        {eventInfo && (
          <EventInfo
            event={eventInfo}
            addToFavoriteEvent={addToFavoriteEvent}
            removeFromFavoriteEvents={removeFromFavoriteEvents}
            isFavorite={favoriteEvents.some((e) => e.id === selectedEventId)}
          />
        )}
      </Box>
      <Box w="30%">
        <Favorites
          favoriteEvents={favoriteEvents}
          onSelectEvent={selectEvent}
          onRemoveEvent={removeFromFavoriteEvents}
        />
      </Box>
    </Box>
  );
};

export default App;
