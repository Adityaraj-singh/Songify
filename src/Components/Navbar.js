import React from 'react'

import './MyStyle.css';

import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {AiFillStar} from 'react-icons/ai'
import {BsMusicPlayerFill} from 'react-icons/bs'
function Navbar()
{

    const Navstyle={backgroundColor: 'slateblue'};
    const text={color:'black'}
    return(
    
    
    
   <Nav fill variant="pills" id="navbar" defaultActiveKey="home" className=" justify-content-center fixed-bottom bg-red-500">

    <Nav.Item > 
      <Nav.Link   eventKey="home" ><center>
          <Link to='/'><span  style={text}> <b>Home<IoMdHome/></b></span></Link>  
          </center>   
       </Nav.Link>
    </Nav.Item>
    
    <Nav.Item>
      <Nav.Link eventKey="link-1">
      <center> 
          <Link to='/Myprofile'> 
        
         <span style={text}> <b>Liked<AiFillStar/></b></span>
         
          </Link>
          </center>
          </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">
        <center><Link to='/settings'><span style={text}><b>Player<BsMusicPlayerFill/></b></span></Link>
        </center></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link 4" >
        <Link to='/Likes'>
                 <span style={text}><b>My Orders</b></span>
        </Link>

      </Nav.Link>
    </Nav.Item>
  </Nav>
       
    )
}

export default Navbar;