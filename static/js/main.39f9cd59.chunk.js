(this.webpackJsonptuner=this.webpackJsonptuner||[]).push([[0],{150:function(e,t,i){},151:function(e,t,i){},31:function(e,t,i){},456:function(e,t,i){},457:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),a=i(23),c=i.n(a),l=(i(150),i(151),i(31),i(461),i(29),i(143),i(64)),r=i(65),o=i(3);var d=i(6),u=(i(68),i(459)),j=i(460),b=i(54),p=i(144);var h=function(e){var t=e.songs,i=e.currentsongindex,s=e.Setcurrentsongindex,a=e.nextsongindex,c=e.Setnextsongindex,r=e.playing,h=e.Setplaying,m=e.minplayer,g=e.Setminplayer,x=Object(n.useState)("visible"),O=Object(d.a)(x,2),v=O[0],f=O[1],y={backgroundImage:"url(/Songify"+t[i].photo+")",visibility:v},N=Object(n.useState)({position:"relative",top:"-500px"}),S=Object(d.a)(N,2),M=S[0],k=S[1],T=Object(n.useState)({visibility:"visible"}),C=Object(d.a)(T,2),_=C[0],w=C[1],B=Object(n.useState)({position:"relative",top:"40px"}),E=Object(d.a)(B,2),L=E[0],I=E[1],R=Object(n.useState)({position:"relative",top:"5px","font-style":"xx-large"}),P=Object(d.a)(R,2),W=P[0],z=P[1],J=Object(n.useState)({width:"350px",height:"550px"}),A=Object(d.a)(J,2),D=A[0],F=A[1],U=Object(n.useRef)(0),K=Object(n.useState)("0:00"),G=Object(d.a)(K,2),Y=G[0],X=G[1],Z=Object(n.useState)(0),$=Object(d.a)(Z,2),q=$[0],H=$[1];Object(n.useRef)(),Object(n.useRef)(),Object(n.useRef)(),Object(n.useEffect)((function(){U.current.addEventListener("timeupdate",(function(e){var t=e.srcElement,n=t.currentTime,a=t.duration,c=n/a*100;document.getElementById("progresses").style.width="".concat(c,"%");var l=Math.floor(a/60),r=Math.floor(a%60);r<10&&(r="0".concat(r)),a&&H("".concat(l,":").concat(r));var o=Math.floor(n/60),d=Math.floor(n%60);d<10&&(d="0".concat(d)),n&&X("".concat(o,":").concat(d)),n==a&&s(i+1)})),r?U.current.play():U.current.pause(),c(i+1>t.length-1?0:i+1)}),[r,i]);var Q=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e?s((function(){X(0);var e=i;return(e+=1)>t.length-1&&(e=0),e})):(s((function(){var e=i;return(e-=1)<0&&(e=t.length-1),e})),document.getElementById("progresses").style.width="0%",U.current.currentTime=0)};return Object(o.jsx)("div",{className:"main-player items-center",style:M,children:Object(o.jsx)("center",{children:Object(o.jsxs)("div",{className:"player-box   bg-gradient-to-r from-purple-600 via-purple-400 to-purple-400 rounded-2xl space-y-2 ring-4 ring-indigo-900 shadow-2xl",id:"playerbox",style:D,children:[Object(o.jsx)("div",{className:"top-controls p-1",children:m?Object(o.jsx)("button",{onClick:function(){w({visibility:"visible"}),f("visible"),F({width:"350px",height:"550px"}),I({position:"relative"}),z({position:"relative"}),k({position:"relative",top:"-500px"}),g(!m)},children:Object(o.jsx)(p.a,{size:25})}):Object(o.jsx)("button",{onClick:function(){w({visibility:"hidden"}),f("hidden"),F({width:"350px",height:"100px"}),I({position:"relative",width:"350px",top:"-360px"}),z({position:"relative","margin-top":"10px",top:"-200px","font-size":"small",width:"350px"}),k({position:"relative",top:"-60px"}),g(!m)},children:Object(o.jsx)(l.b,{size:20})})}),Object(o.jsxs)("div",{className:"player-heading",style:_,children:[Object(o.jsx)("audio",{id:"audio",src:"/Songify"+t[i].src,ref:U,preload:"auto"}),Object(o.jsx)("h1",{className:"font-extralight text-3xl",children:" PLAYING NOWs"})]}),Object(o.jsx)("div",{className:"detail-image",style:y}),Object(o.jsx)("center",{children:Object(o.jsx)("div",{className:"song-title",id:"songtitle",style:W,children:Object(o.jsx)("h1",{className:" font-bold",children:t[i].title})})}),Object(o.jsx)("div",{className:"song-artist",style:_,children:Object(o.jsx)("h4",{className:"font-bold  font-serif text-sm",children:t[i].artist})}),Object(o.jsx)("div",{className:"progress-bars p-1",style:_,children:Object(o.jsxs)(u.a,{children:[Object(o.jsx)(j.a,{xs:2,children:Y}),Object(o.jsx)(j.a,{xs:8,children:Object(o.jsx)("div",{className:"progress_div",id:"progress_div",onClick:function(){document.getElementById("progress_div")&&document.getElementById("progress_div").addEventListener("click",(function(e){var t=U.current.duration,i=e.offsetX/e.srcElement.clientWidth*t;U.current.currentTime=i}))},children:Object(o.jsx)("div",{className:"progresses",id:"progresses"})})}),Object(o.jsx)(j.a,{xs:2,children:q})]})}),Object(o.jsxs)("div",{className:"controls space-x-10 p-2",id:"controls",style:L,children:[Object(o.jsx)("button",{id:"skipperbtn",onClick:function(){return Q(!1)},children:Object(o.jsx)(b.d,{size:40})}),Object(o.jsx)("button",{className:"outline-none",onClick:function(){return h(!r)},children:r?Object(o.jsx)(b.a,{className:"bg-green-700 rounded-xl border-2 border-black",size:40}):Object(o.jsx)(b.b,{className:"bg-green-700 rounded-xl border-2 border-black",size:40})}),Object(o.jsx)("button",{id:"skipperbtn",onClick:function(){return Q(!0)},children:Object(o.jsx)(b.c,{size:40})})]}),Object(o.jsx)("div",{className:"next-song",style:_,children:Object(o.jsxs)("h2",{className:"text-md",children:[Object(o.jsx)("strong",{children:"Next up:"}),t[a].title]})}),Object(o.jsx)("div",{className:"trademark",style:_,children:Object(o.jsx)("p",{className:"text-xs font-mono",children:Object(o.jsx)("i",{children:"a deadshot production"})})})]})})})},m=(i(69),i(462)),g=function(e){var t=e.songs,i=e.currentsongindex,s=e.Setcurrentsongindex,a=(e.playing,e.Setplaying),c=Object(n.useState)(null),l=Object(d.a)(c,2),u=(l[0],l[1],Object(n.useState)(50)),j=Object(d.a)(u,2),b=(j[0],j[1],Object(n.useState)(t)),p=Object(d.a)(b,2),h=p[0],g=p[1];return Object(o.jsx)("div",{className:"songlistbox",children:Object(o.jsx)("center",{children:Object(o.jsxs)("div",{className:"song-list-box rounded-md bg-purple-500 rounded-xl ring-4 ring-indigo-900 shadow-2xl",children:[Object(o.jsx)("div",{className:"searchbox p-2",children:Object(o.jsx)(m.a,{className:"Default focus style",placeholder:"Search Song",id:"searchinput","aria-label":"Username","aria-describedby":"basic-addon1",onChange:function(){var e=t.filter((function(e){return null!==e.title.toLowerCase().match(document.getElementById("searchinput").value)}));g(e)}})}),Object(o.jsx)("div",{className:"headerbutton",children:Object(o.jsx)("button",{className:"bg-green-500 p-1 rounded-xl shadow-md border-2 border-black",id:"playall",onClick:function(){s(0),a(!0)},children:"PLAY ALL"})}),Object(o.jsx)("ol",{className:" listing py-4  space-y-1 ",as:"ol",children:h.map((function(e){return Object(o.jsxs)("li",{className:i==e.id?"bg-green-600":"bg-white",id:"listitem",children:[Object(o.jsx)("div",{id:"playing-icon",children:i==e.id?Object(o.jsx)(r.a,{}):null}),Object(o.jsxs)("button",{className:" rounded-2xl space-y-1",onClick:function(){return t=e.id,s(t),void a(!0);var t},children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:e.title})," "]}),Object(o.jsx)("div",{className:"align-item-start",children:e.artist})]},e.id)]},e.id)}))})]})})})};var x=function(){var e=[{id:0,title:"Welcome to the party",artist:"Diplo,French Montana,Lil Pump,Zavia",photo:"/Media/Thumbnails/welcome_to_the_party.jpg",src:"/Media/Welcome to the party.mp3",status:!1},{id:1,title:"Back in black",artist:"AC/DC",photo:"/Media/Thumbnails/back_in_black.jfif",src:"/Media/Back in Black.mp3",status:!1},{id:2,title:"Bad liar",artist:"Imagine Dragons",photo:"/Media/Thumbnails/bad_lair.jpg",src:"/Media/Bad_Liar.mp3",status:!1},{id:3,title:"Till i collapse(Eminem)",artist:"Eminem,Nate Dogg",photo:"/Media/Thumbnails/till_i_collapse.jpg",src:"/Media/Till i collapse(Eminem).m4a",status:!1},{id:4,title:"Call you mine ft Bebe Rexha",artist:"The Chainsmokers & Bebe Rexha",photo:"/Media/Thumbnails/call_you_mine.jpg",src:"/Media/Call you mine.m4a",status:!1},{id:5,title:"Candy Paint",artist:"Post Malon",photo:"/Media/Thumbnails/candy_paint.jpg",src:"/Media/Candy_Paint.mp3",status:!1},{id:6,title:"Animals(MAROONS 5)",artist:"Maroons 5",photo:"/Media/Thumbnails/animals.jpg",src:"/Media/Animals.mp3",status:!1},{id:7,title:"Love me again",artist:"John Newman",photo:"/Media/Thumbnails/love_me_again.jpg",src:"/Media/Love me again.mp3",status:!1},{id:8,title:"Rap God",artist:"Eminem(explicite)",photo:"/Media/Thumbnails/rap_god.jpg",src:"/Media/rap god.mp3",status:!1},{id:9,title:"Shell Shocked(Ninja turtle)",artist:"Juicy J, Wiz Khalifa, Ty Dolla $ign",photo:"/Media/Thumbnails/shell_shocked.jfif",src:"/Media/Shell shocked(Teenaje mutant and ninja turtles).mp3",status:!1},{id:10,title:"Blinding light",artist:"The Weekends",photo:"/Media/Thumbnails/blinding_lights.jpg",src:"/Media/Blinding lights.m4a",status:!1},{id:11,title:"Killing Strangers(John wick)",artist:"Marilyn Manson",photo:"/Media/Thumbnails/John_Wick.jpg",src:"/Media/Killing Strangers.mp3",status:!1},{id:12,title:"Unforgettable",artist:"french montana ft. swae lee",photo:"/Media/Thumbnails/unforgettable.png",src:"/Media/Unforgettable.mp3",status:!1}],t=Object(n.useState)(null),i=Object(d.a)(t,2),s=i[0],a=i[1],c=Object(n.useState)(s+1),l=Object(d.a)(c,2),r=l[0],u=l[1],j=Object(n.useState)(!1),b=Object(d.a)(j,2),p=b[0],m=b[1],x=Object(n.useState)(!1),O=Object(d.a)(x,2),v=O[0],f=O[1],y=Object(n.useState)("react app"),N=Object(d.a)(y,2),S=N[0],M=N[1];return null!=s&&(document.title=S+" By "+e[s].artist),Object(n.useEffect)((function(){null!=s&&M(e[s].title)}),[s]),Object(o.jsx)("center",{children:Object(o.jsxs)("div",{className:"home bg-red-400",children:[Object(o.jsx)(g,{songs:e,currentsongindex:s,Setcurrentsongindex:a,playing:p,Setplaying:m}),null!=s?Object(o.jsx)(h,{songs:e,currentsongindex:s,Setcurrentsongindex:a,nextsongindex:r,Setnextsongindex:u,playing:p,Setplaying:m,minplayer:v,Setminplayer:f}):null]})})};var O=i(40),v=i(41),f=i(43),y=i(42),N=function(e){Object(f.a)(i,e);var t=Object(y.a)(i);function i(){var e;return Object(O.a)(this,i),(e=t.call(this)).state={name:"John Newman"},e}return Object(v.a)(i,[{key:"componentWillUnmount",value:function(){console.log("unmounted by child component")}},{key:"componentWillReceiveProps",value:function(){console.log("recieved")}},{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("h1",{children:["Rendered component",this.props.namess]})})}}]),i}(n.Component);n.Component;n.Component,i(456);var S=function(){return Object(o.jsx)("div",{className:"app",children:Object(o.jsx)(x,{})})},M=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,463)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),n(e),s(e),a(e),c(e)}))};c.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root")),M()}},[[457,1,2]]]);
//# sourceMappingURL=main.39f9cd59.chunk.js.map