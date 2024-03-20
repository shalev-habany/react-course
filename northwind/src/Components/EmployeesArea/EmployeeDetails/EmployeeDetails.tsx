import { useEffect, useState } from "react";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import "./EmployeeDetails.css";
import { employeeService } from "../../../Services/EmployeeService";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { notify } from "../../../Utils/Notify";
import { Spinner } from "../../SharedArea/Spinner/Spinner";

export function EmployeeDetails(): JSX.Element {

    const [employee, setEmployee] = useState<EmployeeModel>({} as EmployeeModel);
    const params = useParams();
    const id = +params.id;
    const navigator = useNavigate();


    async function deleteMe() {
        const sure = window.confirm("Are you sure?");
        if (!sure) return;
        try {
            await employeeService.deleteEmployee(id);
        } catch (error) {
            notify.error(error);
            return;
        }
        notify.success("deleted");
        navigator('/employees');
    }

    useEffect(() => {
        employeeService.getEmployee(id)
            .then(employee => setEmployee(employee))
            .catch((error) => {
                notify.error(error);
                navigator('/employees');
            })
    }, []);

    return (
        <div className="EmployeeDetails">
            {!employee && <Spinner />}

            <h3>First Name: {employee?.firstName} </h3>
            <h3>Last Name: {employee?.lastName} </h3>
            <h3>Country: {employee?.country} </h3>
            <h3>City: {employee?.city} </h3>
            <h3>Birth Date: {employee?.birthDate} </h3>
            <img src={employee?.imageUrl} />
            <br />

            <NavLink to="/employees">Back </NavLink>

            <span> | </span>

            <NavLink to={"/employees/edit/" + employee?.id}>Edit</NavLink>

            <span> | </span>

            <NavLink to="#" onClick={deleteMe}>Delete</NavLink>
        </div>
    );
}
