import { API_URL } from '../config/config'

const PATH_URL = "/users"
const TOKEN = "eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxIiwibmFtZSI6Ikpvc3VlIHNhbHVkIiwic3ViIjoiam9zdWVAZ21haWwuY29tIiwiaWF0IjoxNzM4MTkyMTI0LCJleHAiOjE3MzgyNzg1MjR9.h2wdPRHFXYwj1JRnOoMSGv3ay79cipgkHWADuKxhM5asn9voELzwXWk5oj4OwRJv1wVE3JT1PHRhAnzoT9r5VA";

export const getUsers = async () => {
    const options = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        method: 'get',        
    };
    const resp = await fetch(`${API_URL+PATH_URL}`, options ).
        then( result =>{
            if (result.status >= 200 && result.status < 300) {                                                            
                return result.json();
            }
        }).then( json => {
            return json;
            
        })

    return resp;
    
}

export const saveUser = async (updatedUser) => {
    const options = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        method: 'POST',
        body: JSON.stringify(updatedUser)        
    };
    const resp = await fetch(`${API_URL+PATH_URL}`, options ).
        then( result =>{
            if (result.status >= 200 && result.status < 300) {                                                            
                return result.json();
            }
        }).then( json => {
            return json;
            
        })

    return resp;
    
}

