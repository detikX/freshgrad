Highcharts.chart('container-terserap', {
    chart: {
        type: 'column',
        backgroundColor: 'rgba(255,255,255,.8)',
        borderRadius: 16
    },
    credits: {
        enabled: false //buat highcharts com
    },
    title: {
        text: null,
        align: 'left'
    },
    subtitle: {
        text:
            'Source: <a target="_blank" ' +
            'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
        align: 'left'
    },
    xAxis: {
        categories: ['15-24 tahun', '> 25 tahun'],
        crosshair: true,
        accessibility: {
            description: 'Usia'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '1000 metric tons (MT)'
        }
    },
    tooltip: {
        valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Februari 2023',
        data: [40.08, 72.31]
    }, {
        name: 'Agustus 2023',
        data: [40.21, 72.55]
    }, {
        name: 'Februari 2024',
        data: [41.49, 72.97]
    }]
});
