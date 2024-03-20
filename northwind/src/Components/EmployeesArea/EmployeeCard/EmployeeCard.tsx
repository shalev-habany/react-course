import { EmployeeModel } from "../../../Models/EmployeeModel";
import "./EmployeeCard.css";


type EmployeesCardProps = {
    employee: EmployeeModel
};

export function EmployeeCard(props: EmployeesCardProps): JSX.Element {
    return (
        <div className="EmployeeCard">
            <div>
                <img src={props.employee.imageUrl} />
                <br></br>
                <span>{props.employee.firstName} </span>
                <span>{props.employee.lastName}</span>
            </div>
        </div>
    );
}
