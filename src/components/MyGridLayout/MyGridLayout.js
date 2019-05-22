import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

import ArchMap from '../ArchMap/ArchMap';
import ChordDiagram from '../ChordDiagram/ChordDiagram';
import BulletsPieChart from '../BulletsPieChart/BulletsPieChart';

import { GRID_LAYOUT_CONFIG } from '../../constants/constants';
import './MyGridLayout.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const WIDGET_KEYS = {
    ARCHMAP: "1",
    BARCHART: "2",
    PIECHART: "3"
};

class MyGridLayout extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { archLayersData, bulletsPieChartData,  chordDiagramData } = this.props;
        
        return (
            <div className="gridLayoutContainer">
                <ResponsiveGridLayout 
                    className="layout"
                    layouts={GRID_LAYOUT_CONFIG.LAYOUTS}
                    breakpoints={GRID_LAYOUT_CONFIG.BREAKPOINTS}
                    cols={GRID_LAYOUT_CONFIG.COLS}
                    margin={GRID_LAYOUT_CONFIG.MARGIN}>

                    <div className="widget" key={WIDGET_KEYS.ARCHMAP}>
                        <ArchMap data={archLayersData.data} conf={archLayersData.conf}/>
                    </div>

                    <div className="widget" key={WIDGET_KEYS.BARCHART}>
                        <BulletsPieChart data={bulletsPieChartData.data} conf={bulletsPieChartData.conf}/>
                    </div>

                    <div className="widget" key={WIDGET_KEYS.PIECHART}>
                        <ChordDiagram data={chordDiagramData.data} conf={chordDiagramData.conf}/>
                    </div>
                </ResponsiveGridLayout>
            </div>
        )
    }
}

export default MyGridLayout;