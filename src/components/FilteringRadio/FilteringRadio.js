import React, { Component } from 'react';
import Select from 'react-select';
import { SELECT_NAMES } from '../../constants/constants';
import './FilteringRadio.css';


class FilteringRadio extends Component {
    render() {
        const { labelText, groupKey, regionOptions, handleSelectChange } = this.props;
        const cardContainerClass = 'card-container ' + groupKey;

        return (
            <div className="filter-component-container">
                <div className={cardContainerClass}>
                    <h4> {labelText} </h4>
                    <div>
                        <Select
                            isMulti
                            name={SELECT_NAMES[groupKey]}
                            options={regionOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={handleSelectChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default FilteringRadio;