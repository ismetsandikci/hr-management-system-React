import axios from "axios";

let baseUrl = "http://localhost:8080/api/employees";

export default class EmployeeService{
    
    getEmployees(){
        return axios.get(baseUrl + "/getall");
    }
    
    getByEmail(emailAddress){
        return axios.get(baseUrl + "/getByEmail?emailAddress="+emailAddress)
    }
}