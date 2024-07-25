Highcharts.chart('container', {
    chart: {
        type: 'bar',
        backgroundColor: 'rgba(255,255,255,.9)',
        borderRadius: 16,
    },
    title: {
        text: 'Historic World Population by Region',
        align: 'left',
        style: {
            // color: "#fafafa",
            font: 'bold 24px "Zain", sans-serif',

            // lineHeight: '2rem'
        }
    },
    subtitle: {
        text: 'Source: <a ' +
            'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
            'target="_blank">Wikipedia.org</a>',
        align: 'left',
        style: {
            // color: "#fafafa",
            font: 'normal 13px "Source Code Pro", sans-serif',
            // lineHeight: '2rem'
        }
    },
    xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe'],
        title: {
            text: null
        },
        labels: {
            // text: null,
            style: {
                // color: "#fafafa",
                font: '1rem "Zain", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
        gridLineWidth: 1,
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
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            borderColor: 'transparent',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 1990',
        data: [632, 727, 3202, 721]
    }, {
        name: 'Year 2000',
        data: [814, 841, 3714, 726]
    }, {
        name: 'Year 2021',
        data: [1393, 1031, 4695, 745]
    }]
});
