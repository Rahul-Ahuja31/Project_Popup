import React from 'react'
import "./Form.css";
import { useNavigate } from 'react-router-dom';
// import NextPage from './NextPage';

const Form = () => {

    let navigate = useNavigate();
  
    return (
        <div>
            <form action= "">
                <div>
                    <label htmlFor='name'>UserId</label>
                    <input type="text" name="name" id="name" autoComplete="off"  ></input>
                </div>

                <button type='submit' onClick={() =>{navigate("/NextPage")}} className="btn_login">Login</button>
            </form>
        </div>
    )
}
export default Form;