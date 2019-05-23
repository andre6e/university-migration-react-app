import React, { Component } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import {ChordDiagram as AMChordDiagram} from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { CHORD_DEFAULT_EMPTY_CHART_DATA } from '../../constants/constants';

import './ChordDiagram.css';

am4core.useTheme(am4themes_animated);

class ChordDiagram extends Component {
    // constructor(props) {
    // }

    // Enabling/disabling custom empty chart style if no data have been received
    _handleEnalbeDisagleChart(newData) {
      if (newData.length) {
          this._enableChart();
      } else {
          this._disableChart();
      }
  }

    // Abilito lo slice dei nodi e il tooltip
    _enableChart() {
      this.chart.nodes.template.draggable = true;
      this.chart.links.template.tooltipText = "{from} -> {to}: [bold]{value}[/]";
      this.chart.nodes.template.slice.disabled = false;
    }

    // Inserisco un solo nodo e disabilito il tooltip e lo slice del nodo
    _disableChart() {
      this.chart.data = CHORD_DEFAULT_EMPTY_CHART_DATA;
      this.chart.nodes.template.draggable = false;
      this.chart.links.template.tooltipText = "";
      this.chart.nodes.template.slice.disabled = true;
    }

    /* COMPONENT LIFECYCLE HOOKS */
    
    componentDidMount() {
      const { data, conf } = this.props;

      let chart = am4core.create('chartdiv', AMChordDiagram);
      chart.data = data;

      Object.keys(conf).forEach(confKey => {
        chart.dataFields[confKey] = conf[confKey]
      });

      this.chart = chart;

      // Enabling/disabling custom empty chart style if no data have been received
      this._handleEnalbeDisagleChart(data);
    }

    componentWillMount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    componentDidUpdate(oldProps) {
        //TODO: check se redraw è necessario??
       this.chart.data = this.props.data;

        // Enabling/disabling custom empty chart style if no data have been received
        this._handleEnalbeDisagleChart(this.props.data);
    }

    render() {
      return (
        <div id="chartdiv" className="chordContainer"></div>
      )
    }
}

export default ChordDiagram;