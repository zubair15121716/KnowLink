import React from "react";
import { Route , Routes as Router } from "react-router";
import {Login,Home,Post,Write,Register,Blogs,Postview,Profile,User} from "../views";
export const Routes = () => {
    return (
        <Router>
            <Route exact path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/post/:postcat" element={<Post/>}/>
            <Route path="/write" element={<Write/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/readpost/:postid" element={<Postview/>}/>
            <Route path="/userprofile" element={<User/>}/>p
        </Router>
    );
}


