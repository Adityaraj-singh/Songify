import React, { useState,useEffect,useRef } from 'react'
import {Container,ListGroup} from 'react-bootstrap'
import './MyStyle.css';
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {Nav,FormControl} from 'react-bootstrap'
import {BsPlay} from 'react-icons/bs'
const Songlist=({songs,currentsongindex,Setcurrentsongindex,minplayer,playing,Setplaying})=>{

const [posts,Setposts]=useState(null)
const [people,Setpeople]=useState(50)
const [temp_songs,Settempsongs]=useState(songs)

function change(e){
    Setcurrentsongindex(e)
    
    Setplaying(true)
} 


/*x
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

    
        if(items.title.toLowerCase().includes(document.getElementById('searchinput').value)==true)
        {
            return true
        }
        else{
            return false
        }
    })
    Settempsongs(newarray)
    
}
if(minplayer)
{
    document.getElementById('listing').style.height='420px'
}

function playall(){
    Setcurrentsongindex(0)
    Setplaying(true)
}


    return(

        <div className="songlistbox">
          
        <center>
            
             <div className="song-list-box  shadow-2xl">
            
           
                 <div className="headerbutton">
                     <button className="bg-green-500 p-1 rounded-xl shadow-md border-2 border-black" id="playall" onClick={playall}>PLAY ALL<BsPlay size={25} className="playallicon"/></button>
                 </div>
            <ol className=" listing py-4  space-y-1 " id="listing" as="ol">
                {
                    temp_songs.map(item=>(
                        <li className={currentsongindex==item.id ? "bg-green-600" : "bg-white"} id="listitem" key={item.id}>
                            

                                <img src ={process.env.PUBLIC_URL+item.photo} className="shadow-2x image-thumb" id="image-thumb" />
                            
                        <button className="song-button rounded-2xl space-y-1" key={item.id}   onClick={()=>change(item.id)}>          
                        <p ><strong>{item.title}</strong> </p>
                        
                        <div className="align-item-start song-list-artist">{item.artist}</div>
                        
                    </button>
                    <div  id="playing-icon">{currentsongindex==item.id ? <BsMusicNoteBeamed />:null}</div>
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