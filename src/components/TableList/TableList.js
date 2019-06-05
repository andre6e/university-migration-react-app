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

import { TABLE_LIST_MESSAGES } from '../../constants/constants';

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

class TableList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    const { data } = this.props;

    return (
      <div className="tableListComponentContainer">
          <Grid
            rows={data.rows}
            columns={data.columns}
          >
          <RowDetailState/>
          <PagingState
              defaultCurrentPage={0}
              pageSize={7}
            />
            <IntegratedPaging />
            <Table messages={TABLE_LIST_MESSAGES}/>
            <TableHeaderRow />
            <TableRowDetail
              contentComponent={RowDetail}
            />
            <PagingPanel />
          </Grid>
      </div>
    );
  }
}
export default TableList;
