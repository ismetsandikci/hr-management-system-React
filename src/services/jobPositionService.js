import axios from "axios";

let baseUrl = "http://localhost:8080/api/jobpositions";

export default class JobPositionService{

    getJobPositions(){
        return axios.get(baseUrl + "/getall");
    }
    
    getByTitleName(titleName){
        return axios.get(baseUrl + "/getByTitleName?titleName="+titleName)
    }
}