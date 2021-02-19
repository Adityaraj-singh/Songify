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
        src:'/Media/Welcome to the party.mp3'
    },
    {    id:1,
        title:'Back in black',
        artist:'AC/DC',
        photo:'/Media/Thumbnails/back_in_black.jfif',
        src:'/Media/Back in Black.mp3'
    },
    {    id:2,
        title:'Bad liar',
        artist:'Imagine Dragons',
        photo:'/Media/Thumbnails/bad_lair.jpg',
        src:'/Media/Bad_liar.mp3'
    },
    {    id:3,
        title:'Till i collapse(Eminem)',
        artist:'Eminem,Nate Dogg',
        photo:'/Media/Thumbnails/till_i_collapse.jpg',
        src:'/Media/Till i collapse(Eminem).m4a'
    },
    {    id:4,
        title:'Call you mine ft Bebe Rexha',
        artist:'The Chainsmokers & Bebe Rexha',
        photo:'/Media/Thumbnails/call_you_mine.jpg',
        src:'/Media/call you mine.m4a'
    },
    {    id:5,
        title:'Candy Paint',
        artist:'Post Malon',
        photo:'/Media/Thumbnails/candy_paint.jpg',
        src:'/Media/Candy_Paint.mp3'
    },
    {    id:6,
        title:'Animals(MAROONS 5)',
        artist:'Maroons 5',
        photo:'/Media/Thumbnails/animals.jpg',
        src:'/Media/Animals.mp3'
    },
    {    id:7,
        title:'Love me again',
        artist:'John Newman',
        photo:'/Media/Thumbnails/love_me_again.jpg',
        src:'/Media/Love me again.mp3'
    },
    {    id:8,
        title:'Rap God',
        artist:'Eminem(explicite)',
        photo:'/Media/Thumbnails/rap_god.jpg',
        src:'/Media/rap god.mp3'
    },
    {    id:9,
        title:'Shell Shocked(Teenage mutatnt ninja turtle)',
        artist:'Juicy J, Wiz Khalifa, Ty Dolla $ign',
        photo:'/Media/Thumbnails/shell_shocked.jfif',
        src:'/Media/Shell shocked(Teenaje mutant and ninja turtles).mp3'
    },
    {    id:10,
        title:'Blinding light',
        artist:'The Weekends',
        photo:'/Media/Thumbnails/blinding_lights.jpg',
        src:'/Media/Blinding lights.m4a'
    },
    {
        id:11,
        title:'Killing Strangers(John wick)',
        artist:'Marilyn Manson',
        photo:'/Media/Thumbnails/John_Wick.jpg',
        src:'/Media/Killing Strangers.mp3'  
    },
    {
        id:12,
        title:'Unforgettable',
        artist:'french montana ft. swae lee',
        photo:'/Media/Thumbnails/unforgettable.png',
        src:'/Media/Unforgettable.mp3'  
    }
    
]

const [currentsongindex,Setcurrentsongindex]=useState(null)
const [nextsongindex,Setnextsongindex]=useState(currentsongindex+1 )
const [playing,Setplaying]=useState(false)
const [minplayer,Setminplayer]=useState(false)
const [title,Settitle]=useState('react app')
if(currentsongindex!=null)
{
    document.title=title+' By '+songs[currentsongindex].artist
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
            <Container>
            <Row className="justify-content-md-center">
            <Col  xs={{ order: 1 }} sm={3}  >
            <Songlist 
            songs={songs}
             Setcurrentsongindex={Setcurrentsongindex}
             playing={playing}
             Setplaying={Setplaying} />
             </Col>
             
        <Col sm={4} >
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
         
            </Col>
            </Row>
            </Container>
        </div>
             
             </center>
          
    )
}

export default Home;