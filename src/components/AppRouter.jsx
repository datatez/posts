import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router";
import { AuthContext } from "../context";
import Loader from "./UI/button/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }

    return(
        isAuth 
        ?
        <Routes>
            {privateRoutes.map((route, index) => {
                return (
                    <Route key = {index}
                    path = {route.path} 
                    element={<route.element/>}/>
                )
            })
        }
            
            <Route path = "/*" element = {<Navigate to = "/posts" replace/>}/>
        </Routes>
        :
        <Routes>
            {publicRoutes.map((route, index) => {
                return (
                    <Route key = {index}
                    path = {route.path} 
                    element={<route.element/>}/>
                )
            })
        }
            
            <Route path = "/*" element = {<Navigate to = "/login" replace/>}/>
        </Routes>
    );
};

export default AppRouter;