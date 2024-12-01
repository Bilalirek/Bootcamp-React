import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeGrid from "./components/EmployeeGrid";
import EmployeeSearch from "./components/EmployeeSearch";
import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import { employees } from "./components/EmployeesData";

function App() {
  const [allEmployees, setAllEmployees] = useState(employees);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm ? <EmployeeForm
        setShowForm={setShowForm}
        allEmployees={allEmployees}
        setAllEmployees={setAllEmployees} /> :
        <div>
          <EmployeeSearch
            search={search}
            setSearch={setSearch}
          />
          <EmployeeGrid
            setShowForm={setShowForm}
            allEmployees={allEmployees}
            setAllEmployees={setAllEmployees}
            search={search} />
        </div>}
    </>
  )
}

export default App
