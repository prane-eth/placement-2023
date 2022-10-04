import "./App.css";
import Data from "./data.json";

function App() {
	return (
		<div className="App">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">S.No.</th>
						<th scope="col">Month</th>
						<th scope="col">Company Name</th>
						<th scope="col">CTC (in LPA)</th>
						<th scope="col">Exam Date</th>
						<th scope="col">Category</th>
					</tr>
				</thead>
				<tbody>
					{Data.map((value, index) => (
						<tr key={index}>
							<th scope="row">{index}</th>
							<td>{value.month}</td>
							<td>{value.companyName}</td>
							<td>{value.ctc}</td>
							<td>{value.examDate}</td>
							<td>{value.category}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
