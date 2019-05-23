import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

import ArchMap from '../ArchMap/ArchMap';
import ChordDiagram from '../ChordDiagram/ChordDiagram';
import BulletsPieChart from '../BulletsPieChart/BulletsPieChart';

import { GRID_LAYOUT_CONFIG, LAYOUT_BREAKPOINTS_KEYS, WIDGET_KEYS } from '../../constants/constants';
import './MyGridLayout.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

class MyGridLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLayoutSmall: false,
            layoutStateAfterResize: []
        }
    }

    _hanleOnBreakpointChange (newBreakpoint, newCols) {
        this.setState({
            isLayoutSmall: (newBreakpoint !== LAYOUT_BREAKPOINTS_KEYS.md && newBreakpoint !== LAYOUT_BREAKPOINTS_KEYS.lg) ? true : false,
        });
    };

    _handleOnResizeStop (layout, oldItem, newItem, placeholder, e, element) {
        this.setState({
            layoutStateAfterResize: layout
        });
    }

    _hasWidgetBeenResizedToHalf (WIDGET_KEY) {
        if (this.state.layoutStateAfterResize.length) {
            return this.state.layoutStateAfterResize.find(el => { return el.i === WIDGET_KEY }).w < 7;
        }
    }

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
                    onResizeStop={this._handleOnResizeStop.bind(this)}>

                    <div className="widget" key={WIDGET_KEYS.ARCHMAP}>
                        <ArchMap data={archLayersData.data} conf={archLayersData.conf}/>
                    </div>

                    <div className="widget" key={WIDGET_KEYS.BULLETSPIE}>
                        <BulletsPieChart data={bulletsPieChartData.data} conf={bulletsPieChartData.conf} isLayoutSmall={this.state.isLayoutSmall} hasBeenResizedToSmall={this._hasWidgetBeenResizedToHalf(WIDGET_KEYS.BULLETSPIE)}/>
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