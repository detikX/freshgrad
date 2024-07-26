Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    }
})
Highcharts.chart('container-genz', {
    chart: {
        type: 'pie',
        custom: {},
        backgroundColor: 'rgba(255,255,255,0)',
        borderRadius: 16,
        events: {
            render() {
                const chart = this,
                    series = chart.series[0];
                let customLabel = chart.options.chart.custom.label;
                
                points = chart.series[0].points,
                len = points.length,
                total = 0,
                i = 0;
    
              for (; i < len; i++) {
                total += points[i].y;
              }
                if (!customLabel) {
                    customLabel = chart.options.chart.custom.label =
                        chart.renderer.label(
                            'Total<br/>' +
                            '<strong>'+total.toLocaleString('id')+'</strong>'
                        )
                            .css({
                                color: '#fff',
                                font: 'normal 2rem "Rubik", sans-serif',
                                textAnchor: 'middle'
                            })
                            .add();
                }

                const x = series.center[0] + chart.plotLeft,
                    y = series.center[1] + chart.plotTop -
                    (customLabel.attr('height') / 2);

                customLabel.attr({
                    x,
                    y
                });
                // Set font size based on chart diameter
                customLabel.css({
                    fontSize: `${series.center[2] / 12}px`
                });
            }
        }
    },
    // accessibility: {
    //     point: {
    //         valueSuffix: '%'
    //     }
    // },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false //buat highcharts com
    },
    plotOptions: {
        pie: {
            borderColor: 'transparent',
            dataLabels: {
                style: {
                    color: "white",//color nama
                    borderColor: '#fafafa',
                    font: 'normal 16px "Zain", sans-serif',
                    fontWeight:'normal',
                    textOutline: false
                    // lineHeight: '2rem'
                },
            }
        },
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            borderRadius: 0,
            dataLabels: [{
                enabled: true,
                distance: 10,
                format: '{point.name}'
            }, {
                enabled: true,
                distance: -10,
                format: '{point.y:,.0f}',
                style: {
                    fontSize: '0.9em',
                    color: "#fafafa"
                }
            }],
            showInLegend: false
        }
    },
    series: [{
        name: 'Pengangguran',
        colorByPoint: true,
        innerSize: '65%',
        data: [{
            name: '15-19 tahun (Gen Z)',
            y: 1034119
        }, {
            name: '20-24 tahun (Gen Z)',
            y: 2584181
        }, {
            name: '25-29 tahun (Gen Z & Milenial)',
            y: 1286712
        }]
    }]
});
