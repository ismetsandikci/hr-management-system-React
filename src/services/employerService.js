import axios from "axios";

let baseUrl = "http://localhost:8080/api/employers";

export default class EmployerService{
    
    getEmployers(){
        return axios.get(baseUrl + "/getall");
    }

    getByEmail(emailAddress){
        return axios.get(baseUrl + "/getByEmail?emailAddress="+emailAddress)
    }

    getById(id){
        return axios.get(baseUrl + "/getById?id="+id)
    }
}