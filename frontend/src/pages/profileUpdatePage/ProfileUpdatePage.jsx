import "./profileupdatepage.scss"
import { TextField, Button } from '@mui/material'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import apiRequest from '../../lib/apiRequest';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget"
const ProfileUpdatePage=()=>{
    const [isLoading, setIsLoading] = useState(false)
    const {currentUser, updateUser} = useContext(AuthContext)
    const [avatar, setAvatar] = useState([])
    const [error,setError] = useState("")
    const navigate = useNavigate()
    const schema = yup.object().shape({
        username: yup.string().required("User name is required").matches(/^[a-zA-Z0-9]+$/, 'Avoid using special characters'),
        email: yup.string().email("Invalid Email").required("Email is required"),
        phonenumber: yup.string().required("Phone number is required").matches(/^(\d{9})$/, 'Invalid phone number'),
        password: yup.string()
        .nullable() // Allow null value
        .notRequired() // Make it optional
        .test('is-valid-password', 'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character', 
            value => {
                // If the password is empty, it's valid
                if (!value) return true; 
                // If not empty, check the regex
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,32}$/.test(value);
            }),
    });

      const {register,handleSubmit, formState: { errors }} = useForm({ resolver: yupResolver(schema) });

      const onSubmitHandler= async(e)=>{
        //setIsLoading(true)
        const username = e.username
        const email = e.email
        const phonenumber = e.phonenumber
        const password = e.password 
        //console.log(username)
        try{
            const res = await apiRequest.put(`/users/${currentUser.id}`, {
                username,email,phonenumber,password,avatar:avatar[0]
            })
            updateUser(res.data)
            toast.success("Account updated successfuly!", {
                position: "top-center",
                autoClose: 2000, 
              });
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
        <div className="profileUpdatePage">
        <div className="formContainer">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <h1>Update Profile</h1>
                <TextField id="username" label="User name" variant="outlined" defaultValue={currentUser.username} {...register('username')} error={!!errors.username} helperText={errors.username?.message} />
                <TextField id="email" label="Email" variant="outlined"  defaultValue={currentUser.email} {...register('email')} error={!!errors.email} helperText={errors.email?.message}/>
                <TextField id="phonenumber" label="Phone Number" variant="outlined" defaultValue={currentUser.phonenumber} {...register('phonenumber')} error={!!errors.phonenumber} helperText={errors.phonenumber?.message} />
                <TextField id="password" label="password" type="password" variant="outlined"  style={{ marginTop: '20px' }} {...register('password')} error={!!errors.password} helperText={errors.password?.message}/>
                <Button disabled={isLoading} variant="contained" style={{ marginTop: '20px' }} type="submit">Update</Button>
          </form>
        </div>
        <ToastContainer/>
        <div className="sideContainer">
          <img src={avatar[0] || currentUser.avatar || "/avatar.png"} alt="" className="avatar" />
          <UploadWidget uwConfig={{
            cloudName: "alban",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder:"avatars"
          }} setState={setAvatar}/>
        </div>
      </div>
    )
}

export default ProfileUpdatePage;