import React, { Component } from 'react';
import MyGridLayout from './components/MyGridLayout/MyGridLayout';
import FilteringBox from './components/FilteringBox/FilteringBox';
import Header from './components/Header/Header';

// Style imports
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

// Mock
import { emptyArchLayersData, regionsListMock, chordEmptyData, bulletsPieChartEmptyData } from './mock/mock';

import * as ApiService from './utils/ApiService';

const initialState = {
  REGION_OPTIONS: regionsListMock,

  FROM_SELECTED_LIST: [],
  TO_SELECTED_LIST: [],

  SLIDER_VALUE: {
    min: 2014,
    max: 2018,
  },

  ARCH_LAYERS_DATA: emptyArchLayersData,
  BULLETS_PIE_CHART_DATA: bulletsPieChartEmptyData,
  CHORD_MOCK_DATA: chordEmptyData,
};

class App extends Component {
  constructor() {
      super();
      this.state = initialState;
  };

  componentDidMount() {
    // var query = {
    //   FROM: this.state.FROM_SELECTED_LIST,
    //   TO: this.state.TO_SELECTED_LIST,
    //   TIME_RANGE: this.state.SLIDER_VALUE
    // };

    // ApiService.postRequest(query).then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.error(err);
    // })
  }

  render() {
    return (
      <div className="App">
        <Header/>

        <FilteringBox
          // Selects
          regionOptions = {this.state.REGION_OPTIONS}

          // Selects handlers
          onSelectFromOptionsSelection = {this.handleSelectFromOptions.bind(this)}
          onSelectToOptionsSelection = {this.handleSelectToOptions.bind(this)}

          // Slider
          sliderValue = {this.state.SLIDER_VALUE}
          onSliderValueChange = {this.handleSliderValueChange.bind(this)}
        />

        <MyGridLayout 
          // Arch map
          archLayersData = {this.state.ARCH_LAYERS_DATA}
          // Bullets pie Chartss
          bulletsPieChartData = {this.state.BULLETS_PIE_CHART_DATA}
          // Chord Diagram
          chordDiagramData = {this.state.CHORD_MOCK_DATA}
        />
      </div>
    );
  }

  _executeQuery() {
    // console.log(this.state);
    // this.setState({
    //   ARCH_LAYERS_DATA: archLayersData,
    //   BULLETS_PIE_CHART_DATA: bulletsPieChartEmptyData,
    //   // CHORD_MOCK_DATA: chordMockData
    // })
  };

  /* SELECT */
  handleSelectFromOptions (value) {
    this.setState({
      FROM_SELECTED_LIST: value
    }, () => { this._executeQuery() });
  };

  handleSelectToOptions (value) {
    this.setState({
      TO_SELECTED_LIST: value
    }, () => { this._executeQuery() });
  };

  /* RANGE SLIDER */
  handleSliderValueChange (value) {
    this.setState({
      SLIDER_VALUE: value
    }, () => { this._executeQuery() });
  }
}

export default App;
