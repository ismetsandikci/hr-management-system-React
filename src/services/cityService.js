import axios from "axios";

let baseUrl = "http://localhost:8080/api/cities";

export default class CityService{
    
    getCities(){
        return axios.get("http://localhost:8080/api/cities/getall");
    }

    getById(id){
        return axios.get(baseUrl + "/getById?id="+id)
    }
}