import React, { useState,useEffect,useRef } from 'react'
import {Container,ListGroup} from 'react-bootstrap'
import './MyStyle.css';
import {Nav,FormControl} from 'react-bootstrap'
const Songlist=({songs,Setcurrentsongindex,playing,Setplaying})=>{

const [posts,Setposts]=useState(null)
const [people,Setpeople]=useState(50)
const [temp_songs,Settempsongs]=useState(songs)
function change(e){
    Setcurrentsongindex(e)
    Setplaying(true)
}
/*
useEffect(()=>{
axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{
        Setposts(res.data)
    })
},[id])
*/
function filter(){
    const temp2=songs
    
    const newarray=temp2.filter((items)=>{
        if((items.title.toLowerCase()).match(document.getElementById('searchinput').value)!==null)
        {
            return true
        }
        else{
            return false
        }
    })
    Settempsongs(newarray)
    
}

    return(

        <div className="songlistbox">
             
        <center>
             <div className="song-list-box rounded-md bg-purple-500 rounded-xl ring-4 ring-indigo-900 shadow-2xl">
            <div className="searchbox p-2">
            <FormControl className="bg-red-100 shadow-md"
      placeholder="Search Song" id="searchinput"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={filter}
    />
            </div>
                 
            <ol className=" listing py-4 px-2 space-y-1 " as="ol">
                {
                    temp_songs.map(item=>(
                        <li id="listitem" key={item.id}>
                        <button className="rounded-2xl" key={item.id}   onClick={()=>change(item.id)}>
                        <strong>{item.title}</strong>
                        <div className="align-item-start">{item.artist}</div>
                    </button>
                    </li>
                    ))
                }
            

    </ol>
    
            </div>
            </center>

        </div>
    )
}

export default Songlist;