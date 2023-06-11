import { useEffect, useState } from 'react';
import Data from '../Placements.json';

const checkCTC = (ctc, value) => {
	// ctc can be string or number
	// string can have values like "10.5-12.5" or "10.7/12.5/16.2" or "10.5+12.5+16.2"
	let ctcArray = []
	if (!isNaN(ctc)) {
		ctcArray.push(Number(ctc))
	} else {
		ctc = String(ctc)
		if (ctc.includes("-")) {
			ctcArray = ctc.split("-").map(e => Number(e.trim()))
		} else if (ctc.includes("+")) {
			ctcArray = ctc.split("+").map(e => Number(e.trim()))
		} else if (ctc.includes("/")) {
			ctcArray = ctc.split("/").map(e => Number(e.trim()))
		}
	}
	return !!ctcArray.find(e => Number(e) <= (Number(value) === 0 ? 10 : (Number(value) * 10)))
}

const TableGridV2 = ({ filters, ...props }) => {

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
				console.log("CTC: ", e.ctc)
				return checkCTC(e.ctc, filters.searchCTC)
			})
		}

		if (filters.searchName && String(filters.searchName).length > 0) {
			tempData = tempData.filter(e => String(e.companyName).toLowerCase().includes(String(filters.searchName).toLowerCase()));
		}

		setTableData(tempData);

	}, [filters])

	return (
		<div className='table-container'>
			<table className="table table-striped table-hover table-secondary table-bordered m-0" style={{ width: '100%', tableLayout: 'fixed' }}>
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
	)
}

export default TableGridV2;