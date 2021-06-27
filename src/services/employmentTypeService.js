import axios from "axios";

let baseUrl = "http://localhost:8080/api/employmenttypes";

export default class EmploymentTypeService{
    
    getall(){
        return axios.get(baseUrl + "/getall");
    }

    getById(id){
        return axios.get(baseUrl + "/getById?id="+id)
    }
}