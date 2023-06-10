import { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import "./App.css";
import Data from "./Placements.json";

function App() {
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchCTC, setSearchCTC] = useState("");
  const [searchMonth, setSearchMonth] = useState("");

  
  const convertCTC = (ctc) => {
    if (typeof ctc === "string") {

      // To Handle CTC values in the format "10+2" or "10/7"
      const ctcParts = ctc.split("+");
      if (ctcParts.length > 1) {
        return Number(ctcParts[0]) + Number(ctcParts[1]);
      }
      const ctcDivided = ctc.split("/");
      if (ctcDivided.length > 1) {
        return Number(ctcDivided[0]) / Number(ctcDivided[1]);
      }
    }
    // To Handle regular numeric CTC values
    return Number(ctc);
  };

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Placement Batch 2023
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
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
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
                  <option value="Slot 1">Slot 1</option>
                  <option value="Super Dream">Super Dream</option>
                  <option value="Regular">Regular</option>
                  <option value="Dream">Dream</option>
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
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {Data.filter((value) => {
            if (searchCategory === "Slot 1") {
              return value.category === "Slot 1";
            } else if (searchCategory === "Super Dream") {
              return value.category === "Super Dream";
            } else if (searchCategory === "Dream") {
              return value.category === "Dream";
            } else if (searchCategory === "Regular") {
              return value.category === "Regular";
            } else {
              return value;
            }
          })
            .filter((value) => {
              if (searchMonth) {
                return value.month === searchMonth;
              } else {
                return value;
              }
            })
            .filter((value) => {
              if (searchCTC) {
                return convertCTC(value.ctc) >= Number(searchCTC);
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
                  ((value.category === "Super Dream" || value.category === "Slot 1")
                    ? "table-primary "
                    : "") +
                  (value.category === "Dream" ? "table-success " : "") +
                  (value.category === "Regular" ? "table-warning " : "") +
                  (value.category === "" ? "table-danger " : "")
                }
              >
                <th scope="row">{index + 1}</th>
                <td>{value.month}</td>
                <td>{value.companyName}</td>
                <td>{value.ctc}</td>
                <td>{value.category}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <footer className="text-center text-lg-start bg-dark text-light">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with me on social networks:</span>
          </div>
          <div>
            <a href="/" className="me-4 text-reset">
              <AiFillGithub />
            </a>
            <a href="/" className="me-4 text-reset">
              <AiFillLinkedin />
            </a>
            <a href="/" className="me-4 text-reset">
              <AiFillInstagram />
            </a>
            <a href="/" className="me-4 text-reset">
              <AiFillGoogleCircle />
            </a>
            <a href="/" className="me-4 text-reset">
              <AiFillTwitterCircle />
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
