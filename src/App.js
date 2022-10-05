import { useState } from "react";
import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillInstagram,
	AiFillGoogleCircle,
	AiFillTwitterCircle,
} from "react-icons/ai";
import "./App.css";
import Data from "./DATA.json";

function App() {
	const [searchName, setSearchName] = useState("");
	const [searchCategory, setSearchCategory] = useState("");
	const [searchCTC, setSearchCTC] = useState(0);

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
									name="category"
									className="form-select"
									onChange={(e) => {
										setSearchCategory(e.target.value);
									}}
								>
									<option selected>Filter by Category</option>
									<option value="good">Good</option>
									<option value="dream">Dream</option>
									<option value="superdream">Super Dream</option>
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
									<option selected>Filter by CTC</option>
									<option value="10">More than 10</option>
									<option value="20">More than 20</option>
									<option value="30">More than 30</option>
									<option value="40">More than 40</option>
								</select>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<table className="table table-striped table-hover table-secondary table-bordered m-0 min-vh-100">
				<thead className="table-dark">
					<tr>
						<th scope="col">S.No.</th>
						<th scope="col">Month</th>
						<th scope="col">Company Name</th>
						<th scope="col">CTC (in LPA)</th>
						<th scope="col">Exam Date</th>
						<th scope="col">Category</th>
					</tr>
				</thead>
				<tbody className="table-group-divider">
					{Data.filter((value) => {
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
							if (searchCTC === "10") {
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
// Add Graphs and Charts
// Add License, Social Media, Contact Page
