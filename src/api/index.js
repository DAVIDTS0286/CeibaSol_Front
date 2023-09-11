import axios from "axios";

const apiBack = process.env.urlBackend || "https://ceibasol.onrender.com/api/";

export let token = localStorage.getItem("token")

let header = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${token}`,
};

export let api = axios.create({
  baseURL: apiBack,
  headers: header,
});

export const getResponseData = (resp) => resp.data;
