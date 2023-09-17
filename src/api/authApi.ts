import axios from "axios";
import {HOST} from "../common/routes";

const instance = axios.create({
    baseURL: HOST,
})

export const authApi = {
    auth() {

    }
}
