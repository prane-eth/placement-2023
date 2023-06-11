import Grid from '@mui/material/Grid'
import MonthDropdown from './MonthDropdown'
import CTCDropdown from './CTCDropdown'
import CategoryDropdown from './CategoryDropdown'
import { Button } from '@mui/material'


const NameInput = ({ setFilters, name, ...props }) => {
    return (<input
        className="form-control"
        placeholder="Filter by Name"
        value={name ?? ""}
        onChange={(e) => {
            setFilters((oldValue) => ({ ...oldValue, searchName: e.target.value }))
        }}
    />)
}

const FormFilters = ({ filters, setFilters, clearFilters, ...props }) => {
    return (

        <nav className="navbar navbar-expand-lg" style={{ paddingTop: "0", paddingBottom: "20px" }}>
            <div className="container-fluid">
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
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={12} sm={12} md={6} lg={2.5} xl={2.5}><NameInput setFilters={setFilters} name={filters.searchName} /></Grid>
                        <Grid item xs={12} sm={12} md={6} lg={2.5} xl={2.5}><MonthDropdown setFilters={setFilters} month={filters.searchMonth} /></Grid>
                        <Grid item xs={12} sm={12} md={6} lg={2.5} xl={2.5}><CTCDropdown setFilters={setFilters} ctc={filters.searchCTC} /></Grid>
                        <Grid item xs={12} sm={12} md={6} lg={2.5} xl={2.5}><CategoryDropdown setFilters={setFilters} category={filters.searchCategory} /></Grid>
                        <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
                            <Button variant='contained' onClick={clearFilters} fullWidth>Clear</Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </nav>
    )
}

export default FormFilters;