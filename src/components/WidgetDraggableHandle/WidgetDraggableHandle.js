import React, { Component } from 'react';

import RearderIcon from '@material-ui/icons/Reorder';
import { GRID_HANDLER_CLASS } from '../../constants/constants';


import './WidgetDraggableHandle.css';

class WidgetDraggableHandle extends Component {

    render() {
        return (
            <div className={GRID_HANDLER_CLASS}>
                <RearderIcon/>
            </div>
        )
    }
};

export default WidgetDraggableHandle;