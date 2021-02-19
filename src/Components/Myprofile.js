import React, { Component, useState,useEffect } from 'react'
import './MyStyle.css';
import { FaAdn} from 'react-icons/fa';
import Hello from './Functionaltest'
import Player from './player.js'
function Myprofile(){

    const [timer,setTimer]=useState(1)

/*
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)
        return ()=>{
            clearInterval(interval)
        };
    },[])

    */
   

    
    return(

        <div className="mycart items-center" >

  

  
        </div>

        
    )
}

export default Myprofile;