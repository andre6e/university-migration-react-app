import React, { Component } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { BULLETS_PIE_EMPTY_CHART_DATA } from '../../constants/constants';

import './BulletsPieChart.css';

am4core.useTheme(am4themes_animated);

class BulletsPieChart extends Component {
    // constructor(props) {
    // }

    // Abilito lo slice dei nodi e il tooltip
    _enableChart() {
        this.chart.series.getIndex(0).columns.template.fillOpacity = 1;
        // add tooltip on column, not template, so that slices could also have tooltip
        this.chart.series.getIndex(0).columns.template.column.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    }

    // Inserisco un solo nodo e disabilito il tooltip e lo slice del nodo
    _disableChart() {
        this.chart.data = BULLETS_PIE_EMPTY_CHART_DATA;
        this.chart.series.getIndex(0).columns.template.fillOpacity = 0.3;
        this.chart.series.getIndex(0).columns.template.column.tooltipText = "";
    }

    _initializeChart() {
        const {data, conf} = this.props;

        // Create chart instance
        let chart = am4core.create("bulletschartdiv", am4charts.XYChart);

        // Add data
        chart.data = data;

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = conf.COLUMN_REGION_NAME;
        categoryAxis.renderer.grid.template.disabled = true;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        // valueAxis.title.text = "Studendi iscritti/immatricolati";
        valueAxis.min = 0;
        valueAxis.renderer.baseGrid.disabled = true;
        valueAxis.renderer.grid.template.strokeOpacity = 0.07;

        // Create series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "units";
        series.dataFields.categoryX = conf.COLUMN_REGION_NAME;
        series.tooltip.pointerOrientation = "vertical";

        let columnTemplate = series.columns.template;
        // columnTemplate.column.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
        columnTemplate.column.tooltipY = 0;
        columnTemplate.column.cornerRadiusTopLeft = 20;
        columnTemplate.column.cornerRadiusTopRight = 20;
        columnTemplate.strokeOpacity = 0;

        // Colore della colonna
        columnTemplate.propertyFields.fill = conf.COLUMN_COLOR;
        columnTemplate.propertyFields.stroke = conf.COLUMN_COLOR;

        // create pie chart as a column child
        let pieChart = series.columns.template.createChild(am4charts.PieChart);
        pieChart.width = am4core.percent(100);
        pieChart.height = am4core.percent(100);
        pieChart.align = "center";
        pieChart.valign = "middle";
        pieChart.dataFields.data = "pie";

        let pieSeries = pieChart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = conf.PIE_VALUE;
        pieSeries.dataFields.category = conf.PIE_TITLE;
        pieSeries.labels.template.disabled = true;
        pieSeries.ticks.template.disabled = true;
        pieSeries.slices.template.stroke = am4core.color("#ffffff");
        pieSeries.slices.template.strokeWidth = 1;
        pieSeries.slices.template.strokeOpacity = 0;

        // Setto la proprietà che definisce il colore delle singole slice 
        pieSeries.slices.template.propertyFields.fill = conf.PIE_COLOR;
        pieSeries.slices.template.propertyFields.stroke = conf.PIE_COLOR;

        // pieSeries.slices.template.adapter.add("fillOpacity", (fillOpacity, target)=>{
        //     return (target.dataItem.index + 1) * 0.5;
        // });
        
        pieSeries.hiddenState.properties.startAngle = -90;
        pieSeries.hiddenState.properties.endAngle = 270;

        this.chart = chart;

        // Enabling/disabling custom empty chart style if no data have been received
        if (!data.length) {
            this._disableChart()
        } else {
            this._enableChart();
        }
    }

    /* COMPONENT LIFECYCLE HOOKS */
    
    componentDidMount() {
        this._initializeChart();
    }

    componentWillMount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    componentDidUpdate(oldProps) {
        //TODO: check se redraw è necessario??
        
        // if (oldProps.paddingRight !== this.props.paddingRight) {
        //   this.chart.paddingRight = this.props.paddingRight;
        // }

        if (this.props.data.length) {
          this.chart.data = this.props.data;
          this._enableChart();
        } else {
          this._disableChart();
        }
    }

    render() {
      return (
        <div id="bulletschartdiv" className="bulletsPieContainer"></div>
      )
    }
}

export default BulletsPieChart;