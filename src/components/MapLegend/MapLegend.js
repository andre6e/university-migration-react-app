import React, { Component } from 'react';

import './MapLegend.css';


class MapLegend extends Component {
    _renderList() {
        const { conf } = this.props;

        return conf.map(visibleRegion => {
            const style = {
                backgroundColor: `rgb(${visibleRegion.color.join(',')})`
            };

            return (
                <div key={visibleRegion.name} className="regionRowContainer">
                    <div style={style} className="circleDot"> </div> 
                    <div className="regionNameContainer"> {visibleRegion.name} </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="layerSelector">
                <p className="legendTitle"> <strong> Da dove </strong> </p>
                <p className="legendSubTitle"> Regione residenza </p>

                <div className="regionsLegendContainer">
                    {this._renderList()}
                </div>
            </div>
        )
    }
}

export default MapLegend;