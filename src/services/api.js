import axios from "axios";

const calculatorAPI = axios.create({
  baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
});

export default calculatorAPI;
