import React,{useState,useEffect,useRef} from 'react'
import './MyStyle.css';
import {Nav,Form,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiSkipPrevious,BiPlay,BiSkipNext,BiPause } from 'react-icons/bi';
import {AiOutlineShrink} from 'react-icons/ai'

import {FiMaximize2} from 'react-icons/fi'
import axios from 'axios'
import {Container,ProgressBar} from 'react-bootstrap'
function Player({songs,currentsongindex,Setcurrentsongindex,nextsongindex,Setnextsongindex,playing,Setplaying,minplayer,Setminplayer}){
    const [showing,Setshowing]=useState('visible')
var current={
    'position':'relative',
    'backgroundImage':'url('+process.env.PUBLIC_URL+songs[currentsongindex].photo+')',
    
}



const [temp,Settemp]=useState(0)
const url='http://localhost:8000/'

const temp_songs=songs

const [main_player,Setmain_player]=useState({
    position: 'relative',
    top:'-553px'
})

const [playerstyle,Setplayerstyle]=useState({
    visibility:'visible'
}) 
const [controlstyle,Setcontrolstyle]=useState({
    position:'relative',
    top:'20px',
    width:'60%',
    display:'flex',
    'flex-direction':'row',
    'justify-content':'space-around'
})

const [titlestyle,Settitlestyle]=useState({
    position: 'relative',
    top:'5px',
    'font-style':'xx-large'
})
const [playergeometry,Setplayergeometry]=useState({
    width: '350px',
    height: '570px'
})
const audioEl=useRef(0)
const [initialtime,Setinitialtime]=useState('00:00')
const [finaltime,Setfinaltime]=useState('00:00')
const timerRef=useRef()
const rangevalue=useRef()
const progressref=useRef()
// Subtitle Variables
const [subtitle,Setsubtitle]=useState()
const [subtitleline,Setsubtitleline]=useState('music')
const sub_time_pattern=/[0-9]+:[0-9]+:[0-9]+,[0-9]/g
const time_indexes_var=''
const [time_indexes,settime_indexes]=useState(time_indexes_var)

const [subindex,Setsubindex]=useState(0)
const [subsintime,Setsubsintime]=useState('')
const [subsouttime,Setsubsouttime]=useState('')
const [seconds,Setseconds]=useState(0)
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



if(document.getElementById('progress_div'))
{
    //onlcick progressbar
    document.getElementById('progress_div').addEventListener('click',(event)=>{
        const {duration}=audioEl.current
       let move_progress=(event.offsetX / event.srcElement.clientWidth) * duration
       audioEl.current.currentTime=move_progress
        
    },{once:true})
  
    

    if(seconds==10) 
    {
        Setseconds(prevSecond=>prevSecond*0)
    }
    

}

    if(document.getElementById('progress_div'))
    {
        
    audioEl.current.addEventListener('timeupdate',(event)=>{
    
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
        
        var minute_current=Math.floor(currentTime / 60)
        var second_current=Math.floor(currentTime % 60)
        if(minute_current<10)
        {
            minute_current=`0${minute_current}`
        }
    
    
        if(second_current<10)
        {
            second_current=`0${second_current}`
        }
        //MATCHING TIME WITH LYRICS


       let song_time_pattern=`00:${minute_current}:${second_current},${seconds}`
       
       let time_of_subtitle=`${subsintime}[0-9]* --> ${subsouttime}[0-9]*`
       let reg='(?<='+time_of_subtitle+String.raw`\n`+'*'+ String.raw`\s+` + ').*'+String.raw`\n`+'.*.?(?='+')'
       reg= RegExp(reg)
    
       if(time_indexes)
       {

        if(song_time_pattern==time_indexes[subindex])
        {
            
        
           if(subtitle.match(reg))
           {
            
            Setsubtitleline(subtitle.match(reg)[0])
            

           } 
           //console.log(subindex)
           Setsubindex(subindex+2)  
        }

       } 
      

       //console.log(song_time_pattern)
      // console.log(current_patterned_time)
        
        if(currentTime)
        {
            Setinitialtime(`${minute_current}:${second_current}`)
        }
        if(currentTime==duration){
            Setcurrentsongindex(currentsongindex+1)
        }
        
       }) 

        
}


useEffect(()=>{

    
    if(playing){

        audioEl.current.play()  
    }
    else{
        audioEl.current.pause()
    }
    Setnextsongindex(nextinedexing(nextsongindex))  

   
},[playing,currentsongindex])



// getting Subtitles
useEffect(()=>{

    
    
    axios.get(`${url}order/${currentsongindex}`)
    .then((response) => {

   Setsubtitle(response.data)
   
        
  
  })
    .catch(error=>{
        console.log(error)
    })

     


},[currentsongindex])


//when sub index changges
useEffect(()=>{
    if(time_indexes)

    {
        Setsubsintime(time_indexes[subindex])
    Setsubsouttime(time_indexes[subindex+1])
    }
},[subindex])


//when subtitlev changes
useEffect(()=>{

    if(subtitle)
    {   
        settime_indexes(subtitle.match(sub_time_pattern))
      
    }

   
Setsubindex(0)

Setsubsintime('00:00:00,0')
Setsubsouttime('00:00:00,0')


},[subtitle])

useEffect(()=>{
    

    if(time_indexes)
    {
        let interval=null

        interval=setInterval(() => {
            Setseconds(prevTime=>prevTime+1)               
        
    },100);
    return ()=>{ clearInterval(interval)}
    }
     
},[time_indexes])



//minimze/maximize
const minimize=()=>{
    Setplayerstyle({
        visibility:'hidden'
    })
    
    document.getElementById('detail-image').style.height="50px"
    document.getElementById('detail-image').style.width="50px"
    document.getElementById('detail-image').style.position="relative"
    document.getElementById('detail-image').style.top="-70px"
    document.getElementById('detail-image').style.left="-120px"
    document.getElementById('detail-image').style.border="0.8px solid white"
    

    document.getElementById('progress_div').style.left='10px'
    document.getElementById('progress_div').style.top='-200px'
    document.getElementById('progress_div').style.position='relative'
    document.getElementById('progress_div').style.height='0.14rem'

    
  

    Setshowing('hidden')

    Setplayergeometry({
        width: '350px',
        height: '100px',  
    })

    Setcontrolstyle({
        position:'relative',
       width:'50%',
       'display':'flex',
       'justify-content':"space-around",
      
       top:'-220px' ,
       left:"10px"       
    })

    Settitlestyle({
        position: 'relative',
      'top': '-72px',
      'width':'50%',
   'font-size':'15px',
   'font-weight':'bold',
    width: '350px',
    left:"10px"  
    })

Setmain_player({
    position:'relative',
    top:'-90px'
})

   Setminplayer(!minplayer)
   document.getElementById('playerbox').style.borderRadius = "30px"
}
const maximize=()=>{

    document.getElementById('detail-image').style.height="180px"
    document.getElementById('detail-image').style.width="180px"
    document.getElementById('detail-image').style.top="0px"
    document.getElementById('detail-image').style.left="0px"
    document.getElementById('detail-image').style.border="2px solid white"


    document.getElementById('progress_div').style.height='0.4rem'
    document.getElementById('progress_div').style.left='0px'
    document.getElementById('progress_div').style.top='00px'

    document.getElementById('playerbox').style.borderRadius = "10px"
    document.getElementById('skipperbtn-1').style.bottom = "0px"
    document.getElementById('skipperbtn-2').style.bottom = "0px"
    Setplayerstyle({
        visibility:'visible'
    })

    Setshowing('visible')

    Setplayergeometry({
        width: '350px',
        height: '558px'
    })

    Setcontrolstyle({
        position:'relative',
        width:'60%',
        display:'flex',
        'flex-direction':'row',
        'justify-content':'space-around',
        'padding-top':'10px'
        
        
    })

    Settitlestyle({
        position: 'relative',
    })

    Setmain_player({
        position: 'relative',
        top:'-552px' 
    })
    Setminplayer(!minplayer)
}

const skip=(forwards=true)=>{
    
    document.getElementById('progresses').style.width='0%'
    audioEl.current.currentTime=0
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
     } 
 
}
return(
  
    <div className="main-player items-center" style={main_player}>
                             <center>
                                
                    <div className="player-box    space-y-2 shadow-2xl" id="playerbox" style={playergeometry}>
                        <div className="top-controls p-1">
                        {!minplayer ? <button onClick={minimize}><AiOutlineShrink size={20}/></button> : <button  onClick={maximize} ><FiMaximize2 size={20} /></button> }
                        </div>
                    <div className="player-heading" style={playerstyle}>
                        <audio id="audio"  src={process.env.PUBLIC_URL+songs[currentsongindex].src}  ref={audioEl} preload="auto">
                            <track default src={process.env.PUBLIC_URL+'/Media/Subtitles/bad_liar.vtt'}></track>
                            </audio>                       
                   <h2 className="font-extralight text-3xl "><strong>Playing now</strong></h2>
                   </div>
                   <div className="detail-image" id="detail-image" style={current} >
                   </div>
                   <center>
                   <div className="song-title " id="songtitle" style={titlestyle}>
                         <h1 className={minplayer==false ? "font-bold": null}><i>{songs[currentsongindex].title}</i></h1>
                    </div>
                    </center>
                    <div className="song-artist" style={playerstyle}>
                        <h4 className="font-bold text-xs" id="artist-text">{songs[currentsongindex].artist}</h4>
                    </div>
                   <div className="progress-bars p-1" >
                   <Row>
                            <Col xs={2} style={playerstyle} >{initialtime}</Col>
                            <Col xs={8}>
                                <div className="progress_div" id="progress_div" >
                                    <div className="progresses" id="progresses" >
                                        
                                    </div>

                                </div>
                                </Col>
                            <Col xs={2} style={playerstyle}>{finaltime}</Col>
                        </Row>
                        
                   
                   </div>

                   
                   <div className="controls space-x-3 p-2" id="controls" style={controlstyle}>
                         <button  id="skipperbtn-1" onClick={()=>skip(false)}><BiSkipPrevious className="skip-button"  size={30}/></button>
                       <button className="outline-none" id="play-button" onClick={()=>Setplaying(!playing)}>{!playing ? <BiPlay id="play-icon" className="rounded-full" size={40}/> : <BiPause id="play-icon" className="bg-white rounded-full text-green-800 " size={40}/>}</button>
                         <button id="skipperbtn-2" onClick={()=>skip(true)}><BiSkipNext className="skip-button"  size={30}/></button>
                      
                   </div>
                    
               
                    <h2 className="text-sm next-song" id="next-song" ><strong>Next up: </strong>{songs[nextsongindex].title} [<span className="text-xs">{songs[nextsongindex].artist}</span>]</h2>
                
                <div className="trademark" style={playerstyle}>
                    <p className="text-xs font-mono"><i>a deadshot production</i></p>
                </div>
                
            </div> 
            
            </center>
        
        </div>
       
)

}

export default Player