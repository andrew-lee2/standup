import React from 'react';
import DataTable from "react-data-table-component";

const columns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Start Date',
    selector: 'start_date',
  },
  {
    name: 'Start Time',
    selector: 'start_time',
  },
  {
    name: 'End Date',
    selector: 'end_date',
  },
  {
    name: 'End Time',
    selector: 'end_time',
  },
  {
    name: '# of Attendees',
    selector: 'num_attendees',
  },
];

function RawDataTable(props) {
  return(
    <DataTable
      title="Full Stand-up Data"
      columns={columns}
      data={props.data}
      fixedHeader
      pagination
    />
  );
};

export default  RawDataTable;
