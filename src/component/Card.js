import React from 'react'
import Img from '../component/me.jpg'


export default function Card(props) {
    const fullname="kaouther"
    const lastname="sedghiani"
    const hundlename=() => {
    return alert(`my name is: ${fullname+' '+lastname}`)
  }
 
    
    return (
        <div className='card text-center bg-dark'>
            <img src={Img} alt="" width="100%" height="100%"/> 
            <div className='card-body text-light'>
                <h4 className='card-title'>{fullname}</h4>
                <h4 className='card-title'>{lastname} </h4>
                <a href="#!" onClick={hundlename} className='btn btn-outline-secondary rounded-0'>Click me</a>
            </div>
        </div>
    )
}
