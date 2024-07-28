Highcharts.chart('container-gabut', {
    chart: {
        type: 'pie',
        backgroundColor: 'rgba(255,255,255,0)',
        borderRadius: 16,
    },
    title: {
        text: null
    },
    tooltip: {
        // valueSuffix: '',
        pointFormat: '<span style="font-weight:bold">{point.y} ({point.percentage:.0f}%)</span>',
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Zain',
            fontSize: '1.2rem'
        }
    },
    subtitle: {
        text: null
    },
    credits: {
        enabled: false //buat highcharts com
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                // format: '{point.y}',
                format: '{point.percentage:.0f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        },
        pie: {
            borderColor: 'transparent',
            dataLabels: {
                style: {
                    color: "white",//color nama
                    borderColor: '#fafafa',
                    font: 'normal 1.5rem "Zain", sans-serif',
                    fontWeight: 'normal',
                    textOutline: false
                    // lineHeight: '2rem'
                },
            }
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'SD ke bawah',
                    y: 1630080
                },
                {
                    name: 'SMP',

                    y: 1842669
                },
                {
                    name: 'SMA',
                    y: 3569904
                },
                {
                    name: 'SMK',
                    y: 2292189
                },
                {
                    name: 'Perguruan Tinggi',
                    y: 561177
                }
            ]
        }
    ]
});
