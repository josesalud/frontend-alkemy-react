
console.log("Hostname: " + window.location.hostname);

let auth_url_config = "";
if (window.location.hostname === 'localhost') {
    auth_url_config = 'http://localhost:8080';
} 

export const API_URL = auth_url_config;

export const TOKEN = "eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxIiwibmFtZSI6Ikpvc2XCoHNhbHVkIiwic3ViIjoibHVpc0BnbWFpbC5jb20iLCJpYXQiOjE3MzgyOTA5NTksImV4cCI6MTczODM3NzM1OX0.yIE5Wge1p8AeHUEB1VE7DGtDwazLNztvJDmzL-9-IEoU9vDMRLVNsfgFNQJfSZIIha2lTj02IBjoKOrL8YmV3g";


export const HEADER_BASIC = 
{
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`
};