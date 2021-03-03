const express=require('express')
const app=express()
const path=require('path')
const cors = require("cors")
const port=process.env.PORT || 8000
app.use(cors());
const  fs=require('fs')
const songs=[
    {
    id:0,
    title:'Welcome to the party',
    artist:'Diplo,French Montana,Lil Pump,Zavia',
    subtitle:'/Media/Subtitles/Welcome_to_the_party.srt'
    
},
{    id:1,
    title:'Perfect',
    artist:'One Direction',
    subtitle:'/Media/Subtitles/one_direction_perfect.srt'

},
{    id:2,
    title:'Bad liar',
    artist:'Imagine Dragons',
    subtitle:'/Media/Subtitles/bad_liar.srt'
    
},
{    id:3,
    title:'Till i collapse(Eminem)',
    artist:'Eminem,Nate Dogg',
    subtitle:false
   
},
{    id:4,
    title:'Call you mine ft Bebe Rexha',
    artist:'The Chainsmokers & Bebe Rexha',

    subtitle:false
},
{    id:5,
    title:'Candy Paint',
    artist:'Post Malon',
    subtitle:false
},
{    id:6,
    title:'Something just like this',
    artist:'The chainsmokers & Coldplay',
    subtitle:false
},
{    id:7,
    title:'Love me again',
    artist:'John Newman',
    subtitle:false
},
{    id:8,
    title:'Rap God',
    artist:'Eminem(explicite)',
    photo:'/Media/Thumbnails/rap_god.jpg',
    subtitle:false
},
{    id:9,
    title:'Shell Shocked(Ninja turtle)',
    artist:'Juicy J, Wiz Khalifa, Ty Dolla $ign',
    subtitle:false
    
},
{    id:10,
    title:'Blinding light',
    artist:'The Weekends',
    subtitle:false
},
{
    id:11,
    title:'Killing Strangers(John wick)',
    artist:'Marilyn Manson',
    subtitle:false
},
{
    id:12,
    title:'Unforgettable',
    artist:'french montana ft. swae lee',
    subtitle:false
}

]
/*
app.get('/order/:songid',(req,res)=>{
    const subs=songs.filter((items)=>{

    
        if(items.id==req.params.songid)
        {
            return true
        }
        else{
            return false
        }


    })
    
    res.send('subtitles')
})


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});


fs.readFile('../../public/Media/Subtitles/love_me_again.srt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data)
});

*/

console.log(process.env.windir)