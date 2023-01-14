import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { contactInformation } from '../../redux/action/action'
import CvButton from '../CvButton'
import Input from '../input'

const ContactInfo = () => {
    //dispatch
    const dispatch = useDispatch()
    const init = {
        phone:'',
        email:'',
        website:'',
        addressLineOne:'',
        facebook:'',
        linkdin:'',
        github:''
    }
    const [value,setValue] = useState({...init})
    const [errors,setErrors] = useState({...init})

    //handle submit
    const handleSubmit = (e) => {
        const {errors,isValid} = validity(value)
        if(isValid){
            setErrors('')
            console.log(value)
            dispatch(contactInformation(value))
        }else{
            setErrors({...errors})
        }
    }

    //handle change
    const handleChange = (e) => {
        setValue((prev) => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    //check validity
    const validity = (value) => {
        const errors = {}
        const {phone,email,website,addressLineOne,facebook,linkdin,github} = value
        if(!phone){
            errors.phone = 'Invalid Phone'
        }
        if(!email){
            errors.email = 'Invalid Email'
        }
        if(!website){
            errors.website = 'Invalid Website'
        }
        if(!addressLineOne){
            errors.addressLineOne = 'Invalid Address'
        }
        if(!facebook){
            errors.facebook = 'Invalid facebook'
        }
        if(!linkdin){
            errors.linkdin = 'Invalid linkdin'
        }
        if(!github){
            errors.github = 'Invalid github'
        }
        return{
            errors,
            isValid:Object.keys(errors).length === 0
        }
    }
  return (
    <div>
        <h1 className='text-center font-semibold text-2xl mt-4 text-slate-600'>Contact Information</h1>
        <Input 
        Placeholder='Enter Your Phone'
        Name='phone'
        Value={value.phone}
        OnChange={handleChange}
        Error={errors.phone}
        />
        <Input 
        Placeholder='Enter Your Email'
        Name='email'
        Value={value.email}
        OnChange={handleChange}
        Error={errors.email}
        />
        <Input 
        Placeholder='Enter Your Website'
        Name='website'
        Value={value.website}
        OnChange={handleChange}
        Error={errors.website}
        />
        <Input 
        Placeholder='Enter Your Address'
        Name='addressLineOne'
        Value={value.addressLineOne}
        OnChange={handleChange}
        Error={errors.addressLineOne}
        />
        <Input 
        Placeholder='Enter Your Facebook Id'
        Name='facebook'
        Value={value.facebook}
        OnChange={handleChange}
        />
        <Input 
        Placeholder='Enter Your Linkdin Id'
        Name='linkdin'
        Value={value.linkdin}
        OnChange={handleChange}
        />
        <Input 
        Placeholder='Enter Your Github Id'
        Name='github'
        Value={value.github}
        OnChange={handleChange}
        />
        <div className='w-40 h-10 m-auto mt-6'>
            <CvButton Text='Submit' bg='bg-teal-400' OnClick={handleSubmit} />
        </div>
    </div>
  )
}

export default ContactInfo