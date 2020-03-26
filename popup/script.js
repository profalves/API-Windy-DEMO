const options = {
  // Required: API key
  key: 'DxdU7RpWE9HaRVTBg3X8HaXRXi9aahgv', // REPLACE WITH YOUR KEY !!!

  // Put additional console output
  verbose: true,

  // Optional: Initial state of the map
  lat: -12.25,
  lon: -38.96,
  zoom: 9,
};

// Initialize Windy API
windyInit(options, windyAPI => {
  // windyAPI is ready, and contain 'map', 'store',
  // 'picker' and other usefull stuff

  const { map } = windyAPI;
  // .map is instance of Leaflet map

  L.popup()
    .setLatLng([-12.253584799999999, -38.960076199999996])
    .setContent('estou aqui!')
    .openOn(map);
});
