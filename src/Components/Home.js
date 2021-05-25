import React, { Component, useState,useEffect } from 'react';
import './MyStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PLayer from './player.js'
import { render } from '@testing-library/react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Player from './player';
import Songlist from './Functionaltest'
import {Container,Row,Col} from 'react-bootstrap'
function Home(){
    
    const songs=[
        {
        id:0,
        title:'Welcome to the party',
        artist:'Diplo,French Montana,Lil Pump,Zavia',
        photo:'/Media/Thumbnails/welcome_to_the_party.jpg',
        src:'/Media/Welcome to the party.mp3',
        Subtitles:'/Media/Subtitles/bad_liar.vtt',
        status:false
    },
    {    id:1,
        title:'Perfect',
        artist:'One Direction',
        photo:'/Media/Thumbnails/perfect.jpg',
        src:'/Media/Perfect.mp3',
        Subtitles:'/Media/Subtitles/bad_liar.vtt',
        status:false
    },
    {    id:2,
        title:'Jhoom Jhoom',
        artist:'Ali Zafar',
        photo:'/Media/Thumbnails/jhoom.jpg',
        src:'/Media/jhoom_r&b.mp3',
        Subtitles:'/Media/Subtitles/bad_liar.vtt',
        status:false
    },
    {    id:3,
        title:'Bad liar',
        artist:'Imagine Dragons',
        photo:'/Media/Thumbnails/bad_lair.jpg',
        src:'/Media/Bad_liar.mp3',
        Subtitles:'/Media/Subtitles/bad_liar.vtt',
        status:false
    },
    {    id:4,
        title:'Main Rang Sharbtaon Ka',
        artist:'Atif Aslam, Chinmayi Sripaada',
        photo:'/Media/Thumbnails/rang_sharbaton_ka.jpg',
        src:'/Media/Main Rang Sharbaton Ka - Phata Poster Nikhla Hero 320 Kbps.mp3',
        Subtitles:'/Media/Subtitles/bad_liar.vtt',
        status:false
    },
    {    id:5,
        title:'Call you mine ft Bebe Rexha',
        artist:'The Chainsmokers & Bebe Rexha',
        photo:'/Media/Thumbnails/call_you_mine.jpg',
        src:'/Media/Call you mine.m4a',
        Subtitles:'/Media/Subtitles/bad_liar.vtt',
        status:false
    },
    {    id:6,
        title:'Chammak Challo',
        artist:'Akon,Hamsika Iyer',
        photo:'/Media/Thumbnails/chammak_challo.jpg',
        src:'/Media/chammak_challo.mp3',
        Subtitles:'/Media/Subtitles/bad_liar.vtt',
        status:false
    },
    {    id:7,
        title:'Something just like this',
        artist:'The chainsmokers & Coldplay',
        photo:'/Media/Thumbnails/something_just_like_this.jpg',
        src:'/Media/Something just like this.m4a',
        Subtitles:'/Media/Subtitles/bad_liar.vtt',
        status:false
    },
    {    id:8,
        title:'Love me again',
        artist:'John Newman',
        photo:'/Media/Thumbnails/love_me_again.jpg',
        src:'/Media/Love me again.mp3',
        Subtitles:'/Media/Subtitles/bad_liar.vtt',
        status:false
    },
    {    id:9,
        title:'Till i collapse(Eminem)',
        artist:'Eminem,Nate Dogg',
        photo:'/Media/Thumbnails/till_i_collapse.jpg',
        src:'/Media/Till i collapse(Eminem).m4a',
        Subtitles:'/Media/Subtitles/bad_liar.vtt',
        status:false
    }
    
    
]

const [currentsongindex,Setcurrentsongindex]=useState(null)
const [nextsongindex,Setnextsongindex]=useState(currentsongindex+1 )
const [playing,Setplaying]=useState(false)
const [minplayer,Setminplayer]=useState(false)
const [title,Settitle]=useState('react app')
if(currentsongindex!=null)
{
    document.title=title+'( '+songs[currentsongindex].artist+' )'
}

useEffect(()=>{
    if(currentsongindex!=null)
    {
        Settitle(songs[currentsongindex].title)
    }
   
    
},[currentsongindex])

    return(
        
            <center>
           <div  className="home">
            
           
            <Songlist 
            songs={songs}
            currentsongindex={currentsongindex}
             Setcurrentsongindex={Setcurrentsongindex}
             minplayer={minplayer}
             playing={playing}
             Setplaying={Setplaying} />
            
             {currentsongindex!=null ?
 <Player
 songs={songs}
  currentsongindex={currentsongindex}
  Setcurrentsongindex={Setcurrentsongindex}
  nextsongindex={nextsongindex}
  Setnextsongindex={Setnextsongindex}
  playing={playing}
  Setplaying={Setplaying}
  minplayer={minplayer}
  Setminplayer={Setminplayer}
   /> : null
             }
         
            
            
        </div>
             
             </center>
          
    )
}

export default Home;