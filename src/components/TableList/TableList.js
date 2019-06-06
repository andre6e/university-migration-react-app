import React, { Component } from 'react';
import { RowDetailState } from '@devexpress/dx-react-grid';

import {
  // State or Local Processing Plugins
  PagingState,
  IntegratedPaging,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableRowDetail,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';

import './TableList.css';

import { EMPTY_TABLE_LIST_MESSAGES, EMPTY_TABLE_RESULT_COLSPAN_DEFAULT } from '../../constants/constants';

// Necessari per mantenere lo stato (al cambiare del grid layout breakpoint il costruttore viene richiamato e ri-setterebbe a 0)
let REF_EXPANDED_ROW_IDS = [],
    REF_CURRENT_PAGE = 0;

const RowDetail = ({ row }) => {
    return (
      <div>
        { !row.provincesDetail.length ? (
            <div> Nessun dettaglio disponibile. </div>
          ) : (
            <div>
              Dettagli emigrazione province:
          
              <ul>
                {row.provincesDetail.map( (el, i) => {
                  return <li key={i}> Da <strong> {el.from} </strong> verso <strong> {el.to} </strong> -> <strong> {el.tot} </strong> </li>
                })}
              </ul>
            </div>
        )}
      </div>
    )
};

const noDataRowComponent = () => (
  <tr className="noDataRowComponent">
    <td colSpan={EMPTY_TABLE_RESULT_COLSPAN_DEFAULT}> {EMPTY_TABLE_LIST_MESSAGES} </td>
  </tr>
)

class TableList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      expandedRowIds: REF_EXPANDED_ROW_IDS,
      currentPage: REF_CURRENT_PAGE
    };
  }

  _handleRowExpanded(expandedRowIds) {
    REF_EXPANDED_ROW_IDS = expandedRowIds;

    this.setState({
      expandedRowIds: expandedRowIds
    });
  }

  _handleCurrentPageChanged(currentPage) {
    REF_CURRENT_PAGE = currentPage;

    this.setState({
      currentPage: currentPage
    })
  }

  _areOldPropsDifferentFromCurrent(oldProps, currProps) {
    if (oldProps.data.rows.length !== currProps.data.rows.length) {
      return true;
    }

    const oldRows = oldProps.data.rows.map(el => el.from + el.to + el.tot);
    const newRows = this.props.data.rows.map(el => el.from + el.to + el.tot);
    const intersection = oldRows.filter(x => newRows.includes(x));

    if (intersection.length !== this.props.data.rows.length || intersection.length !== oldProps.data.rows.length) {
      return true;
    }

    return false;
  }
 
  componentDidUpdate(oldProps) {
    if (this._areOldPropsDifferentFromCurrent(oldProps, this.props)) {
      REF_EXPANDED_ROW_IDS = [];
      REF_CURRENT_PAGE = 0;
    }
  }
  
  render() {
    const { data } = this.props;
    const { expandedRowIds, currentPage } = this.state;

    return (
      <div className="tableListComponentContainer">
          <Grid
            rows={data.rows}
            columns={data.columns}
          >
          <RowDetailState
            expandedRowIds={expandedRowIds}
            onExpandedRowIdsChange={this._handleRowExpanded.bind(this)}
          />
          <PagingState
              currentPage={currentPage}
              pageSize={7}
              onCurrentPageChange={this._handleCurrentPageChanged.bind(this)}
            />
            <IntegratedPaging />
            <Table noDataRowComponent={noDataRowComponent}/>
            <TableHeaderRow /> 
            <TableRowDetail
              contentComponent={RowDetail}
            />
            <PagingPanel/>
          </Grid>
      </div>
    );
  }
}

export default TableList;
