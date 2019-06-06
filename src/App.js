import React, { Component } from 'react';
import MyGridLayout from './components/MyGridLayout/MyGridLayout';
import FilteringBox from './components/FilteringBox/FilteringBox';
import Header from './components/Header/Header';

// Style imports
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

// Mock
import { archLayersData, chordMockData, bulletsPieChartData, tableListData } from './mock/mock';

// Constants
import { emptyArchLayersData, chordEmptyData, bulletsPieChartEmptyData, emptyTableListData, regionsListMock , RANGE_SLIDER_DEF_VALUE} from './constants/constants';

// import * as ApiService from './utils/ApiService';
import * as Utils from './utils/Utils';

const initialState = {
  REGION_OPTIONS: regionsListMock,

  FROM_SELECTED_LIST: [],
  TO_SELECTED_LIST: [],

  SLIDER_VALUE: RANGE_SLIDER_DEF_VALUE,

  ARCH_LAYERS_DATA: emptyArchLayersData,
  BULLETS_PIE_CHART_DATA: bulletsPieChartEmptyData,
  CHORD_MOCK_DATA: chordEmptyData,
  TABLE_LIST_DATA: emptyTableListData,

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
    });
  };

  handleSelectToOptions (value) {
    this.setState({
      TO_SELECTED_LIST: value
    });
  };

  /* RANGE SLIDER */
  handleSliderValueChange (value) {
    this.setState({
      SLIDER_VALUE: value
    });
  }

  _handleSearchButtonClick() {
    let currentQuery = {
      FROM: this.state.FROM_SELECTED_LIST.sort(),
      TO: this.state.TO_SELECTED_LIST.sort(),
      TIME_RANGE: this.state.SLIDER_VALUE
    };

    if (!Utils.isLastQueryEqualToCurrentOne(this.state.LAST_QUERY, currentQuery)) {
      this._executeQuery(currentQuery)
    }
  };
  
  _executeQuery(query) {
    // faccio la query e poi setto lo stato con i dati risultanti
    console.log("executing query");

    // ApiService.postRequest(query).then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.error(err);
    // })

    this.setState({
      ARCH_LAYERS_DATA: archLayersData,
      BULLETS_PIE_CHART_DATA: bulletsPieChartData,
      CHORD_MOCK_DATA: chordMockData,
      TABLE_LIST_DATA: tableListData,
      LAST_QUERY: query
  
      // ARCH_LAYERS_DATA: emptyArchLayersData,
      // BULLETS_PIE_CHART_DATA: bulletsPieChartEmptyData,
      // CHORD_MOCK_DATA: chordEmptyData,
    })
  };

  /* COMPONENT LIFECYCLE HOOKS */

  componentDidMount() {
    let query = {
      FROM: this.state.FROM_SELECTED_LIST,
      TO: this.state.TO_SELECTED_LIST,
      TIME_RANGE: this.state.SLIDER_VALUE
    };

    this.setState({
      LAST_QUERY: query
    });
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

          // Search button click
          onSearchButtonClick = {this._handleSearchButtonClick.bind(this)}
        />

        <MyGridLayout 
          // Arch Map
          archLayersData = {this.state.ARCH_LAYERS_DATA}
          // Bullets Pie
          bulletsPieChartData = {this.state.BULLETS_PIE_CHART_DATA}
          // Chord Diagram
          chordDiagramData = {this.state.CHORD_MOCK_DATA}
          // Table List
          tableListData = {this.state.TABLE_LIST_DATA}
        />
      </div>
    );
  }
}

export default App;
