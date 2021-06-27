import axios from "axios";

let baseUrl = "http://localhost:8080/api/resumes";

export default class ResumeService{

    getResumes(){
        return axios.get(baseUrl + "/getall");
    }

    getById(id){
        return axios.get(baseUrl + "/getById?id="+id)
    }

    getByCandidateId(candidateId){
        return axios.get(baseUrl + "/getByCandidateId?candidateId="+candidateId)
    }
}
