/* global fetch */
import React, {Component} from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL, {ArcLayer} from 'deck.gl';
import MapLegend from '../MapLegend/MapLegend';

import IconButton from '@material-ui/core/IconButton';
import AssignmentIcon from '@material-ui/icons/Assignment';

import 'mapbox-gl/dist/mapbox-gl.css';
import './ArchMap.css';

// Set your mapbox token here
const MAPBOX_TOKEN = 'pk.eyJ1IjoidWJlcmRhdGEiLCJhIjoiY2pudzRtaWloMDAzcTN2bzN1aXdxZHB5bSJ9.2bkj3IiRC8wj3jLThvDGdA';

const INITIAL_VIEW_STATE = {
  longitude: 13.319677,
  latitude: 42.529535,
  zoom: 4,
  maxZoom: 15
};

/* eslint-disable react/no-deprecated */
class ArchMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hoveredObject: undefined,
            showLegend: true
        }
    }

    /* LOGIC HELPERS FUNCTIONS */
  
    _renderLayers() {
        const { data } = this.props;

        let resLayersContainer = [];

        resLayersContainer = data.map(layerData => {
            return this._createArchLayerObject(layerData);
        });

        return resLayersContainer;
    }

    _createArchLayerObject(layerData) {
        return new ArcLayer({
            id: layerData.id,
            data: layerData.data,
            getSourceColor: layerData.getSourceColor,
            getTargetColor: layerData.getTargetColor,
            getWidth: layerData.getWidth,
            highlightColor: layerData.highlightColor,

            getSourcePosition: d => d.source,
            getTargetPosition: d => d.target,

            // necessari all'onhover
            pickable: true,
            autoHighlight: true,
            onHover: this._handleArchHover.bind(this)
        });
    }

    _handleArchHover(object) {
        this.setState({
            hoveredObject: object.object,
            pointerX: object.x,
            pointerY: object.y
        });
    }

    _renderTooltip() {
        const {hoveredObject, pointerX, pointerY} = this.state || {};

        const style = {
            left: pointerX,
            top: pointerY
        };

        return hoveredObject && (
            <div className="testTooltip" style={style}>
                <p> {hoveredObject.props.sourceName} -> {hoveredObject.props.targetName} : {hoveredObject.props.numberOfEle} </p>
            </div>
        );
    }

    _handleShowLegend() {
        this.setState({
            showLegend: !this.state.showLegend
        });
    }

    /* COMPONENT LIFECYCLE HOOKS */

    render() {
        const { viewState, controller = true, baseMap = true, conf } = this.props;
        const { showLegend } = this.state;
        
        return (
            <div className="testContainerMap">
                <DeckGL layers={this._renderLayers()} initialViewState={INITIAL_VIEW_STATE} viewState={viewState} controller={controller}>
                    {baseMap && (
                        <StaticMap
                            reuseMaps
                            mapStyle="mapbox://styles/mapbox/light-v10"
                            preventStyleDiffing={true}
                            mapboxApiAccessToken={MAPBOX_TOKEN}
                            attributionControl={false}
                        />
                    )}
                </DeckGL>
                
                { showLegend && (
                    <div className="layersSelectorContainer">
                        <MapLegend conf={conf.visibleRegions}/>
                    </div>
                )}

                <div className="legendButton" onClick={this._handleShowLegend.bind(this)}>
                    <IconButton aria-label="Legend">
                        <AssignmentIcon/>
                    </IconButton>
                </div>

                { this._renderTooltip() }
            </div>
        );
    }
}

export default ArchMap;