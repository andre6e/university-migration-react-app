import React, { Component } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { STACKED_DEFAULT_EMPTY_CHART_DATA } from '../../constants/constants';

import './StackedColumnChart.css';

am4core.useTheme(am4themes_animated);

class StackedColumnChart extends Component {
    // constructor(props) {
    // }

    /* LOGIC HELPERS FUNCTION */

    _enableChart() {
        // this.chart.legend.disabled = false;
    }

    _disableChart() {
        // this.chart.legend.disabled = true;
        this.chart.data = STACKED_DEFAULT_EMPTY_CHART_DATA;
    }

    // Create series
    _initializeChart() {
        const { data, conf } = this.props;
        let chart = am4core.create('stackedColumnChartDiv', am4charts.XYChart);

        // Add data
        chart.data = data;
        
        // Create Y axes
        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = conf.REGION_FROM_CATEGORY_KEY;
        categoryAxis.renderer.grid.template.opacity = 0;
        
        // Create X axes
        let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.opacity = 0;
        valueAxis.renderer.ticks.template.strokeOpacity = 0.5;
        valueAxis.renderer.ticks.template.stroke = am4core.color("#495C43");
        valueAxis.renderer.line.strokeOpacity = 0.5;
        valueAxis.renderer.baseGrid.disabled = true;
        
        // Legend (buttons per disattivare series)
        chart.legend = new am4charts.Legend();

        // Create Series
        Object.keys(conf.series).forEach(seriesKey => {
            this._createSeries(seriesKey, conf.series[seriesKey], conf.seriesColours[seriesKey], conf.REGION_FROM_CATEGORY_KEY, chart);
        });

        // chart datavalidated callback event binding
        chart.events.on('datavalidated', this._onChartDataValidated.bind(this));

        // Saving chart reference
        this.chart = chart;

        // Enabling/disabling custom empty chart style if no data have been received
        if (!data.length) {
            this._disableChart()
          } else {
            this._enableChart();
          }
    }

    _createSeries(field, name, seriesColour, regionFromCategoryKey, chart) {
        // Set up series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.name = name;
        series.dataFields.valueX = field;
        series.dataFields.categoryY = regionFromCategoryKey;
        series.sequencedInterpolation = true;
        
        // Make it stacked
        series.stacked = true;
        
        // Configure columns template
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryY}: {valueX}";
        series.columns.template.fill = am4core.color(seriesColour);
        series.stroke = am4core.color(seriesColour);
        
        // // Add label (sulla colonna)
        let labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.text = "{valueX}";
        labelBullet.locationX = 0.5;
        
        return series;
    }

    // Remove series if needed (in order to update the chart legend)
    _onChartDataValidated() {
        if (this.seriesToRemoveKeys.length) {
           while (this.seriesToRemoveKeys.length > 0) {
                let keyToRemove = this.seriesToRemoveKeys.pop();
                this._removeSeriesByKey(keyToRemove);
            }
        }
    }

    _removeSeriesByKey(keyToRemove) {
        let seriesLength = this.chart.series.length;

        for (let i = 0; i < seriesLength - 1; i++) {
            let series = this.chart.series.getIndex(i);

            if (series.dataFields.valueX === keyToRemove) {
                this.chart.series.removeIndex(i);
                break;
            }
        }
    }

    // Checks if there are series to be removed or created
    _checkSeriesStatusAfterComponentUpdate(oldProps) {
        const { conf } = this.props;

        const oldSeries = Object.keys(oldProps.conf.series);
        const newSeries = Object.keys(conf.series);

        if (oldSeries.sort().join() !== newSeries.sort().join()) {
            // Checks series to remove
            let chartSeriesLength = this.chart.series.length;
            for (let i = 0; i < chartSeriesLength ; i++) {
                let series = this.chart.series.getIndex(i);
                let oldSeriesKey = series.dataFields.valueX;
                
                if (newSeries.indexOf(oldSeriesKey) === -1) {
                    // se non c'è in quelle nuove va rimossa
                    this.seriesToRemoveKeys.push(oldSeriesKey);
                }
            }

            // Cheks series to insert
            let toInsert = newSeries.filter(x => !oldSeries.includes(x));
            if (toInsert.length) {
                toInsert.forEach(seriesKey => {
                    this._createSeries(seriesKey, conf.series[seriesKey], conf.seriesColours[seriesKey], conf.REGION_FROM_CATEGORY_KEY, this.chart);
                });
            }
        }
    }

    /* COMPONENT LIFECYCLE HOOKS */

    componentDidMount() {
        // Initializes the chart
        this._initializeChart();

        // Saving seriesToRemoveKeys reference
        this.seriesToRemoveKeys = [];
    }

    componentWillMount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    componentDidUpdate(oldProps) {
        const { data } = this.props;

        // Series update check
        this._checkSeriesStatusAfterComponentUpdate(oldProps);
        
        // Chart data update 
        // TODO: check if it is necessary
        // this.chart.data = data;

        if (data.length) {
            this.chart.data = data;
            this._enableChart();
        } else {
            this._disableChart();
        }
    }

    render() {
      return (
        <div id="stackedColumnChartDiv" className="stackedContainer"></div>
      )
    }
}

export default StackedColumnChart;