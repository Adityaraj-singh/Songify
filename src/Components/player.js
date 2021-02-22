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

const [main_player,Setmain_player]=useState({
    position: 'relative',
    top:'-500px' 
})

const [playerstyle,Setplayerstyle]=useState({
    visibility:'visible'
}) 
const [controlstyle,Setcontrolstyle]=useState({
    position:'relative',
    top:'40px' 
})

const [titlestyle,Settitlestyle]=useState({
    position: 'relative',
    top:'5px',

    'font-style':'xx-large'
})
const [playergeometry,Setplayergeometry]=useState({
    width: '350px',
    height: '550px'
})
const audioEl=useRef(0)
const [initialtime,Setinitialtime]=useState('0:00')
const [finaltime,Setfinaltime]=useState(0)
const timerRef=useRef()
const rangevalue=useRef()
const progressref=useRef()

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
    //progress work
    audioEl.current.addEventListener('timeupdate',(event)=>{
        //console.log(event)
        
        const {currentTime,duration}=event.srcElement
        //total duration
        var progress_time=(currentTime/duration) * 100
        document.getElementById('progresses').style.width=`${progress_time}%`
        let minute_duration=Math.floor(duration / 60)
        let second_duration=Math.floor(duration % 60)
        if(second_duration<10)
        {
            second_duration=`0${second_duration}`
        
        }
        if(duration)
        {
            Setfinaltime(`${minute_duration}:${second_duration}`)
        }
        //current time
        let minute_current=Math.floor(currentTime / 60)
        let second_current=Math.floor(currentTime % 60)
        if(second_current<10)
        {
            second_current=`0${second_current}`
        }
        if(currentTime)
        {
            Setinitialtime(`${minute_current}:${second_current}`)
        }
        if(currentTime==duration){
            Setcurrentsongindex(currentsongindex+1)
        }
        
       }) 
  

    if(playing){

        audioEl.current.play()  
    }
    else{
        audioEl.current.pause()
    }
    Setnextsongindex(nextinedexing(nextsongindex))  
    
},[playing,currentsongindex])



//minimze/maximize
const minimize=()=>{
    Setplayerstyle({
        visibility:'hidden'
    })

    Setshowing('hidden')

    Setplayergeometry({
        width: '350px',
        height: '100px',  
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

Setmain_player({
    position:'relative',
    top:'-60px'
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
        height: '550px'
    })

    Setcontrolstyle({
        position:'relative',
        
    })

    Settitlestyle({
        position: 'relative',
    })

    Setmain_player({
        position: 'relative',
        top:'-500px'
    })
    Setminplayer(!minplayer)
}


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
             let temp=currentsongindex
             temp=temp-1;

             if(temp<0){
                 temp=songs.length-1
             }
        
                return temp
         })
         document.getElementById('progresses').style.width='0%'
     }

     
    
    
     

     
}
    function setprogress()
    {
        if(document.getElementById('progress_div'))
        {
            document.getElementById('progress_div').addEventListener('click',(event)=>{
                const {duration}=audioEl.current
               let move_progress=(event.offsetX / event.srcElement.clientWidth) * duration
               audioEl.current.currentTime=move_progress
            })
        }
    }


return(
  
    <div className="main-player items-center" style={main_player}>
                             <center>
                                
                    <div className="player-box   bg-gradient-to-r from-purple-600 via-purple-400 to-purple-400 rounded-2xl space-y-2 ring-4 ring-indigo-900 shadow-2xl" id="playerbox" style={playergeometry}>
                        <div className="top-controls p-1">
                        {!minplayer ? <button onClick={minimize}><AiOutlineShrink size={20}/></button> : <button  onClick={maximize} ><FiMaximize2 size={25} /></button> }
                        </div>
                    <div className="player-heading" style={playerstyle}>
                        <audio id="audio" src={process.env.PUBLIC_URL+songs[currentsongindex].src}  ref={audioEl} preload="auto"/>                       
                   <h1 className="font-extralight text-3xl"> PLAYING NOWs</h1>
                   </div>
                   <div className="detail-image" style={current} >
                   </div>
                   <center>
                   <div className="song-title" id="songtitle" style={titlestyle}>
                         <h1 className=" font-bold">{songs[currentsongindex].title}</h1>
                    </div>
                    </center>
                    <div className="song-artist" style={playerstyle}>
                        <h4 className="font-bold  font-serif text-sm">{songs[currentsongindex].artist}</h4>
                    </div>
                   <div className="progress-bars p-1" style={playerstyle}>
                   <Row>
                            <Col xs={2}>{initialtime}</Col>
                            <Col xs={8}>
                                <div className="progress_div" id="progress_div" onClick={setprogress}>
                                    <div className="progresses" id="progresses" > 
                                    </div>

                                </div>
                                </Col>
                            <Col xs={2}>{finaltime}</Col>
                        </Row>
                        
                   
                   </div>
                   <div className="controls space-x-10 p-2" id="controls" style={controlstyle}>
                       <button  id="skipperbtn" onClick={()=>skip(false)}><BiSkipPrevious size={40}/></button>
                       <button className="outline-none" onClick={()=>Setplaying(!playing)}>{!playing ? <BiPlay className="bg-green-700 rounded-xl border-2 border-black" size={40}/> : <BiPause className="bg-green-700 rounded-xl border-2 border-black" size={40}/>}</button>
                       <button id="skipperbtn" onClick={()=>skip(true)}><BiSkipNext size={40}/></button>
                   </div>
                
                <div className="next-song" style={playerstyle}>
                    <h2 className="text-md" ><strong>Next up:</strong>{songs[nextsongindex].title}</h2>
                </div>
                <div className="trademark" style={playerstyle}>
                    <p className="text-xs font-mono"><i>a deadshot production</i></p>
                </div>
                
            </div> 
            
            </center>
       
        </div>
       
)

}

export default Player