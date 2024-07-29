// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container-proporsi', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
    },
    xAxis: {
        categories: [
            '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024',
        ],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            format: null
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true,
        valueSuffix: '%',
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        //         2014: 70,68

        // 2015: 70,02

        // 2016: 70,32

        // 2017: 72,67

        // 2018: 75,61

        // 2019: 75,65

        // 2020: 75,50

        // 2021: 78,15

        // 2022: 81,33

        // 2023: 83,34

        // 2024: 84,13 juta orang
        name: 'Pekerja Formal',
        data: [47.49, 50.83, 50.33, 51.87, 53.87, 56.04, 57.79, 52.92, 54.28, 55.29, 58.05]
    }, {
        name: 'Pekerja Informal',
        data: [70.68, 70.02, 70.32, 72.67, 75.61, 75.65, 75.50, 78.15, 81.33, 83.34, 84.13]
    }]
});
