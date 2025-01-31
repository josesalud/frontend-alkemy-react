import { API_URL,HEADER_BASIC } from '../config/config'

const PATH_URL = "/users"

export const getUsers = async () => {
    const options = {
        headers: HEADER_BASIC,
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
        headers: HEADER_BASIC,
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

export const deleteUser = async(id)=>{
const options = {
        headers: HEADER_BASIC,
        method: 'DELETE'
    };
    const resp = await fetch(`${API_URL+PATH_URL}/${id}`,options).
        then( result =>{
            if (result.status >= 200 && result.status < 300) {                                                            
                return result.json();
            }
        }).then( json => {
            return json;
            
        })
    return resp;
}


