import axios from "axios";

const instance = axios.create({
  baseURL: 'https://us-central1-expressdotcom-8a08a.cloudfunctions.net/api'
  //'http://localhost:5001/expressdotcom-8a08a/us-central1/api'
})

export default instance