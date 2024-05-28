import React from 'react';
import DataTable from 'react-data-table-component';
// import Checkbox from '@material-ui/core/Checkbox';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';
// const sortIcon = <ArrowDownward />;
// import Checkbox from "@mui/material/Checkbox";
// import SortIcon from "@mui/icons-material/ArrowDownward";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const sortIcon = <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
const Checkbox = <FontAwesomeIcon icon="fa-regular fa-square-check" />

const selectProps = { indeterminate: isIndeterminate => isIndeterminate };

function DataTableBase(props) {

    // const [darkMode, setDarkMode] = useState(false);

	// var themeMode = 'light'
	// const htmlElement = document.querySelector('html');
    // var themeMode = (htmlElement.getAttribute('data-bs-theme') == 'dark') ? 'dark' : 'light'

	return (
		<DataTable
			pagination
			selectableRowsComponent={Checkbox}
			selectableRowsComponentProps={selectProps}
			sortIcon={sortIcon}
            // sortIcon={<SortIcon />}
			// theme={themeMode}
			dense
			{...props}
		/>
	);
}

export default DataTableBase;