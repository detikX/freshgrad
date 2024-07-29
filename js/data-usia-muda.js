Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    }
})
Highcharts.chart('container-usia-muda', {
    chart: {
        type: 'bar',
        backgroundColor: 'rgba(255,255,255,.6)',
        borderRadius: 16,
    },
    title: {
        text: null,
        align: 'left',
        style: {
            // color: "#fafafa",
            font: 'bold 2rem "Zain", sans-serif',

            lineHeight: '4rem'
        }
    },
    subtitle: {
        text: 'Sumber: BPS',
        align: 'left',
        style: {
            color: "#4a4a4a",
            font: 'normal 13px "Source Code Pro", sans-serif',
            // lineHeight: '2rem'
        }
    },
    xAxis: {
        categories: ['2021', '2022', '2023'],
        title: {
            text: null
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
        gridLineWidth: .7,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        // title: {
        //     text: 'Population (millions)',
        //     align: 'high'
        // },
        labels: {
            overflow: 'justify',
            enabled: false
        },
        title: {
            text: null
        },
        gridLineWidth: 0
    },
    tooltip: {
        // valueSuffix: '%',
        // value: '{point.name} tahun'
        formatter: function () {
            return 'Usia: ' + this.series.name + ' tahun<br>Pengangguran di tahun <b>' + this.x +
                '</b><br> mencapai <b>' + this.y + '%</b>';
        },
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Zain',
            fontSize: '1.2rem'
        }
    },
    plotOptions: {
        // series: {
        //     stacking: 'normal',
        // },
        bar: {
            borderRadius: '50%',
            borderColor: 'transparent',
            dataLabels: {
                enabled: true,
                style: {
                    // color: "#fafafa",
                    font: 'normal 18px "Zain", sans-serif',
                    // lineHeight: '2rem'
                    fontWeight: 'normal',
                    textOutline: false
                },
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
        x: -10,
        y: 10,
        floating: true,
        borderWidth: 1,
        itemStyle: {
            font: 'normal .9rem Zain',
            // color: '#A0A0A0'
        },
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'rgba(255,255,255,.7)',
        shadow: false
    },
    credits: {
        enabled: false //buat highcharts com
    },
    series: [{
        name: '15-19',
        data: [23.91, 29.08, 25.77]
    }, {
        name: '20-24',
        data: [17.73, 17.02, 16.85]
    }, {
        name: '25-29',
        data: [9.26, 7.13, 7.48]
    }, {
        name: '30-34',
        data: [5.43, 3.70, 3.55]
    }, {
        name: '35-39',
        data: [4.02, 2.65, 2.54]
    }, {
        name: '40-44',
        data: [3.42, 2.43, 1.82]
    }, {
        name: '45-49',
        data: [3.30, 2.33, 1.80]
    }, {
        name: '50-54',
        data: [2.18, 2.38, 1.79]
    }, {
        name: '55-59',
        data: [1.98, 2.37, 1.52]
    }, {
        name: '> 60',
        data: [2.73, 2.85, 1.28]
    }]
});
