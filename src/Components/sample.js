import React,{Component} from 'react'
import Sampion from './Classtest'
class Sample extends Component{

    constructor(props){

        super(props)
        this.state={
            name:'Adityaraj singh',
            status:true,
            count:0
        }

    }

    increment(){
        this.setState({count:this.state.count + 1,
            status:!this.state.status
        })
   document.title=`clicked ${this.state.count} times`
    } 
   decrement(){
        this.setState({count:this.state.count - 1,
            status:!this.state.status
        })
        
    }


  
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('snapshot before update')
        return null
    }
    componentDidMount(){
        console.log(' parent componentmounted')
    }
    componentDidUpdate(){
        console.log(' parent componentupdatedd')
    }
    componentWillReceiveProps(){

        console.log('Parent component recieve props')
    }


    render(){
   
        return(
            <div className="sample">
                <h1 className="text-4xl">Class Component {this.state.name}  count: {this.state.count}</h1>
                
            <button  className="bg-red-400" onClick={this.increment.bind(this)}>increment</button><br/>
            <button  className="bg-red-400" onClick={this.decrement.bind(this)}>decrement</button><br/>
           {this.state.status ? <Sampion namess="peter pretigie"/>: null}

            </div>

        )
    }
}


export default Sample