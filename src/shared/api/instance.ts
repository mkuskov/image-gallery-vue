import axios from "axios";
import { URL_BASE } from "../constants/links";

export const instance = axios.create({
  baseURL: URL_BASE,
});