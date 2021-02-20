import React,{useState,useEffect,useRef} from 'react'
import './MyStyle.css';
import {Nav,Form,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiSkipPrevious,BiPlay,BiSkipNext,BiPause } from 'react-icons/bi';
import {AiOutlineShrink} from 'react-icons/ai'
import {FiMaximize2} from 'react-icons/fi'
import {Container,ProgressBar} from 'react-bootstrap'
function Player({songs,currentsongindex,Setcurrentsongindex,nextsongindex,Setnextsongindex,playing,Setplaying,minplayer,Setminplayer}){
    const [showing,Setshowing]=useState('visible')
var current={
    'backgroundImage':'url('+process.env.PUBLIC_URL+songs[currentsongindex].photo+')',
    visibility:showing
}

const temp_songs=songs

const [playerstyle,Setplayerstyle]=useState({
    visibility:'visible'
})
const [controlstyle,Setcontrolstyle]=useState({
    position:'relative'
   
})

const [titlestyle,Settitlestyle]=useState({
    position: 'relative',
    'font-style':'xx-large'
    
})
const [playergeometry,Setplayergeometry]=useState({
    width: '350px',
    height: '500px'
  
})

const audioEl=useRef(0)
const [initialtime,Setinitialtime]=useState(0)
const [finaltime,Setfinaltime]=useState('0')
const timerRef=useRef()
const rangevalue=useRef()

function timerchange(){
    Setinitialtime(initialtime+1)
}
const nextinedexing=(nextsongindex)=>{
  
    if(currentsongindex+1>songs.length-1){
        return 0 ;
    }
    else{
        
        return currentsongindex+1;
    }
}

useEffect(()=>{

    if(playing){
        audioEl.current.play()
      
    }
    else{
        audioEl.current.pause()
      
    }
    Setnextsongindex(nextinedexing(nextsongindex))   
    
    audioEl.current.onloadedmetadata = () => {
        Setfinaltime(()=>{
            let secs=audioEl.current.duration
            var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
            return minutes+':'+seconds
        })
       console.log(finaltime)


        
    }
    
    
},[playing,currentsongindex])


const minimize=()=>{
    Setplayerstyle({
        visibility:'hidden'
    })

    Setshowing('hidden')

    Setplayergeometry({
        width: '350px',
        height: '100px'
    })

    Setcontrolstyle({
        position:'relative',
       width:'350px',
       top:'-360px'
       
        
    })

    Settitlestyle({
        position: 'relative',
   'margin-top': '10px',
   'top': '-200px',
   'font-size':'small',
    width: '350px'
    })
   Setminplayer(!minplayer)
}
const maximize=()=>{
    Setplayerstyle({
        visibility:'visible'
    })

    Setshowing('visible')

    Setplayergeometry({
        width: '350px',
        height: '500px'
    })

    Setcontrolstyle({
        position:'relative',
        
    })

    Settitlestyle({
        position: 'relative',
    })
    Setminplayer(!minplayer)
}

useEffect(()=>{

    if(playing){
        const interval=setInterval(() => {
            timerchange()
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    }

},[initialtime,playing])


const skip=(forwards=true)=>{

     if(forwards){
        Setcurrentsongindex(()=>{
            Setinitialtime(0)
             let temp=currentsongindex
             temp=temp+1;

             if(temp>songs.length-1){
               
                 temp=0
             }

             
             return temp
         })
        
     }
     else{
         Setcurrentsongindex(()=>{
            rangevalue.current.value=0
             let temp=currentsongindex
             temp=temp-1;

             if(temp<0){
                 temp=songs.length-1
             }
            
             
             return temp
         })
     }

    
  
}

return(
  
    <div className="main-player items-center">
                             <center>
                                
                    <div className="player-box   bg-gradient-to-r from-purple-600 via-purple-400 to-purple-400 rounded-2xl space-y-2 ring-4 ring-indigo-900 shadow-2xl" id="playerbox" style={playergeometry}>
                        <div className="top-controls p-1">
                        {!minplayer ? <button onClick={minimize}><AiOutlineShrink size={20}/></button> : <button onClick={maximize}><FiMaximize2 size={20}/></button> }
                        </div>
                    <div className="player-heading" style={playerstyle}>
                        <audio id="audio" src={process.env.PUBLIC_URL+songs[currentsongindex].src}  ref={audioEl} preload="auto"/>                       
                   <h1 className="font-extralight text-3xl"> PLAYING NOW</h1>
                   </div>
                   <div className="detail-image shadow-2xl border-3 ring-4 ring-opacity-70 ring-purple-400 " style={current} >
                   </div>
                   <center>
                   <div className="song-title" style={titlestyle}>
                        <h1 className=" font-bold">{songs[currentsongindex].title}</h1>
                    </div>
                    </center>
                    <div className="song-artist" style={playerstyle}>
                        <h4 className="font-bold">{songs[currentsongindex].artist}</h4>
                    </div>
                   <div className="progress-bars p-2" style={playerstyle}>
                   <Row>
                            <Col xs={2}>{initialtime}</Col>
                            <Col xs={8}><Form.Control type="range" ref={rangevalue} custom min="0" max={audioEl.current.duration} value={initialtime} /></Col>
                            <Col xs={2}>{finaltime}</Col>
                        </Row>
                        
                   
                   </div>
                   <div className="controls space-x-3 p-2" id="controls" style={controlstyle}>
                       <button id="skipperbtn" onClick={()=>skip(false)}><BiSkipPrevious size={30}/></button>
                       <button onClick={()=>Setplaying(!playing)}>{!playing ? <BiPlay className="bg-green-700 rounded-xl border-2 border-black" size={30}/> : <BiPause className="bg-green-700 rounded-xl border-2 border-black" size={30}/>}</button>
                       <button id="skipperbtn" onClick={()=>skip(true)}><BiSkipNext size={30}/></button>
                   </div>
                  

                <div className="next-song" style={playerstyle}>
                    <h2 className="text-md" ><strong>Next up:</strong>{songs[nextsongindex].title}</h2>
                </div>
                <div className="trademark">
                <p>a deadshot production</p>
            </div>
            </div> 
            
            </center>
       
        </div>
       
)

}

export default Player