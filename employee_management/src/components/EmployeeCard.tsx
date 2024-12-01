interface Employee {
    id: number;
    name: string;
    role: string;
    phone: string;
    hiringYear: number;
    picture: string;
}

interface EmployeeProps {
    employee: Employee;
    onRemove: (id: number) => void;
}

function EmployeeCard({ employee, onRemove }: EmployeeProps) {
    return (
        <div className="card p-3 mt-4 " style={{ width: "18rem" }}>
            <img src={employee.picture} className="card-img-top" alt="employee" />
            <div className="card-body text-center">
                <h5 className="card-title text-primary">{employee.name}</h5>
                <p className="card-text"><strong>Role:</strong> {employee.role}</p>
                <p className="card-text"><strong>Phone number:</strong> {employee.phone}</p>
                <p className="card-text"><strong>ID:</strong> {employee.id}</p>
                <p className="card-text"><strong>Hiring Year:</strong> {employee.hiringYear}</p>
                <button
                    type="button"
                    className="btn btn-danger mt-2"
                    onClick={() => onRemove(employee.id)}
                >
                    Remove
                </button>
            </div>
        </div>


    );
}

export default EmployeeCard;
