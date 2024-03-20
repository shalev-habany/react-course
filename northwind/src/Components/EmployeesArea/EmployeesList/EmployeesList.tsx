import { useEffect, useState } from "react";
import "./EmployeesList.css";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import { useTitle } from "../../../Utils/UseTitle";
import { employeeService } from "../../../Services/EmployeeService";
import { notify } from "../../../Utils/Notify";
import { useNavigate } from "react-router-dom";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { NavLink } from "react-router-dom";


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
            {!employees.length && <Spinner />}

            <table>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Birth Date</th>
                    <th>Image</th>
                </thead>
                <tbody>
                    {
                        employees.map(e => <tr>
                            <td>{e.id}</td>
                            <td>{e.firstName}</td>
                            <td>{e.lastName}</td>
                            <td>{e.country}</td>
                            <td>{e.city}</td>
                            <td>{e.birthDate}</td>
                            <NavLink to={`/employees/details/${e.id}`}>
                                <img src={e.imageUrl} />
                            </NavLink>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}
