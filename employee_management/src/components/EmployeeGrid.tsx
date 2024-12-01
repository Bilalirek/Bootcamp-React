import { useState } from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeGrid({ allEmployees, setAllEmployees, search, setShowForm }: any) {
    const [filterType, setFilterType] = useState("");

    const removeEmployee = (id: number) => {
        const updatedEmployees = allEmployees.filter((employee: any) => employee.id !== id);
        setAllEmployees(updatedEmployees);
    };

    let filteredEmployees = allEmployees;
    if (search) {
        const searchedEmployees = allEmployees.filter((employee: any) => {
            return employee.name.toLowerCase().includes(search.trim().toLowerCase());
        });
        filteredEmployees = searchedEmployees;
    } else if (filterType == "name") {
        const sorted = [...allEmployees].sort((a, b) => a.name.localeCompare(b.name));
        filteredEmployees = sorted;
    } else if (filterType == "year") {
        const sorted = [...allEmployees].sort((a, b) => a.hiringYear - b.hiringYear);
        filteredEmployees = sorted;
    };

    return (
        <div className="container">
            <div className="mb-3 d-flex justify-content-center">
                <button className="btn btn-primary me-4"
                    onClick={() => setFilterType("name")}>
                    Sort by Name
                </button>
                <button className="btn btn-secondary me-4"
                    onClick={() => setFilterType("year")}>
                    Sort by Seniority
                </button>
                <button className="btn btn-success"
                    onClick={() => setShowForm(true)}>
                    Add Employee
                </button>
            </div>
            <div className="row">
                {filteredEmployees.length === 0 ? (
                    <div className="col-12 text-center mt-3">
                        <h4 className="text-danger"> No employees found</h4>
                    </div>
                ) : (
                    filteredEmployees.map((employee: any) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-wrap justify-content-around mb-3" key={employee.id}>
                            <EmployeeCard employee={employee} onRemove={removeEmployee} />
                        </div>
                    ))
                )}
            </div>
        </div>


    );
}

export default EmployeeGrid;
