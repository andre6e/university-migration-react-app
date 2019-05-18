import React, { Component } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import {ChordDiagram as AMChordDiagram} from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import './ChordDiagram.css';

am4core.useTheme(am4themes_animated);

class ChordDiagram extends Component {
    // constructor(props) {
    // }

    /* COMPONENT LIFECYCLE HOOKS */
    
    componentDidMount() {
      const { data, conf } = this.props;

      let chart = am4core.create('chartdiv', AMChordDiagram);
      chart.data = data;

      Object.keys(conf).forEach(confKey => {
        chart.dataFields[confKey] = conf[confKey]
      });

      this.chart = chart;
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

        this.chart.data = this.props.data;
    }

    render() {
      return (
        <div id="chartdiv" className="chordContainer"></div>
      )
    }
}

export default ChordDiagram;