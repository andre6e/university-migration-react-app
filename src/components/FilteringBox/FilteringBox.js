import React, { Component } from 'react';
import InputRange from 'react-input-range';
import FilteringRadio from '../FilteringRadio/FilteringRadio';

import './FilteringBox.css';
import 'react-input-range/lib/css/index.css';

import { SELECT_NAMES } from '../../constants/constants';

class FilteringBox extends Component {
    // constructor(props) {
    //     super(props);
    // };

    handleSelectChange(options, select) {
        const { onSelectFromOptionsSelection, onSelectToOptionsSelection } = this.props;
        const name = select.name;

        if (name === SELECT_NAMES.FROM) {
            onSelectFromOptionsSelection(options);
        } else {
            onSelectToOptionsSelection(options);
        }
    };
    

    render() {
        const { toValue, fromValue, regionOptions, sliderValue, onSliderValueChange } = this.props;

        return(
            <div className="filtering-box-container">
                <p className="filtering-box-title"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  </p>

                {/* CHECKBOXES & SELECT */}
                <div className="filter-components-container">
                    {/* FROM */}
                    <FilteringRadio
                        labelText = "Da dove (regione residenza)"
                        groupKey = "FROM"
                        value = {fromValue}
                        regionOptions = {regionOptions}
                        handleSelectChange = {this.handleSelectChange.bind(this)}
                    />

                    {/* TO */}
                    <FilteringRadio
                        labelText = "Verso dove (regione corso)"
                        groupKey = "TO"
                        value = {toValue}
                        regionOptions = {regionOptions}
                        handleSelectChange = {this.handleSelectChange.bind(this)}
                    />

                </div>
                
                {/* TIMERANGE */}
                <div className="range-container">
                    <InputRange
                        // draggableTrack
                        minValue={2014}
                        maxValue={2018}
                        value={sliderValue}
                        onChange={value => onSliderValueChange(value)} />
                </div>

            </div>
        )
    }
}
export default FilteringBox;