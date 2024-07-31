import './Register.scss'
import { TextField, Button } from '@mui/material'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useController, useForm } from "react-hook-form";
const Register = () =>{
    const schema = yup.object().shape({
        username: yup.string().matches(/^[a-zA-Z0-9]+$/, 'Avoid using special characters').required("User name is required"),
        email: yup.string().email("Invalid Email").required("Email is required"),
        phonenumber: yup.string().matches(/^(\d{3})-(\d{3})-(\d{3})$/, 'Invalid phone number').required("Phone number is required"),
        password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,32}$/,
        'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character').min(8, "Password must be atleast 8 characters").max(32, "Password can't exceed 32 characters").required("Password is required"),
      });

      const {register, handleSubmit, formState: { errors }, reset} = useForm({ resolver: yupResolver(schema) });
    
    const onSubmitHandler = (data) =>{
        console.log(data);
        reset();
    }

    return(
        <div className='register'>
            <div className="formContainer">
                <form onSubmit={handleSubmit(onSubmitHandler)}> 
                <TextField id="username" label="User name" variant="outlined" {...register('username')} error={!!errors.username} helperText={errors.username?.message} /><br></br><br></br>
                <TextField id="email" label="Email" variant="outlined"  {...register('email')} error={!!errors.email} helperText={errors.email?.message}/><br></br><br></br>
                <TextField id="phonenumber" label="Phone Number" variant="outlined" {...register('phonenumber')} error={!!errors.phonenumber} helperText={errors.phonenumber?.message} /><br></br>
                <TextField id="password" label="password" type="password" variant="outlined" style={{ marginTop: '20px' }} {...register('password')} error={!!errors.password} helperText={errors.password?.message}/><br></br>
                <Button variant="contained" style={{ marginTop: '20px' }} type="submit">Submit</Button>
                </form>
            </div>

            <div className="imgContainer">
                <img src='/bg.png' alt=''/>
            </div>
        </div>
    )
}

export default Register;