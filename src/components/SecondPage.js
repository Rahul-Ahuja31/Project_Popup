import React,{ useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const SecondPage = () => {
    let navigate=useNavigate();
    const{state}=useLocation();
    
    console.log(state);

    const[empdetails,setEmpDetails]=useState({
        empname:"",
        empaddress:"",
        fname:state.fname,
        lname:state.lname,
        address:state.address,
        city:state.city,
        country:state.country
        
    });

    const formChange=(e)=>
    {
      setEmpDetails({...empdetails,[e.target.name]:e.target.value}) 
    //   setEmpDetails(empdetails);
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(empdetails);
       setEmpDetails(empdetails);
    }

    console.log(empdetails)

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

            {/* <tr>
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
            </tr> */}
                      
            </table>

            <form action='' onSubmit={onSubmit}>
            <div>
            <label>Employee Name</label>
                <input type="text"
                       required
                       name="empname"
                       onChange={formChange}/>
            </div>

            <div>
            <label>Employee Address</label>
                <input type="text"empdetails
                       required
                       name="empaddress"
                       onChange={formChange}/>
            </div>
            

            <button type='submit' className='btn btn-primary' onClick={() =>{navigate("/Popup",{state:empdetails})}}>Next</button>
            </form>
        </div>
    )
}
