import Axios from "axios";

class HelloWorldService{

    callHelloWorldAPI = ()=>{
        return Axios.get('http://localhost:8080/hello-world')
    }

    callHelloWorldBeanAPI = ()=>{
        return Axios.get('http://localhost:8080/hello-world-bean')
    }

    callHelloWorldPathVariableAPI = (name)=>{
        return Axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    }
}

export default new HelloWorldService();