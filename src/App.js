import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillInstagram,
	AiFillGoogleCircle,
	AiFillTwitterCircle,
} from "react-icons/ai";
import "./App.css";
import Data from "./data.json";

function App() {
	return (
		<div className="App">
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						Placement 2023
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
								<a className="nav-link" aria-current="page" href="/">
									Month
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" aria-current="page" href="/">
									Date
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="/"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Category
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="/">
											Super Dream
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/">
											Dream
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/">
											Good
										</a>
									</li>
								</ul>
							</li>
						</ul>
						<form className="d-flex" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Filter with Name"
								aria-label="Search"
							/>
							<button className="btn btn-outline-success" type="submit">
								Filter
							</button>
						</form>
					</div>
				</div>
			</nav>

			<table className="table table-striped table-hover table-secondary table-bordered m-0">
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
					{Data.map((value, index) => (
						<tr key={index}>
							<th scope="row">{index + 1}</th>
							<td>{value.month}</td>
							<td>{value.companyName}</td>
							<td>{value.ctc}</td>
							<td>{value.examDate}</td>
							<td
								className={
									"" +
									(value.category === "Super Dream" ? "table-primary " : "") +
									(value.category === "Dream" ? "table-success " : "") +
									(value.category === "Good" ? "table-warning " : "")
								}
							>
								{value.category}
							</td>
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
