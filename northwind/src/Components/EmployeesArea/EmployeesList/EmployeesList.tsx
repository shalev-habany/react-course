import { useEffect, useState } from "react";
import "./EmployeesList.css";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import { useTitle } from "../../../Utils/UseTitle";
import { employeeService } from "../../../Services/EmployeeService";
import { notify } from "../../../Utils/Notify";
import { useNavigate } from "react-router-dom";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";


export function EmployeesList(): JSX.Element {

    const [employees, setEmployees] = useState<EmployeeModel[]>([]);
    useTitle("Our Employees");
    const navigator = useNavigate();

    useEffect(() => {
        employeeService.getAllEmployees()
            .then((dbEmployees: EmployeeModel[]) => setEmployees(dbEmployees))
            .catch((error) => {
                notify.error(error);
                navigator('/home');
            });
    }, []);

    return (
        <div className="EmployeesList">
            {employees.map(p => <EmployeeCard key={p.id} employee={p} />)}
        </div>
    );
}
