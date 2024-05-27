import React from 'react';
import DataTable from 'react-data-table-component';
// import Checkbox from '@material-ui/core/Checkbox';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';
// const sortIcon = <ArrowDownward />;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const sortIcon = <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
const Checkbox = <FontAwesomeIcon icon="fa-regular fa-square-check" />

const selectProps = { indeterminate: isIndeterminate => isIndeterminate };

function DataTableBase(props) {
	return (
		<DataTable
			pagination
			selectableRowsComponent={Checkbox}
			selectableRowsComponentProps={selectProps}
			sortIcon={sortIcon}
			dense
			{...props}
		/>
	);
}

export default DataTableBase;