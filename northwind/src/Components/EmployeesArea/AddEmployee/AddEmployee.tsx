import { useForm } from "react-hook-form";
import "./AddEmployee.css";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../../../Utils/UseTitle";
import { employeeService } from "../../../Services/EmployeeService";
import { notify } from "../../../Utils/Notify";

export function AddEmployee(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<EmployeeModel>();
    const navigator = useNavigate();
    useTitle('Add Employee');

    async function send(employee: EmployeeModel): Promise<void> {
        employee.image = (employee.image as unknown as FileList)[0];
        try {
            await employeeService.addEmployee(employee);
        } catch (error) {
            notify.error(error);
            return;
        }
        navigator('/employees');
    }

    return (
        <div className="AddEmployee">
            <form onSubmit={handleSubmit(send)}>
                <label>First Name: </label>
                <input type="text" {...register("firstName")} />

                <label>Last Name: </label>
                <input type="text" {...register("lastName")} />

                <label>Country: </label>
                <input type="text" {...register("country")} />

                <label>City: </label>
                <input type="text" {...register("city")} />

                <label>Birth Date: </label>
                <input type="text" {...register("birthDate")} />

                <label>Image: </label>
                <input type="file" {...register("image")} />

                <button>Add</button>
            </form>
        </div>
    );
}
