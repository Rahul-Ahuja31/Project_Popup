import React ,{useState} from 'react'
 import Modal from 'react-modal'
 import { useLocation } from 'react-router-dom'


export const Popup = () => {

    const{state}=useLocation();

     const[IsModal,setIsModal]=useState(false);

     const clickHandler = () =>{
         alert('Form Submitted Succesfully!!!!!')
     }

    return (


        <div>
            <div><h1 className='txt txt-center'>Click Continue To Proceed</h1></div>

            <div>
            <button className='btn btn-primary' onClick={()=>setIsModal(true)}>Continue</button>
            </div>
            
        <div>
         <Modal isOpen={IsModal}> 
            <h1>Are you sure you want to continue?</h1>

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

            <div class="col-md-12 text-center">
                <button className='btn btn-success' onClick={clickHandler}>Submit</button>
                <button className='btn btn-danger' onClick={()=>setIsModal(false)}>Cancel</button>
            </div>

        </Modal>
        </div> 
        </div>
    )
}