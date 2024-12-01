import searchIcon from "./images/searchIcon.png";

function EmployeeSearch({ search, setSearch }: any) {

    return (
        <div className="input-group m-3">
            <span className="input-group-text">
                <img src={searchIcon} alt="Search" />
            </span>
            <input
                type="text"
                className="form-control"
                style={{ maxWidth: "250px" }}
                value={search}
                placeholder="Search for employee"
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default EmployeeSearch;
