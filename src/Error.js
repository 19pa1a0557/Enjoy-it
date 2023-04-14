import React, { useState } from "react";
import image from "./loginImg.png"
import Restaurant from "./Restaurant";
import White from "./whiteimg.jpeg"
import { useNavigate } from "react-router-dom/dist";
import { Button } from "react-bootstrap";



const ErrorPage = () => {
    const navigate = useNavigate();

    const handleClick=(e)=>{
        e.preventDefault();
      navigate('/login');
    }

  return (
    <div>
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center",height:"250px "
        }}><h1>Wrong Credentials</h1>
        </div>
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center",height:"300px"
        }}>
            
            <Button onClick={handleClick}>CLick Here To Login Again</Button>
        </div>
    </div>
  );
};

export default ErrorPage;
