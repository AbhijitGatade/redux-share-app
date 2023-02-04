import React, { useEffect, useState } from 'react'
import { changeValues } from '../state/user/userSlice';
import { addUser } from '../state/user/usersSlice';
import { useDispatch, useSelector } from 'react-redux';

function Entry() {

    let user = useSelector((state) => state.user);
    let users = useSelector((state)=> state.users);

    let [myuser, setMyUser] = useState(user);
    const dispatch = useDispatch();

    function handleChange(e){
        e.preventDefault();
        setMyUser({...myuser, [e.target.id]:e.target.value});        
    }

    function addNewUser(e){
        e.preventDefault();
        dispatch(addUser(myuser));
    }

    useEffect(()=>{
        dispatch(changeValues(myuser));
    }, [myuser]);

  return (
    <div className='row'>
        <div className='col-lg-12 text-center'>
            <div className='form-group'>
                <label>Name</label>
                <input type="text" value={ myuser.name } id="name" onInput={(e)=>{ handleChange(e) }} className='form-control' />                
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type="email" value={ myuser.email } id="email" onInput={(e)=>{ handleChange(e) }} className='form-control' />                
            </div>
            <div className='form-group'>
                <label>Mobile No</label>
                <input type="text" value={ myuser.mobileno } id="mobileno" onInput={(e)=>{ handleChange(e) }}  className='form-control' />                
            </div>
            <div className='form-group mt-2'>
                <button onClick={(e)=>{ addNewUser(e) }} className='btn btn-primary'>Add</button>
            </div>
        </div>
        <div className='col-lg-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u, i)=>{
                            return <tr key={ i }>
                                <td>{ i + 1 }</td>
                                <td>{ u.name }</td>
                                <td>{ u.email }</td>
                                <td>{ u.mobileno }</td>
                            </tr>
                        })
                    }                   
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Entry;