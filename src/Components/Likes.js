import { render } from '@testing-library/react';
import React, { Component, useState } from 'react'
/*
class Welcome extends Component{
    constructor() {

        super()
        this.state={
            message:'Welcome to the paarrttyy!!!'
        }
    }
    render(){
    
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button>Subscribe</button>
                
            </div>
        )
    }
}
*/

class Hello extends Component{
    /*
    constructor(){
        super()
        this.state={
            message:"welcome to the party"
        }
    }
    changeMessage(){
        this.setState({

            message:'haannnn!!!'
        })
    }
    render() {
        return(
            <div>
                <h1>state sayss {this.state.message}</h1> 
            <button onClick={()=>this.changeMessage()}> step in</button>
            </div>
     )
    }
    
   constructor(props){
       super(props)
       this.state={
           counter:0
       }
   }
plus(){
    this.setState({
        counter:1

    })
    
}
minus(){
    this.setState({
        counter:'this.state.counter-1'
    })
}
 changer(){
    this.setState({
        counter:this.state.counter+1
    
    })

 }

  render() {
      return(
          <div>
              <h1 className="henry" onClick={()=>this.changer()}>Plus+1</h1>
              {this.props.children}
              <button>{this.state.counter}</button>
          </div>
      )
  }

  */
 /*
constructor()  {
    var condition;
    super()

  
        this.state={
            username:''

        }
}

check=(event)=>{
    this.setState({username:event.target.value})
} 
  render(){
      if(this.state.username==""){
          this.condition="empty"
      }
      else{
        if(this.state.username.length<8)
      {
          this.condition="length is less than 8"
      }
      else{
          this.condition="good to go"
      }
      }
        
return(

    <div>
        <label>Username</label>
        <input id="text" onKeyUp={this.check} type="text"/>  
        <button >Submit</button>  
        {this.state.username}
        <h2>{this.condition}</h2>
        
    </div>
)

  }
  */

 
 constructor(props){
    
        super(props)
        this.state={
            like:240,
            unlike:60,
            likeButton:'like',
            unlikeButton:'unlike',
            liketoogle:false,
            unliketoogle:false
            

        }
       
        
    }
    
    
    likeChange()
        {
        if(this.state.unliketoogle)
        {
            this.setState({
                unlike:this.state.unlike-1,
                unliketoogle:false,
                unlikeButton:'unlike'
            })
        }
        
        if(this.state.liketoogle)
        {

            this.setState({
                liketoogle:false,
                like:this.state.like-1,
                likeButton:'like'
            })
        }
        else
        {
            this.setState({
                like:this.state.like+1,
                liketoogle:true,
                likeButton:'liked'
            })
        }
        
        }


        unlikeChange(){
            if(this.state.liketoogle)
            {
                this.setState({
                    like:this.state.like-1,
                    liketoogle:false,
                    likeButton:'like'
                })
            }



            if(this.state.unliketoogle)
            {

                this.setState({
                    unliketoogle:false,
                    unlike:this.state.unlike-1,
                    unlikeButton:'unlike'
                })
            }

            else{
                this.setState({
                    unlike:this.state.unlike+1,
                    unliketoogle:true,
                    unlikeButton:'unliked'
                })
            }
            
        }

  render(){
    
   
    console.log(this.hello)
    
    return(
        <div>

    <button id="like" onClick={()=>this.likeChange()} >{this.state.likeButton}</button>
    <button id="unlike" onClick={()=>this.unlikeChange()}>{this.state.unlikeButton}</button>
    <h3>Likes: {this.state.like} & dislikes :{this.state.unlike}</h3>
    <h2>{this.state.liketoogle}</h2>
   
        </div>
    )
  }

}

 



    export  default Hello; 
