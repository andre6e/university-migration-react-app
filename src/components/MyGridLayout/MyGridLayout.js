import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

import ArchMap from '../ArchMap/ArchMap';
import ChordDiagram from '../ChordDiagram/ChordDiagram';
import BulletsPieChart from '../BulletsPieChart/BulletsPieChart';

import { GRID_LAYOUT_CONFIG, STARTING_GRID_LAYOUT_DEF_CONF, LAYOUT_BREAKPOINTS_KEYS, WIDGET_KEYS, BULLETS_VISIBLE_LAYOUT_CONF } from '../../constants/constants';
import './MyGridLayout.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

class MyGridLayout extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentLayoutBreakpoint: STARTING_GRID_LAYOUT_DEF_CONF.breakpoint,
            currentLayout: STARTING_GRID_LAYOUT_DEF_CONF.layout
        }
    }

    /* LOGIC HELPERS FUNCTIONS */

    _getWidgetCurrentState (WIDGET_KEY) {
        return this.state.currentLayout.length ? this.state.currentLayout.filter(el => el.i === WIDGET_KEY)[0] : null;
    }

    _getPieChartHiddenState() {
        const widgetState = this._getWidgetCurrentState(WIDGET_KEYS.BULLETSPIE);

        return widgetState && this.state.currentLayoutBreakpoint ? this._elabPiesHiddenState(widgetState) : false;
    }

    _elabPiesHiddenState(widgetState) {
        const bulletsDataColumns = this.props.bulletsPieChartData.data.length, confKey = this.state.currentLayoutBreakpoint;
        const maxCol = confKey === LAYOUT_BREAKPOINTS_KEYS.md || confKey === LAYOUT_BREAKPOINTS_KEYS.lg ? BULLETS_VISIBLE_LAYOUT_CONF[confKey][widgetState.w] : BULLETS_VISIBLE_LAYOUT_CONF[confKey];

        return bulletsDataColumns >= maxCol ? true : false;
    }

    /* RESPONSIVE GRID EVENTS HANDLERS */

    _handleOnLayoutChange (currentLayout) {
        this.setState({
            currentLayout: currentLayout
        });
    }

    _hanleOnBreakpointChange (newBreakpoint, newCols) {
        this.setState({
            currentLayoutBreakpoint: newBreakpoint
        });
    };

    /* COMPONENT LIFECYCLE HOOKS */

    render() {
        const { archLayersData, bulletsPieChartData,  chordDiagramData } = this.props;
        
        return (
            <div className="gridLayoutContainer">
                <ResponsiveGridLayout 
                    className="layout"
                    layouts={GRID_LAYOUT_CONFIG.LAYOUTS}
                    breakpoints={GRID_LAYOUT_CONFIG.BREAKPOINTS}
                    cols={GRID_LAYOUT_CONFIG.COLS}
                    margin={GRID_LAYOUT_CONFIG.MARGIN}
                    onBreakpointChange={this._hanleOnBreakpointChange.bind(this)}
                    onLayoutChange={this._handleOnLayoutChange.bind(this)}>

                    <div className="widget" key={WIDGET_KEYS.ARCHMAP}>
                        <ArchMap data={archLayersData.data} conf={archLayersData.conf}/>
                    </div>

                    <div className="widget" key={WIDGET_KEYS.BULLETSPIE}>
                        <BulletsPieChart data={bulletsPieChartData.data} conf={bulletsPieChartData.conf} piesDisabled={this._getPieChartHiddenState()}/>
                    </div>

                    <div className="widget" key={WIDGET_KEYS.CHORDDIAGRAM}>
                        <ChordDiagram data={chordDiagramData.data} conf={chordDiagramData.conf}/>
                    </div>
                </ResponsiveGridLayout>
            </div>
        )
    }
}

export default MyGridLayout;