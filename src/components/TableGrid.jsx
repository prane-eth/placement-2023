import { useEffect, useState } from 'react';
import Data from '../Placements.json';

const checkCTC = (ctc, value) => {
	const ctcValue = parseCTC(ctc);
	// if value is < 0, filter values less than that number
	if (value < 0) {  // less than 10
		if (ctcValue < 1) {  // if CTC value is empty, exclude data
			return 0;
		}
		return ctcValue < Math.abs(value);
	} else {
		return ctcValue > value;
	}
}

const getCTCFromCategory = (category) => {
	// if no ctc in data, assign random number using category
	// data will be at last part but sorted
	switch (category?.trim().toLowerCase()) {
		case 'super dream':
			return 0.3;
		case 'dream':
			return 0.2;
		case 'regular':
			return 0.1;
		default:
			return 0;
	}
}

const parseCTC = (ctc, category = '') => {
	if (typeof ctc === 'string') {
		const regex = /[-/,]/g;
		if (regex.test(ctc)) {
			if (ctc.length === 1)  // if ctc is just '-' or '/'
				return getCTCFromCategory(category);
			const ctcArray = ctc.split(regex).map(e => Number(e.trim()));
			return Math.max(...ctcArray);
		} else if (ctc.includes('+')) {
			if (ctc.length === 1)
				return getCTCFromCategory(category);
			const ctcArray = ctc.split('+').map(e => Number(e.trim()));
			return ctcArray.reduce((a, b) => a + b, 0);
		}
	}
	if (!ctc) {
		return getCTCFromCategory(category);
	}
	return Number(ctc);
};

const sortData = (tempData, sortBy) => {
	if (sortBy?.length > 0) {
		tempData = [...tempData].sort((a, b) => {
			for (const sort of sortBy) {
				const [key, order] = sort.split('_');
				let aValue, bValue;
				if (key === 'ctc') {
					aValue = parseCTC(a[key], a.category);
					bValue = parseCTC(b[key], b.category);
				} else {
					aValue = a[key].trim().toLowerCase();
					bValue = b[key].trim().toLowerCase();
				}
				if (aValue !== bValue) {
					const result = order === 'asc' ? (aValue < bValue ? -1 : 1) : (aValue > bValue ? -1 : 1);
					return result;
				}
			}
			return 0;
		});
	}
	return tempData;
}

const TableGridV2 = ({ filters, setFilters, sortBy, setSortBy }) => {

	const [tableData, setTableData] = useState(Data);
	useEffect(() => {
		let tempData = Data
		if (filters.searchCategory && String(filters.searchCategory).length > 0) {
			tempData = tempData.filter(e => String(e.category).toLowerCase() === String(filters.searchCategory).toLowerCase());
		}

		if (filters.searchMonth && String(filters.searchMonth).length > 0) {
			tempData = tempData.filter(e => String(e.month).toLowerCase() === String(filters.searchMonth).toLowerCase());
		}

		if (filters.searchCTC && String(filters.searchCTC).length > 0) {
			tempData = tempData.filter(e => {
				return checkCTC(e.ctc, filters.searchCTC)
			})
		}

		if (filters.searchName && String(filters.searchName).length > 0) {
			tempData = tempData.filter(e => String(e.companyName).toLowerCase().includes(String(filters.searchName).toLowerCase()));
		}

		// if all values of filters are empty, reset data
		if (Object.values(filters).every(e => !e)) {
			tempData = Data;
		}

		setTableData(tempData);

		// when filters are changed, reset sorting
		if (sortBy?.length > 0) {
			setSortBy([...sortBy]);
		}

	}, [filters])

	useEffect(() => {
		if (sortBy?.length === 0) {
			// undo sorting by resetting data and applying filters
			setFilters({ ...filters });
		} else {
			let tempData = [...tableData];
			tempData = sortData(tempData, sortBy);
			setTableData(tempData);
		}
	}, [sortBy])

	return (
		<>
			<div className='table-container'>
				<table className="table table-striped table-hover table-secondary table-bordered m-0" style={{ width: '100%', tableLayout: 'auto' }}>
					<thead className="table-dark" style={{ position: 'sticky', top: 0, width: '100%' }}>
						<tr style={{ width: '100%' }}>
							<th scope="col" style={{ width: '5%' }}>SNo</th>
							<th scope="col" style={{ width: '10%' }}>Month</th>
							<th scope="col" style={{ width: '50%' }}>Company Name</th>
							<th scope="col" style={{ width: '15%' }}>CTC (in LPA)</th>
							<th scope="col" style={{ width: '15%' }}>Category</th>
						</tr>
					</thead>
					<tbody className="table-group-divider">
						{tableData
							.map((value, index) => (
								<tr
									key={index}
									className={
										"" +
										(value.category === "Dream" ? "table-success " : "") +
										(value.category === "Regular" ? "table-warning " : "") +
										(value.category === "" ? "table-danger " : "")
									}
								>
									<th>{index + 1}</th>
									<td>{value.month}</td>
									<td>{value.companyName}</td>
									<td>{value.ctc}</td>
									<td>{value.category}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
			<div className="text-end">
				<small className="text-muted">
					Showing {tableData.length} records
				</small>
			</div>
		</>
	)
}

export default TableGridV2;