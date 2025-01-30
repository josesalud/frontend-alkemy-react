import { API_URL } from '../config/config'

const PATH_URL = "/auth/login";

export const login = async (body) => {
    const options = {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: 'post',
		body: JSON.stringify(body)
	};
    const resp = await fetch(`${API_URL + PATH_URL}`, options ).
        then( result =>{
            if (result.status >= 200 && result.status < 300) {                
                localStorage.setItem('token',result.json().access_token);
            }
        })
    
}