import './Login.scss'
import { TextField, Button } from '@mui/material'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useController, useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';
import { useContext, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from '../../context/AuthContext';
import LoaderComp from '../homepage/loader';
const Login = () =>{
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const {updateUser} = useContext(AuthContext)
    const schema = yup.object().shape({
        username: yup.string().required("User name is required").matches(/^[a-zA-Z0-9]+$/, 'Avoid using special characters'),
        password: yup.string().required("Password is required").matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/),
    })
    const {register, handleSubmit, formState: { errors }} = useForm({ resolver: yupResolver(schema) });
    
    const onSubmitHandler = async (e) =>{
        setIsLoading(true)
        const username = e.username
        const password = e.password
        try{
            const res = await apiRequest.post("/auth/login", {
                username,password
            })
            updateUser(res.data)
            navigate("/")
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
        <div className='login'>
            <div className="formContainer">
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <h1>Welcome back</h1>
                    <TextField id="username" label="User name" {...register('username')} variant='outlined' error={!!errors.username} helperText={errors.username?.message}/>
                    <TextField id="password" label="Password" variant='outlined'{...register('password')} type='password' error={!!errors.password} helperText={errors.password?.message}/>
                    <Button disabled={isLoading} variant="contained" style={{ marginTop: '20px' }} type="submit">Submit</Button>
                    <Link to="/register">{"Don't"} you have an account?</Link>
                </form>
            </div>
            <ToastContainer />
            <div className="imgContainer">
                <img src='/bg.png' alt=''/>
            </div>
        </div>
    )
}

export default Login;