import "./newPostPage.scss"
import apiRequest from "../../lib/apiRequest";
import { useForm } from "react-hook-form";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TextField, Button } from '@mui/material'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NewPostPage = ()=>{
    const [value, setValue] = useState("");
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const schema = yup.object().shape({
        title: yup.string().required("A title is required").matches(/^[a-zA-Z]+$/, 'Avoid using special characters'),
        price: yup.number().required("A price is required").positive("Amount must be greater than 0").min(1, "Amount must be greater than 0"),
        address: yup.string().required("An address is required").matches(/^[a-zA-Z]+$/, 'Avoid using special characters'),
        city: yup.string().required("A city is required").matches(/^[a-zA-Z]+$/, 'Avoid using special characters'),
        bedroom: yup.number().required("Bedroom number is required").positive("Bedroom number be greater than 0").min(1, "Bedroom number must be greater than 0"),
        bathroom: yup.number().required("Bathroom number is required").positive("Bathroom number be greater than 0").min(1, "Bathroom number must be greater than 0"),
        latitude: yup.number().required("Latitude is required"),
        longitude: yup.number().required("Longitude is required"),
        size: yup.number().required("House size is required").positive("House size must be greater than 0").min(1, "House size must be greater than 0"),
        income: yup.string().required("Income policy is required").matches(/^[a-zA-Z]+$/, 'Avoid using special characters'),
    });
    const {register, handleSubmit, formState: { errors }} = useForm({ resolver: yupResolver(schema) });
    const onSubmitHandler= async (e)=>{
      try {
        const res = await apiRequest.post("/posts", {
          postData: {
            title: e.title,
            price: parseInt(e.price),
            address: e.address,
            city: e.city,
            bedroom: parseInt(e.bedroom),
            bathroom: parseInt(e.bathroom),
            type: e.type,
            property: e.property,
            latitude: e.latitude,
            longitude: e.longitude,
            images: images,
          },
          postDetail: {
            desc: value,
            utilities: e.utilities,
            pet: e.pet,
            income: e.income,
            size: parseInt(e.size),
            school: parseInt(e.school),
            bus: parseInt(e.bus),
            restaurant: parseInt(e.restaurant),
          },
        });
        navigate("/"+res.data.id)
      } catch (err) {
        console.log(err);
        setError(err.response?.data?.message)
            toast.error(error, {
                position: "top-center",
                autoClose: 2000, 
              });    
      }
    } 
    return(
        <div className="newPostPage">
        <div className="formContainer">
          <h1>Add New Post</h1>
          <div className="wrapper">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <TextField id="title" label="Title" variant="outlined" {...register('title')} error={!!errors.title} helperText={errors.title?.message}/>
              <TextField id="price" label="Price" variant="outlined" type="number" {...register('price')} error={!!errors.price} helperText={errors.price?.message}/>
              <TextField id="address" label="Address" variant="outlined" {...register('address')} error={!!errors.address} helperText={errors.address?.message}/>
              
              <div className="item description">
                <label htmlFor="desc">Description</label>
                {/* <textarea >  </textarea> */}
                <ReactQuill theme="snow" onChange={setValue} value={value} />
              </div>

              <TextField id="city" label="City" variant="outlined" {...register('city')} error={!!errors.city} helperText={errors.city?.message}/>
              <TextField id="bedroom" label="Bedroom Number" variant="outlined" type="number" {...register('bedroom')} error={!!errors.bedroom} helperText={errors.bedroom?.message}/>
              <TextField id="bathroom" label="Bathroom Number" variant="outlined" type="number" {...register('bathroom')} error={!!errors.bathroom} helperText={errors.bathroom?.message}/>
              <TextField id="latitude" label="Latitude" variant="outlined" type="number" {...register('latitude')} error={!!errors.latitude} helperText={errors.latitude?.message}/>
              <TextField id="longitude" label="Longitude" variant="outlined" type="number" {...register('longitude')} error={!!errors.longitude} helperText={errors.longitude?.message}/>
              <TextField id="size" label="Total Size(sqft)" variant="outlined" type="number" {...register('size')} error={!!errors.size} helperText={errors.size?.message}/>
              <TextField id="school" label="Number of School arround" variant="outlined" type="number" {...register('school')}/>
              <TextField id="bus" label="Number of bus stop arround" variant="outlined" type="number" {...register('bus')}/>
              <TextField id="restaurant" label="Number od restaurant arround" variant="outlined" type="number" {...register('restaurant')}/>
              <TextField id="income" label="Income policy" variant="outlined" {...register('income')} error={!!errors.income} helperText={errors.income?.message}/>
              <div className="item">
                <label htmlFor="type">Type</label>
                <select name="type" {...register('type')}>
                  <option value="rent" defaultChecked>
                    Rent
                  </option>
                  <option value="buy">Buy</option>
                </select>
              </div>
              <ToastContainer />
              <div className="item">
                <label htmlFor="type">Property</label>
                <select name="property" {...register('property')}>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>
  
              <div className="item">
                <label htmlFor="utilities">Utilities Policy</label>
                <select name="utilities" {...register('utilities')}>
                  <option value="owner">Owner is responsible</option>
                  <option value="tenant">Tenant is responsible</option>
                  <option value="shared">Shared</option>
                </select>
              </div>

              <div className="item">
                <label htmlFor="pet">Pet Policy</label>
                <select name="pet" {...register('pet')}>
                  <option value="allowed">Allowed</option>
                  <option value="not-allowed">Not Allowed</option>
                </select>
              </div>
              <button className="sendButton">Add</button>
            </form>
          </div>
        </div>
        <div className="sideContainer">
          {images.map((image, index) => (
            <img src={image} key={index} alt="" />
          ))}
          <UploadWidget
            uwConfig={{
              multiple: true, 
              cloudName: "alban",
              uploadPreset: "estate",
              folder: "posts",
            }}
            setState={setImages}    
          />
        </div>
      </div>
    )
}
export default NewPostPage;