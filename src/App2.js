 import React, { useEffect, useState } from "react";

import './App2.css'
 function Loading(props){
 const [percentage,Setpercentage]=useState(0)

 useEffect(()=>{
 let temp=props.loaded/props.total
     temp=temp*100
     Setpercentage(temp)
    console.log('percentage',temp)
    var element=document.getElementById('loading-bar')
  
 },[])

return (
    <div className="container">
           <div  className="loading-container">
           <center> <p className="text"><b>{percentage}</b></p></center> 
               <div className=" loading-bar" id="loading-bar" style={{width:`${percentage}%`}}></div>
                 
          </div>
           
    </div>
)


 }

 export default Loading