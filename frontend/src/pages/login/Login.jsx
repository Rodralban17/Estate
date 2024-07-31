import './Login.scss'
import { TextField, Button } from '@mui/material'

import { useController, useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Login = () =>{
    const {handleSubmit} = useForm();
    
    const onSubmitHandler = (data) =>{
        console.log(data);
        //reset();
    }
    return(
        <div className='login'>
            <div className="formContainer">
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <h1>Welcome back</h1>
                    <TextField id="username" label="User name" variant='outlined'/>
                    <TextField id="password" label="Password" variant='outlined' type='password'/>
                    <Button variant="contained" style={{ marginTop: '20px' }} type="submit">Submit</Button>
                    <Link to="/register">{"Don't"} you have an account?</Link>
                </form>
            </div>

            <div className="imgContainer">
                <img src='/bg.png' alt=''/>
            </div>
        </div>
    )
}

export default Login;