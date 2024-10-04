import './Register.scss'
import { TextField, Button } from '@mui/material'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useController, useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () =>{
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const schema = yup.object().shape({
        username: yup.string().required("User name is required").matches(/^[a-zA-Z0-9]+$/, 'Avoid using special characters'),
        email: yup.string().email("Invalid Email").required("Email is required"),
        phonenumber: yup.string().required("Phone number is required").matches(/^(\d{9})$/, 'Invalid phone number'),
        password: yup.string().required("Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,32}$/,
        'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character').min(8, "Password must be atleast 8 characters").max(32, "Password can't exceed 32 characters"),
      });

      const {register, handleSubmit, formState: { errors }} = useForm({ resolver: yupResolver(schema) });
    
    const onSubmitHandler = async (e) =>{
        setIsLoading(true)
        const username = e.username
        const email = e.email
        const phonenumber = e.phonenumber
        const password = e.password
        try{
        const res = await apiRequest.post("/auth/register",{
            username, email, phonenumber, password            
        })
        
        navigate("/login")
        }catch(err){
            console.log(err)
            setError(err.response?.data?.message)
            toast.error(error, {
                position: "top-center",
                autoClose: 2000, 
              });    
        }finally{
            setIsLoading(false)
        }
    }

    return(
        <div className='register'>
            <div className="formContainer">
                <form onSubmit={handleSubmit(onSubmitHandler)}> 
                    <h1>Create an Account</h1>
                <TextField id="username" label="User name" variant="outlined" {...register('username')} error={!!errors.username} helperText={errors.username?.message} />
                <TextField id="email" label="Email" variant="outlined"  {...register('email')} error={!!errors.email} helperText={errors.email?.message}/>
                <TextField id="phonenumber" label="Phone Number" variant="outlined" {...register('phonenumber')} error={!!errors.phonenumber} helperText={errors.phonenumber?.message} />
                <TextField id="password" label="password" type="password" variant="outlined" style={{ marginTop: '20px' }} {...register('password')} error={!!errors.password} helperText={errors.password?.message}/>
                <Button disabled={isLoading} variant="contained" style={{ marginTop: '20px' }} type="submit">Submit</Button>
                <Link to="/login">Do you have an account?</Link>
                </form>
            </div>
            <ToastContainer />
            <div className="imgContainer">
                <img src='/bg.png' alt=''/>
            </div>
        </div>
    )
}

export default Register;