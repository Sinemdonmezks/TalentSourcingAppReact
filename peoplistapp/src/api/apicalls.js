import axios from "axios"
export const register = (body ) => {
    return axios.post("http://localhost:8095/candidate/save",body)
}
export const update = (body ) => {
    return axios.put("http://localhost:8095/candidate/update",body)
}
export const getOneCandidate = (id ) => {
    return axios.get("http://localhost:8095/candidate/findbyid/"+id)
}
export const getallCandidate = ( ) => {
    return axios.get("http://localhost:8095/candidate/findall")
}
export const getStatus = () => {
    return axios.get("http://localhost:8095/candidate/getstatus")
}

export const deleteCandidate = (id) => {
    return axios.delete("http://localhost:8095/candidate/delete/"+id)
}
export const getOneDetail = (id) => {
    return axios.get("http://localhost:8095/candidatedetail/findbyid/"+id)
}
export const saveDetail = (body) => {
    return axios.post("http://localhost:8095/candidatedetail/save",body)
}
export const updateDetail = (body) => {
    return axios.put("http://localhost:8095/candidatedetail/update",body)
}
export const getallCandidateDetail = ( ) => {
    return axios.get("http://localhost:8095/candidatedetail/findall")
}