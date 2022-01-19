import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const SecondPage = () => {
    let navigate=useNavigate();

    const{state}=useLocation();
    console.log(state);

    return (
        <div>
        <h1>Verify Your Information</h1>
            <table className='table table-striped'>
            
            <tr>
                <th>Name</th>
                <td>{state.fname}</td>
            </tr>
            <tr>
                <th>LastName</th>
                <td>{state.lname}</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>{state.address}</td>
            </tr>
            <tr>
                <th>City</th>
                <td>{state.city}</td>
            </tr>
            <tr>
                <th>Country</th>
                <td>{state.country}</td>
            </tr>
                      
            </table>
            <button type='submit' className='btn btn-primary' onClick={() =>{navigate("/Popup",{state})}}>Next</button>
        </div>
    )
}