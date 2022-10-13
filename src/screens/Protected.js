import { useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import LoginScreen, { sendData } from "./LoginScreen";
import MainScreen from "./MainScreen";

const ProtectedRoutes = () =>{
    // localStorage.clear()
   
    let token = localStorage.getItem("status")
    let user = {}
    console.log(token)
    if(token=="true"){
        user = {islogged:true}

    }else{
        user = {islogged:false}

    }
    
    // if(!token){
    //     localStorage.removeItem("status")
    //     return <LoginScreen/>
    // }else{
    
    //     return <MainScreen/>
    // }
    return (user.islogged ? <Outlet/> :<Navigate to='/'/>)

   
  
    
}


export default ProtectedRoutes;

