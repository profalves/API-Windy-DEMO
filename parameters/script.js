const options = {
    key: 'DxdU7RpWE9HaRVTBg3X8HaXRXi9aahgv', // REPLACE WITH YOUR KEY !!!
    lat: -12.25,
    lon: -38.96,
    zoom: 9,
    verbose: true,
    timestamp: Date.now() + 3 * 24 * 60 * 60 * 1000,
    hourFormat: '12h',

    // ...etc
};

windyInit(options, windyAPI => {
    const { store } = windyAPI;
    // All the params are stored in windyAPI.store

    const levels = store.getAllowed('availLevels');
    // levels = ['surface', '850h', ... ]
    // Getting all available values for given key

    let i = 0;
    setInterval(() => {
        i = i === levels.length - 1 ? 0 : i + 1;

        // Changing Windy params at runtime
        store.set('level', levels[i]);
    }, 500);

    // Observing change of .store value
    store.on('level', level => {
        console.log(`Level was changed: ${level}`);
    });
});
