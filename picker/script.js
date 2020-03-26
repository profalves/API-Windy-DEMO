const options = {
    key: 'DxdU7RpWE9HaRVTBg3X8HaXRXi9aahgv', // REPLACE WITH YOUR KEY !!!
    lat: -12.25,
    lon: -38.96,
    zoom: 9,
};

windyInit(options, windyAPI => {
    const { picker, utils, broadcast, store } = windyAPI;
    store.set('overlay', 'rain'); // 'rain', 'wind', 'temp', 'clouds'

    picker.on('pickerOpened', latLon => {
        // picker has been opened at latLon coords
        console.log(latLon);

        const { lat, lon, values, overlay } = picker.getParams();
        // -> 48.4, 14.3, [ U,V, ], 'wind'
        console.log(lat, lon, values, overlay);

        const windObject = utils.wind2obj(values);
        console.log(windObject);
    });

    picker.on('pickerMoved', latLon => {
        // picker was dragged by user to latLon coords
        console.log(latLon);
    });

    picker.on('pickerClosed', () => {
        // picker was closed
    });

    // Wait since wather is rendered
    broadcast.once('redrawFinished', () => {
        picker.open({ lat: -12.253584799999999, lon: -38.960076199999996 });
        // Opening of a picker (async)
    });
});
