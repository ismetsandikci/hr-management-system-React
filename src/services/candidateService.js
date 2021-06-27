import axios from "axios";

let baseUrl = "http://localhost:8080/api/candidates";

export default class CandidateService{
    
    getCandidates(){
        return axios.get(baseUrl + "/getall");
    }

    getByNationalityId(nationalityId){
        return axios.get(baseUrl + "/getByNationalityId?nationalityId="+nationalityId)
    }

    getByEmail(emailAddress){
        return axios.get(baseUrl + "/getByEmail?emailAddress="+emailAddress)
    }

    getById(id){
        return axios.get(baseUrl + "/getById?id="+id)
    }
}