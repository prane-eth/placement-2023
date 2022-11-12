import { useState, useEffect } from "react";
import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillInstagram,
	AiFillGoogleCircle,
	AiFillTwitterCircle,
} from "react-icons/ai";
import "./App.css";

function App() {
	const [searchName, setSearchName] = useState("");
	const [searchCategory, setSearchCategory] = useState("");
	const [searchCTC, setSearchCTC] = useState(0);
	const [searchMonth, setSearchMonth] = useState("");
	const [listData, setListData] = useState([]);

	useEffect(() => {
		const fetchList = async () => {
			let a = await fetch(
				`https://script.google.com/macros/s/AKfycby-ea1WSUD-j4iQoH5NUvf5kkg04r2aEW4W6-nn2e9V9LDFUTaLTcS0L7EkIE7D99u98g/exec`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			let res = await a.json();
			console.log(res);
			setListData(res.data);
		};
		fetchList();
	}, []);

	return (
		<div className="">
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						Placement 23
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<input
									className="form-control"
									placeholder="Filter by Name"
									onChange={(e) => {
										setSearchName(e.target.value);
									}}
								/>
							</li>
							<li className="nav-item mx-4">
								<select
									name="month"
									className="form-select"
									onChange={(e) => {
										setSearchMonth(e.target.value);
									}}
								>
									<option defaultValue>Filter by Month</option>
									<option value="January">January</option>
									<option value="February">February</option>
									<option value="March">March</option>
									<option value="April">April</option>
									<option value="May">May</option>
									<option value="June">June</option>
									<option value="July">July</option>
									<option value="August">August</option>
									<option value="September">September</option>
									<option value="October">October</option>
									<option value="November">November</option>
									<option value="December">December</option>
								</select>
							</li>
							<li className="nav-item">
								<select
									name="ctc"
									className="form-select"
									onChange={(e) => {
										setSearchCTC(e.target.value);
									}}
								>
									<option defaultValue>Filter by CTC</option>
									<option value="0">Less than 10</option>
									<option value="10">More than 10</option>
									<option value="20">More than 20</option>
									<option value="30">More than 30</option>
									<option value="40">More than 40</option>
								</select>
							</li>
							<li className="nav-item mx-4">
								<select
									name="category"
									className="form-select"
									onChange={(e) => {
										setSearchCategory(e.target.value);
									}}
								>
									<option defaultValue>Filter by Category</option>
									<option value="good">Good</option>
									<option value="dream">Dream</option>
									<option value="superdream">Super Dream</option>
								</select>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<table className="table table-striped table-hover table-secondary table-bordered m-0 min-vh-100">
				<thead className="table-dark">
					<tr>
						<th scope="col">SNo</th>
						<th scope="col">Month</th>
						<th scope="col">Company Name</th>
						<th scope="col">CTC (in LPA)</th>
						<th scope="col">Exam Date</th>
						<th scope="col">Category</th>
					</tr>
				</thead>
				<tbody className="table-group-divider">
					{listData
						.filter((value) => {
							if (searchCategory === "superdream") {
								return value.category === "Super Dream";
							} else if (searchCategory === "dream") {
								return value.category === "Dream";
							} else if (searchCategory === "good") {
								return value.category === "Good";
							} else {
								return value;
							}
						})
						.filter((value) => {
							if (searchMonth === "January") {
								return value.month === "January";
							} else if (searchMonth === "February") {
								return value.month === "February";
							} else if (searchMonth === "March") {
								return value.month === "March";
							} else if (searchMonth === "April") {
								return value.month === "April";
							} else if (searchMonth === "May") {
								return value.month === "May";
							} else if (searchMonth === "June") {
								return value.month === "June";
							} else if (searchMonth === "July") {
								return value.month === "July";
							} else if (searchMonth === "August") {
								return value.month === "August";
							} else if (searchMonth === "September") {
								return value.month === "September";
							} else if (searchMonth === "October") {
								return value.month === "October";
							} else if (searchMonth === "November") {
								return value.month === "November";
							} else if (searchMonth === "December") {
								return value.month === "December";
							} else {
								return value;
							}
						})
						.filter((value) => {
							if (searchCTC === "0") {
								return value.ctc <= 10;
							} else if (searchCTC === "10") {
								return value.ctc >= 10;
							} else if (searchCTC === "20") {
								return value.ctc >= 20;
							} else if (searchCTC === "30") {
								return value.ctc >= 30;
							} else if (searchCTC === "40") {
								return value.ctc >= 40;
							} else {
								return value;
							}
						})
						.filter((value) => {
							if (searchName === "") {
								return value;
							} else if (
								value.companyName.toLowerCase().includes(searchName.toLowerCase())
							) {
								return value;
							}
						})
						.map((value, index) => (
							<tr
								key={index}
								className={
									"" +
									(value.category === "Super Dream" ? "table-primary " : "") +
									(value.category === "Dream" ? "table-success " : "") +
									(value.category === "Good" ? "table-warning " : "") +
									(value.category === "" ? "table-danger " : "")
								}
							>
								<th scope="row">{index + 1}</th>
								<td>{value.month}</td>
								<td>{value.companyName}</td>
								<td>{value.ctc}</td>
								<td>{value.examDate}</td>
								<td>{value.category}</td>
							</tr>
						))}
				</tbody>
			</table>

			<footer className="text-center text-lg-start bg-dark text-light">
				<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
					<div className="me-5 d-none d-lg-block">
						<span>Get connected with us on social networks:</span>
					</div>

					<div>
						<a href="/" className="me-4 text-light" target="_blank" rel="noreferrer">
							<AiFillTwitterCircle size={25} />
						</a>
						<a href="/" className="me-4 text-light" target="_blank" rel="noreferrer">
							<AiFillGoogleCircle size={25} />
						</a>
						<a href="/" className="me-4 text-light" target="_blank" rel="noreferrer">
							<AiFillInstagram size={25} />
						</a>
						<a href="/" className="me-4 text-light" target="_blank" rel="noreferrer">
							<AiFillLinkedin size={25} />
						</a>
						<a href="/" className="me-4 text-light" target="_blank" rel="noreferrer">
							<AiFillGithub size={25} />
						</a>
					</div>
				</section>

				<div className="text-center p-4">
					© 2023 Copyright: &nbsp;
					<span className="fw-bold">Kaustubh & Manav</span>
				</div>
			</footer>
		</div>
	);
}

export default App;

// Change Logo
// Fix Table width and Cell Height
// Add License, Social Media, Contact Page
// Add Graphs and Charts
