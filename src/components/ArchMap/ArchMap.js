/* global fetch */
import React, {Component} from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL from 'deck.gl';
import MapLegend from '../MapLegend/MapLegend';

import IconButton from '@material-ui/core/IconButton';
import AssignmentIcon from '@material-ui/icons/Assignment';

import 'mapbox-gl/dist/mapbox-gl.css';
import './ArchMap.css';

import ArcBrushingLayer from './ArcBrushingLayer';

import { MAPBOX_TOKEN, ARCHS_ANIMATION_INCREMENT, ARCHS_ANIMATION_INTERVAL } from '../../constants/constants';

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
            showLegend: false,
            coef: 0.001
        }

        // Necessarie per la logica dell'animazione degli archi
        this._resetAnimationStatus();
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
        // return new ArcLayer({
        return new ArcBrushingLayer({
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
            onHover: this._handleArchHover.bind(this),

            // necessario per l'animazione
            coef: this.state.coef
        });
    }

    _animateArcs() {
        const animationInterval = setInterval(() => {
            let callback;

            this._ARCHS_ANIMATION_COEF += ARCHS_ANIMATION_INCREMENT;
            
            if (this._ARCHS_ANIMATION_COEF >= 1.0) {
                clearInterval(animationInterval);
                callback = this._resetAnimationStatus.bind(this);
            } 

            this.setState({
                coef: this._ARCHS_ANIMATION_COEF
            }, callback ? callback : () => {});
        }, ARCHS_ANIMATION_INTERVAL);
    }

    _resetAnimationStatus() {
        this._ARCHS_ANIMATION_NEEDED = true;
        this._ARCHS_ANIMATION_COEF = 0.001;
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
    
    _areNewPropsDifferentFromOldProps(oldProps) {
        const { data, conf } = this.props;

        // CHECK CONF
        if (conf.visibleRegions.length !== oldProps.conf.visibleRegions.length) {
            return true;
        } else {
            let confKeys = conf.visibleRegions.map(el => el.name).sort().join();
            let oldConfKeys = oldProps.conf.visibleRegions.map(el => el.name).sort().join();
    
            if (confKeys !== oldConfKeys) {
                return true;
            }
        }

        // CHECK DATA
        if (data.length !== oldProps.data.length) {
            return true;
        } else {
            // TODO va spostato sul server
            let newDataSorted = data.sort(this._compareFunction).map(el => JSON.stringify(el.data[0])).join();
            let oldDataSorted = oldProps.data.sort(this._compareFunction).map(el => JSON.stringify(el.data[0])).join();

            if (newDataSorted !== oldDataSorted) {
                return true;
            }
        }

        return false;
    }
    
    _compareFunction(a,b) {
        let toRet = a;

        if (b.id < a.id) {
            toRet = b;
        }

        return toRet;
    }

    _isArchAnimationNecessary() {
        return this.props.data.length && this._ARCHS_ANIMATION_NEEDED;
    }

    _handleArchsStartAnimation() {
        this._ARCHS_ANIMATION_NEEDED = false;
        this._animateArcs();
    }

    /* COMPONENT LIFECYCLE HOOKS */

    componentDidMount() {
        if (this._isArchAnimationNecessary()) {
            this._handleArchsStartAnimation();
        }
    }

    componentDidUpdate(oldProps) {
        const { data, conf } = this.props;
        
        if (data.length && conf.visibleRegions.length && this._areNewPropsDifferentFromOldProps(oldProps) && this._isArchAnimationNecessary()) {
            this._handleArchsStartAnimation();
        }
    }

    render() {
        const { viewState, controller = true, baseMap = true, conf } = this.props;
        const { showLegend } = this.state;

        return (
            <div className="testContainerMap">
                <DeckGL layers={this._renderLayers()} initialViewState={INITIAL_VIEW_STATE} viewState={viewState} controller={controller} >
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
                
                { showLegend && conf.visibleRegions && conf.visibleRegions.length && (
                    <div className="layersSelectorContainer">
                        <MapLegend conf={conf.visibleRegions}/>
                    </div>
                )}

                { conf.visibleRegions && conf.visibleRegions.length && (
                    <div className="legendButton" onClick={this._handleShowLegend.bind(this)}>
                        <IconButton aria-label="Legend">
                            <AssignmentIcon/>
                        </IconButton>
                    </div>
                )}

                { this._renderTooltip() }
            </div>
        );
    }
}

export default ArchMap;