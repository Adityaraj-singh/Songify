import React, { Component, useState,useEffect } from 'react'
import Sample from './sample.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,OverlayTrigger,Tooltip} from 'react-bootstrap'
import './MyStyle.css';
function Settings(){

    return(

        <div className="settings">

            <center><h2>Settings</h2></center>
            <Sample title="henryy cavil"/>
        </div>
    )
}

export default Settings;