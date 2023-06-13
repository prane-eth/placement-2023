import { useState } from "react";
import { Grid } from "@mui/material";

import Heading from "./components/Heading";
import FormFilters from "./components/FormFilters";
import SortButtons from './components/SortButtons'
import CustomTable from "./components/TableGrid";
import FooterV2 from "./components/Footer";

import "./App.css";


function App() {

	const initialFilter = {
		searchCategory: undefined,
		searchCTC: undefined,
		searchMonth: undefined,
		searchName: undefined,
		sortBy: null,
	}

	const [filters, setFilters] = useState(initialFilter);
	const [sortBy, setSortBy] = useState([]);

	const clearFilters = () => {
		setFilters(initialFilter)
		setSortBy([])
	}

	return (
		<div className="container">
			<Grid container direction="column"
				justifyContent="center"
				alignItems="center"
			>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12} width={"100%"}>
					<Heading />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12} width={"100%"}>
					<FormFilters filters={filters} setFilters={setFilters} clearFilters={clearFilters} />
					<SortButtons sortBy={sortBy} setSortBy={setSortBy} />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12} width={"100%"}>
					<CustomTable filters={filters} setFilters={setFilters} sortBy={sortBy} setSortBy={setSortBy} />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12} width={"100%"} >
					<FooterV2 />
				</Grid>

			</Grid>
		</div>
	);
}

export default App;
