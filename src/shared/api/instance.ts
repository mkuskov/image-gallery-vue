import axios from "axios";

export const instance = axios.create({
    headers: {
		Accept: 'application/json',
	},
});