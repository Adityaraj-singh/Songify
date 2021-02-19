import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap'
import './MyStyle.css';
var array=[
  {
      id:1,
      name:'trimmer',
      price:3600,
      company:'philips'
  },
  {
      id:2,
      name:'samsung Mobile',
      price:12000,
      company:'samsung'
  },
  {
      id:3,
      name:'laptop',
      price:440,
      company:'HP'
  },
  {
      id:4,
      name:'headphones',
      price:22000,
      company:'boat'
  },
  {
      id:5,
      name:'Charger',
      price:100,
      company:'Micromax'
  },
  {
      id:6,
      name:'jeans',
      price:1200,
      company:'Denim'
  }
  ,{
    id:7,
    name:'dinner set',
    price:29000,
    company:'crokey'
}


]

const Drop=()=>{
var sortby=0
const [items,Setitems]=useState(array)

function show(e)
{
sortby=e.target.value
if(sortby!=0)
{
  Setitems(array.filter(list=>list.price < sortby))
  

}
else{
  Setitems(array)
  
}

}

return(
    <div>
      <Form.Group controlId="exampleForm.SelectCustomSizeSm"  >
    <Form.Label>Sort by price</Form.Label>
    <Form.Control as="select" onChange={show} size="sm" custom>
    <option value='0'>none</option>
      <option value='1000'>under 1000</option>
      <option value="5000">under 5,000</option>
      <option value="10000">under 10,000</option>
      <option value="20000">under 20,000</option>
      
    </Form.Control>
  </Form.Group>
<div className="block">
  
  {
   items.map(list=>(<div key={items.id} id="tweet">
     <h3>{list.name}</h3>
     <p>{list.price} $</p>
     <p>{list.company}</p>
   </div>))
  }
  
  </div>
    </div>
)

}
export default Drop;