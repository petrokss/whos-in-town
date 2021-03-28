# Who's in town

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Features used
- React
- Chakra-UI
- React-query
- Mapbox-GL

### Functionality
1. Search the artist in the search input.
2. Display the artist info and upcoming events.
3. When clicking an event, the information appears with a map.
4. When clicking an "Add to/Remove from favorite events" button, the event appears on/disappears from "My favorites" section.
5. When refreshing the page, "My favorites" list is persisted.

### Running locally
1. In the project root create `.env` file with the following content:
```
REACT_APP_APP_ID=123
REACT_APP_MAPBOX_TOKEN=pk.eyJ1IjoicGV0cm9rcyIsImEiOiJja210ZW52Z2gwcXZrMnZveW1wMm9vcWhxIn0.XhcTR4nGexIKC_8InZtTdg
```
2. Run `npm i`
3. Run `npm start`
