import axios, { AxiosRequestConfig } from "axios";
import { EmployeeModel } from "../Models/EmployeeModel";
import { appConfig } from "../Utils/AppConfig";
import { employeesAction, store } from "../Storage/store";
import { notify } from "../Utils/Notify";

class EmployeeService {
    async getAllEmployees(): Promise<EmployeeModel[]> {
        if (store.getState().employees) {
            return store.getState().employees;
        }
        const response = await axios.get<EmployeeModel[]>(appConfig.employeesUrl);
        const employees = response.data;
        store.dispatch(employeesAction.initEmployees(employees))
        return employees;
    }

    async getEmployee(id: number): Promise<EmployeeModel> {
        let employee = store.getState().employees?.find(p => p.id === id);
        if (employee) {
            return employee;
        }
        const response = await axios.get<EmployeeModel>(appConfig.employeesUrl + id);
        employee = response.data;
        return employee;
    }

    async addEmployee(employee: EmployeeModel): Promise<void> {
        const options: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        };
        const response = await axios.post<EmployeeModel>(appConfig.employeesUrl, employee, options);
        const dbEmployee = response.data;
        store.dispatch(employeesAction.addEmployee(dbEmployee));
        notify.success("Employee has been added");
        console.log(dbEmployee);
    }

    async deleteEmployee(id: number): Promise<void> {
        await axios.delete(appConfig.employeesUrl + id);
        store.dispatch(employeesAction.deleteEmployee(id));
        console.log(`employee with id: ${id} deleted`);
    }
}

export const employeeService = new EmployeeService();
