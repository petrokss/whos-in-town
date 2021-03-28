import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
});

const EventMap = ({ longitude, latitude }) => {
  const coordinates = [longitude, latitude];
  return (
    <Map
      // eslint-disable-next-line react/style-prop-object
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '200px',
        width: '100%',
      }}
      center={coordinates}
    >
      <Marker anchor="bottom" coordinates={coordinates}>
        <Text fontSize="x-large">📍</Text>
      </Marker>
    </Map>
  );
};

EventMap.propTypes = {
  longitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  latitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default EventMap;
