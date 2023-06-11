import "./App.css";
import Heading from "./components/Heading";
import FormFilters from "./components/FormFilters";
import { useState } from "react";
import CustomTable from "./components/TableGrid";
import { Grid } from "@mui/material";
import FooterV2 from "./components/Footer";

function App() {

	const initialFilter = {
		searchCategory: undefined,
		searchCTC: undefined,
		searchMonth: undefined,
		searchName: undefined
	}

	const [filters, setFilters] = useState(initialFilter);

	const clearFilters = () => {
		setFilters(initialFilter)
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
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12} width={"100%"}>
					<CustomTable filters={filters} />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12} width={"100%"} >
					<FooterV2 />
				</Grid>

			</Grid>
		</div>
	);
}

export default App;
