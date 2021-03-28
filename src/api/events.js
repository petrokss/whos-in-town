import axios from 'axios';

export const getEvents = (artist) => {
  return axios
    .get(
      `https://rest.bandsintown.com/artists/${artist}/events?app_id=${process.env.REACT_APP_APP_ID}`
    )
    .then((res) => res.data);
};
