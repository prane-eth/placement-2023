export const monthList = [

    {
        key: 7,
        name: "July",
        value: "July"
    },
    {
        key: 8,
        name: "August",
        value: "August"
    },
    {
        key: 9,
        name: "September",
        value: "September"
    },
    {
        key: 10,
        name: "October",
        value: "October"
    },
    {
        key: 11,
        name: "November",
        value: "November"
    },
    {
        key: 12,
        name: "December",
        value: "December"
    },
    {
        key: 1,
        name: "January",
        value: "January"
    },
    {
        key: 2,
        name: "February",
        value: "February"
    },
    {
        key: 3,
        name: "March",
        value: "March"
    },
    {
        key: 4,
        name: "April",
        value: "April"
    },
    {
        key: 5,
        name: "May",
        value: "May"
    },
    {
        key: 6,
        name: "June",
        value: "June"
    },
]

const MonthDropdown = ({ setFilters, month, ...props }) => {
    return (
        <select
            name="month"
            className="form-select"
            value={!month ? "" : month}
            onChange={(e) => {
                setFilters((oldValue) => ({ ...oldValue, searchMonth: e.target.value }))
            }}
        >
            <option value={""}>Filter by Month</option>
            {
                monthList.map(month => {
                    return (<option value={month.value} key={month.key}>
                        {month.name}
                    </option>)
                })
            }
        </select>
    )
}

export default MonthDropdown;