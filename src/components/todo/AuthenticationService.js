import Axios from "axios";
import {API_URL} from '../../Constants';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
class AuthenticationService{

    executeSpringAuthentication(username, password){

        let basicAuthHeader = 'Basic '+ window.btoa(username + ":" + password);
        return Axios.get(API_URL+'basicauth', 
        {
            headers: 
            {
                authorization : basicAuthHeader
            }
        })
    }

    executeJWTAuthentication(username, password){

        return Axios.post(API_URL+'authenticate', 
        {
            username,
            password
        })
    }

    getLoggeInUser(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if(user) return user
        return ''
    }

    // registerSuccesssfulLogin(username , password){
    //     sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        
        // let basicAuthHeader = 'Basic '+ window.btoa(username + ":" + password);
        // this.setupAxiosInterceptor(basicAuthHeader);
    // }

    registerSuccesssfulLoginForJWT(username , token){
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);

        let jwtAuthHeader = 'Bearer '+ token;
        this.setupAxiosInterceptor(jwtAuthHeader);
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if(user === null){
            return  false;
        }
        return true;
    }

    logout(){
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    setupAxiosInterceptor(jwtAuthHeader){
        Axios.interceptors.request.use( (config)=>{
            if(this.isUserLoggedIn()){
                config.headers.authorization = jwtAuthHeader;
            }
            return config;
        })
    }
}

export default new AuthenticationService();//Instance of Authentication created then exported. 