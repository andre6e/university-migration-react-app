import React, { Component } from 'react';
import MyGridLayout from './components/MyGridLayout/MyGridLayout';
import FilteringBox from './components/FilteringBox/FilteringBox';
import Header from './components/Header/Header';

// Style imports
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

// Mock
import { archLayersData, chordMockData, bulletsPieChartData } from './mock/mock';

// Constants
import { emptyArchLayersData, chordEmptyData, bulletsPieChartEmptyData, regionsListMock , RANGE_SLIDER_DEF_VALUE} from './constants/constants';

// import * as ApiService from './utils/ApiService';

const initialState = {
  REGION_OPTIONS: regionsListMock,

  FROM_SELECTED_LIST: [],
  TO_SELECTED_LIST: [],

  SLIDER_VALUE: RANGE_SLIDER_DEF_VALUE,

  ARCH_LAYERS_DATA: emptyArchLayersData,
  BULLETS_PIE_CHART_DATA: bulletsPieChartEmptyData,
  CHORD_MOCK_DATA: chordEmptyData,

  // ARCH_LAYERS_DATA: archLayersData,
  // BULLETS_PIE_CHART_DATA: bulletsPieChartData,
  // CHORD_MOCK_DATA: chordMockData,
};

class App extends Component {
  constructor() {
      super();
      this.state = initialState;
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

  _executeQuery(forceSearch) {
    if (forceSearch === true) {
      // faccio la query e poi setto lo stato con i dati risultanti

      // LA QUERY DA FAR PARTIRE SOLO SE è DIFFERENTE DALL'ULTIMA

      this.setState({
        ARCH_LAYERS_DATA: archLayersData,
        BULLETS_PIE_CHART_DATA: bulletsPieChartData,
        CHORD_MOCK_DATA: chordMockData,
  
        // ARCH_LAYERS_DATA: emptyArchLayersData,
        // BULLETS_PIE_CHART_DATA: bulletsPieChartEmptyData,
        // CHORD_MOCK_DATA: chordEmptyData,
      })
    }
  };

  /* COMPONENT LIFECYCLE HOOKS */

  componentDidMount() {
    // let query = {
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

          // Search button click -> Execute query
          onSearchButtonClick = {this._executeQuery.bind(this, true)}
        />

        <MyGridLayout 
          // Arch Map
          archLayersData = {this.state.ARCH_LAYERS_DATA}
          // Bullets Pie
          bulletsPieChartData = {this.state.BULLETS_PIE_CHART_DATA}
          // Chord Diagram
          chordDiagramData = {this.state.CHORD_MOCK_DATA}
        />
      </div>
    );
  }
}

export default App;
