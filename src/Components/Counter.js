import React, { Component, useState } from 'react'

import './MyStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'


 /*
function Hello(props){
   
    const [fruit,setFruit] = useState('welcome to the party');
    
    return(
        <div>
           <h1>{fruit}</h1>
           <p>{props.children}</p>
           <button onClick={()=>setFruit('haaaaaannnn!!!!!')}> Subscribe</button>
    
        </div>
    )
   

}
 */


 const Hello=()=>{

    var person=[
        {
            id:1,
            name:'trimmer',
            price:3600,
            company:'philips'
        },
        {
            id:2,
            name:'samsung Mobile',
            price:12000,
            company:'samsung'
        },
        {
            id:3,
            name:'laptop',
            price:440,
            company:'HP'
        },
        {
            id:4,
            name:'headphones',
            price:22000,
            company:'boat'
        },
        {
            id:5,
            name:'Charger',
            price:100,
            company:'Micromax'
        },
        {
            id:6,
            name:'jeans',
            price:1200,
            company:'Denim'
        }
    
    ]


    
   


const [count,Setcount]=useState([])
const [typer,Settyper]=useState('')
var temp=count
function adder()
{

   Setcount([...count,{
       id:count.length,
       value:document.getElementById('add').value
   }])
}
function remove(e)
{
temp[e].value='deleted'
Setcount(temp)
}
console.log(count)
 return(

    <div className="container">
       <center> <input type="text" id="add"  placeholder="teypee here" /><button className="btn btn-outline-primary" id="button" onClick={adder}>+</button></center>
        
        
        <ol>
        {count.map(list=>(
                <li className=" text-dark block alert alert-success lists " key={list.id}>{list.value} <button type="button" className="btn btn-danger" onClick={()=>remove(list.id)}>Remove</button></li>
            ))}
        </ol>
            
       
    </div>
 )

 

 }
 export default Hello;
