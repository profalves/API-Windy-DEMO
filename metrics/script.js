const options = {
    key: 'DxdU7RpWE9HaRVTBg3X8HaXRXi9aahgv', // REPLACE WITH YOUR KEY !!!
    lat: -12.25,
    lon: -38.96,
    zoom: 9,
    verbose: true
};

windyInit(options, windyAPI => {
    // All the params are stored in windyAPI.store
    const { overlays, broadcast } = windyAPI;
    const metrics = document.getElementById('metrics')
    const results = document.getElementById('results')

    const windMetric = overlays.wind.metric;
    // console.log('windMetric', windMetric);
    metrics.innerHTML = JSON.stringify(overlays)

    // 'kt' .. actually selected metric for wind overlay
    // Read only value! Do not modify.

    overlays.wind.listMetrics();

    // ['kt', 'bft', 'm/s', 'km/h', 'mph'] .. available metrics

    overlays.wind.setMetric('km/h');

    // Metric for wind was changed to bft

    broadcast.on('metricChanged', (overlay, newMetric) => {
        // Any changes of any metric can be observed here
        // console.log('metricChanged', overlay, newMetric);
        results.innerHTML = newMetric
    });
});
