
import '../Assets/Styles/Login.css';

import React from "react";
import AuthService from "../services/auth.service";

export default function Login(){


    const handlelogout = () => {
        console.log("am here in logout");
        localStorage.removeItem("user");
        const user = JSON.parse(localStorage.getItem('user'));
        if (user){
            console.log("logout failed")
        }else{
            console.log("logout success")
            window.location.href = '/auth/login'
        }

    }

    handlelogout();

    return (
        <>


        </>
    );
}

