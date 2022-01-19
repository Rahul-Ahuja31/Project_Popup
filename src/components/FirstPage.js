import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const FirstPage = () => {

    const[details,setDetails]=useState({
        fname:"",
        lname:"",
        address:"",
        city:"",
        country:""
    });

    const formSubmit=(e)=>{
        e.preventDefault();
        console.log(details);
       setDetails(details);
    }

    const formChange=(e)=>
    {
      setDetails({...details,[e.target.name]:e.target.value})
    }

        let navigate=useNavigate();
    
        return (

        <div>
            <div><h1 className='text-light bg-primary'>User Details</h1></div>
            <form action='' onSubmit={formSubmit}>
            
            <div>
            <label>First Name</label>
                <input type="text"
                       required
                       name="fname"
                       onChange={formChange}
                         />
            </div>        
                        
            <div>
            <label>Last Name</label>
                <input type="text"
                       required
                       name="lname"
                       
                       onChange={formChange}
                        />
            </div>            
            
            <div>
            <label>Address</label>
                <input type="text"
                       required
                       name="address"
                       
                       onChange={formChange}
                        /> 
            </div>

            <div>
            <label>City</label>
                <input type="text"
                       required
                       name="city"
        
                       onChange={formChange}
                        /> 
            </div>
                        
                
            <div>
            <label>Country</label>
                <input type="text"
                       required
                       name="country"
                       
                       onChange={formChange}
                        />
            </div>
            
            <div> 
                   <button type='submit' className='btn btn-success' onClick={() =>{navigate("/SecondPage",{state:details})}}>Submit</button>
            </div> 

            </form>            
        </div>
    )
}