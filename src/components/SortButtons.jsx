import { Button } from '@mui/material';

const sortList = [
  {
    name: "CTC (Descending)",
    value: "ctc_desc"
  },
  {
    name: "Company name (Ascending)",
    value: "companyName_asc"
  },
]

const applySorting = (sortValue, setSortBy) => {
  setSortBy((oldValue) => {
    if (oldValue?.includes(sortValue)) {
      return oldValue?.filter((item) => item !== sortValue)
    } else {
      return [...oldValue, sortValue]
    }
  })
}

const SortButtons = ({ sortBy, setSortBy }) => (
  <div style={{ paddingBottom: "20px" }}>
    <label>Sort by:</label>
    {sortList.map((sortItem, index) => (
      <Button
        style={{ marginLeft: "1rem" }}
        key={index}
        variant={sortBy?.includes(sortItem?.value) ? "contained" : "outlined"}
        onClick={() => applySorting(sortItem?.value, setSortBy)}
      >
        {sortItem?.name}
      </Button>
    ))}
  </div>
);

export default SortButtons;