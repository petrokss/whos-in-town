import { useQuery } from 'react-query';
import { getEvents } from './events';
import { getArtist } from './artists';

export const useArtist = (searchValue) => {
  const { data, error, isLoading } = useQuery(
    ['getArtistInfo', searchValue],
    () => getArtist(searchValue),
    {
      enabled: !!searchValue,
    }
  );

  return { data, error, isLoading };
};

export const useEvents = (searchValue) => {
  const { data, error, isLoading } = useQuery(
    ['getArtistEvents', searchValue],
    () => getEvents(searchValue),
    {
      enabled: !!searchValue,
    }
  );

  return { data, error, isLoading };
};
