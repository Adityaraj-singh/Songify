import React,{Component} from 'react'

class Sampion extends Component{

constructor(){


    super()
    this.state={
        name:'John Newman'
    }
}


componentWillUnmount(){

    console.log('unmounted by child component')
}

componentWillReceiveProps(){
    console.log('recieved')
}


    render(){

    
    return(
       
        <div>
            <h1>Rendered component{this.props.namess}</h1>
        </div>
    )
    }
}

export default Sampion;