import { useState } from 'react';

function EmployeeForm({ allEmployees, setAllEmployees, setShowForm }: any) {
    const [employeeName, setEmployeeName] = useState('');
    const [employeeRole, setEmployeeRole] = useState('');
    const [employeePhone, setEmployeePhone] = useState('');
    const [employeeHiringYear, setEmployeeHiringYear] = useState('');
    const [employeePictureUrl, setEmployeePictureUrl] = useState('');
    const [err, setErr] = useState("");
    const sorted = allEmployees.sort((a: any, b: any) => b.id - a.id);
    const lastID = sorted[0].id

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (employeeName.trim() === "") {
            setErr("Name is required");
        }
        else if (employeeRole.trim() === "") {
            setErr("Role is required");
        }
        else if (!/^\d+$/.test(employeePhone)) {
            setErr("Please enter a valid phone number");
        }
        else if (!/^\d{4}$/.test(employeeHiringYear)) {
            setErr("Please enter a valid hiring year (4 digits)");
        }
        else {
            setAllEmployees([...allEmployees, {
                name: employeeName,
                role: employeeRole,
                phone: employeePhone,
                id: lastID + 1,
                hiringYear: employeeHiringYear,
                picture: employeePictureUrl,
            }]);
            setShowForm(false)
        }

    };

    return (
        <div className="d-flex justify-content-center align-items-center"
            style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
            <form onSubmit={handleSubmit} className="w-50 shadow p-4 bg-white rounded">
                <div className="mb-3">
                    <label className="form-label">Full Name :</label>
                    <input type="text" className="form-control"
                        placeholder="Enter employee name"
                        value={employeeName}
                        onChange={(e) => setEmployeeName(e.target.value)}
                        id='name' />
                </div>

                <div className="mb-3">
                    <label className="form-label">Role :</label>
                    <input type="text" className="form-control"
                        placeholder="Enter employee role"
                        value={employeeRole}
                        onChange={(e) => setEmployeeRole(e.target.value)}
                        id='role' />
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone Number :</label>
                    <input type="tel" className="form-control"
                        placeholder="Enter phone number"
                        value={employeePhone}
                        onChange={(e) => setEmployeePhone(e.target.value)}
                        id='phone' />
                </div>
                <div className="mb-3">
                    <label className="form-label">Hiring Year :</label>
                    <input type="number" className="form-control"
                        placeholder="Enter hiring year"
                        value={employeeHiringYear}
                        onChange={(e) => setEmployeeHiringYear(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Picture URL :</label>
                    <input type="url" className="form-control"
                        placeholder="Enter picture URL"
                        value={employeePictureUrl}
                        onChange={(e) => setEmployeePictureUrl(e.target.value)}
                        id='image'
                        required />
                </div>
                {err && <p style={{ color: "red" }}>{err}</p>}

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default EmployeeForm;
