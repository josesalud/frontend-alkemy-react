
console.log("Hostname: " + window.location.hostname);

let auth_url_config = "";
if (window.location.hostname === 'localhost') {
    auth_url_config = 'http://localhost:8080';
} 

export const API_URL = auth_url_config;