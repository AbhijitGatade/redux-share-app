import React from 'react'
import { useSelector } from 'react-redux';

function Display() {

  let user = useSelector((state) => state.user);
  
  return (
    <div className='row'>
        <div className='col-lg-12 text-center'>
                <b>Name:</b>{ user.name }<br />
                <b>Email:</b>{ user.email} <br />
                <b>Mobile No:</b>{ user.mobileno} <br />
        </div>
    </div>
  )
}

export default Display;