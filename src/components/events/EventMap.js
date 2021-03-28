import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const EventMap = ({ longitude, latitude }) => {
  const position = [+latitude, +longitude];
  return (
    <Box w="100%" h="200px">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Text fontSize="x-large">📍</Text>
        </Marker>
      </MapContainer>
    </Box>
  );
};

EventMap.propTypes = {
  longitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  latitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default EventMap;
