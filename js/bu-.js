Highcharts.chart('container-genz', {
    chart: {
        type: 'pie',
        custom: {},
        backgroundColor: 'rgba(255,255,255,.8)',
        borderRadius: 16,
        events: {
            render() {
                const chart = this,
                    series = chart.series[0];
                let customLabel = chart.options.chart.custom.label;

                if (!customLabel) {
                    customLabel = chart.options.chart.custom.label =
                        chart.renderer.label(
                            'Total<br/>' +
                            '<strong>2 877 820</strong>'
                        )
                            .css({
                                color: '#000',
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
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    title: {
        text: '2023 Norway car registrations'
    },
    subtitle: {
        text: 'Source: <a href="https://www.ssb.no/transport-og-reiseliv/faktaside/bil-og-transport">SSB</a>'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            borderRadius: 8,
            dataLabels: [{
                enabled: true,
                distance: 20,
                format: '{point.name}'
            }, {
                enabled: true,
                distance: -15,
                format: '{point.y}',
                style: {
                    fontSize: '0.9em'
                }
            }],
            showInLegend: true
        }
    },
    series: [{
        name: 'Registrations',
        colorByPoint: true,
        innerSize: '65%',
        data: [{
            name: '15-19 (Gen Z)',
            y: 1034119
        }, {
            name: '20-24 (Gen Z)',
            y: 2584181
        }, {
            name: '25-29 (Gen Z & Milenial)',
            y: 1286712
        }]
    }]
});