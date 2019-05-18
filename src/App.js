import React, { Component } from 'react';
import MyGridLayout from './components/MyGridLayout/MyGridLayout';
import FilteringBox from './components/FilteringBox/FilteringBox';
import Header from './components/Header/Header';

// Style imports
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

// Mock
import { archLayersData, archLayersData2, regionsListMock, chordMockData, chordConf, stackedColumnData, stackedColumnData2 } from './mock/mock';

const initialState = {
  REGION_OPTIONS: regionsListMock,

  FROM_SELECTED_LIST: [],
  TO_SELECTED_LIST: [],

  SLIDER_VALUE: {
    min: 2014,
    max: 2018,
  },

  ARCH_LAYERS_DATA: archLayersData,

  STACKED_COLUMN_DATA: stackedColumnData,

  CHORD_MOCK_DATA: chordMockData,
  CHORD_CONF: chordConf,
};

class App extends Component {
  constructor() {
      super();
      this.state = initialState;
      // console.log("Initial state", this.state);
  };

  _executeQuery() {
    // console.log(this.state);
    this.setState({
      ARCH_LAYERS_DATA: archLayersData2,
      STACKED_COLUMN_DATA: stackedColumnData2
    })
  };

  /* RADIO */
  

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

          // Stacked Columns
          stackedColumnData = {this.state.STACKED_COLUMN_DATA}

          // Chord Diagram
          chordDiagramData = {this.state.CHORD_MOCK_DATA} 
          chordDiagramConf = {this.state.CHORD_CONF} 
        />
      </div>
    );
  }
}

export default App;
