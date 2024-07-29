Highcharts.chart('container-terserap', {
    chart: {
        type: 'column',
        backgroundColor: 'rgba(255,255,255,.6)',
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
            'Sumber: Indikator Pasar Tenaga Kerja Indonesia 2024',
        align: 'left',
        style: {
            color: "#4a4a4a",
            font: 'normal 13px "Source Code Pro", sans-serif',
            // lineHeight: '2rem'
        }
    },
    xAxis: {
        categories: ['15-24 tahun', '> 25 tahun'],
        crosshair: true,
        accessibility: {
            description: 'Usia'
        },
        labels: {
            // text: null,
            style: {
                // color: "#fafafa",
                font: '18px "Zain", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
    },
    yAxis: {
        min: 0,
        title: {
            text: null
        }
    },
    tooltip: {
        valueSuffix: '%',
        style: {
            //fontWeight: 'bold',
            fontFamily: 'Zain',
            fontSize: '1.2rem'
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                style: {
                    // color: "#fafafa",
                    font: 'normal 1.5rem "Zain", sans-serif',
                    // lineHeight: '2rem'
                    fontWeight: 'normal',
                    textOutline: false
                },
            },
        }
    },
    legend: {
        itemStyle: {
            font: 'normal 1.3rem Zain',
            // color: '#A0A0A0'
        },


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
