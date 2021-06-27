import axios from "axios";

let baseUrl = "http://localhost:8080/api/auth";

export default class AuthService{

    registerForEmployer(values){
    return axios.post(baseUrl + "/registerforemployer",values);
}
    registerForCandidate(values){
        return axios.post(baseUrl + "/registerforcandidate",values);
    }
}