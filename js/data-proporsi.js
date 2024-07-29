// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container-proporsi', {
    chart: {
        type: 'spline',
        backgroundColor: 'rgba(255,255,255,.6)',
        borderRadius: 16
    },
    title: {
        text: null
    },
    subtitle: {
        text: 'Sumber: BPS',
        style: {
            color: "#4a4a4a",
            font: 'normal 13px "Source Code Pro", sans-serif',
            // lineHeight: '2rem'
        }
    },
    xAxis: {
        categories: [
            '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024',
        ],
        accessibility: {
            description: 'Months of the year'
        },
        labels: {
            // text: null,
            // formatter: function () {
            //     // var a = this.y.toString().replace('.', ',');
            //     // return a + '%';
            // },
            style: {
                // color: "#fafafa",
                font: '18px "Zain", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
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
        // formatter: function () {
        //     var a = this.y.toString().replace('.', ',');
        //     return this.series.name + ': <b>' + a + '%</b>';

        // },
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            },
            dataLabels: {
                style: {
                    // color: "#fafafa",
                    font: 'normal 1.5rem "Zain", sans-serif',
                    // lineHeight: '2rem'
                    fontWeight: 'normal',
                    textOutline: false
                },
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
