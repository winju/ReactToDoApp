class AuthenticationService{

    registerSuccesssfulLogin(username , password){
        sessionStorage.setItem('authenticatedUser', username);
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null){
            return  false;
        }
        return true;
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }
}

export default new AuthenticationService();//Instance of Authentication created then exported. 