export const CTCList = [
    {
        key: 1,
        name: "Less than 10",
        value: "0"
    },
    {
        key: 2,
        name: "More than 10",
        value: "10"
    },
    {
        key: 3,
        name: "More than 20",
        value: "20"
    },
    {
        key: 4,
        name: "More than 30",
        value: "30"
    },
    {
        key: 5,
        name: "More than 40",
        value: "40"
    }
]

const CTCDropdown = ({ setFilters, ctc, ...props }) => {
    return (
        <select
            name="ctc"
            className="form-select"
            defaultValue={""}
            value={!ctc ? "" : ctc}
            onChange={(e) => {
                setFilters((oldValue) => ({ ...oldValue, searchCTC: e.target.value }))
            }}
        >
            <option value={""}>Filter by CTC</option>
            {
                CTCList.map(ctc => {
                    return (<option value={ctc.value} key={ctc.key}>
                        {ctc.name}
                    </option>)
                })
            }
        </select>
    )
}

export default CTCDropdown;