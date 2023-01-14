import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { personalInformation } from '../../redux/action/action'
import CvButton from '../CvButton'
import Input from '../input'

const PersonalInfo = () => {
    const init = {
        name:'',
        lastName:'',
        title:'',
        description:'',
        DOB:'',
        profile:''
    }
    const [value,setValue] = useState({...init})
    const [errors,setErrors] = useState({...init})
    const [valid,setValid] = useState(false)
    const [file,setFile] = useState()

    //dispatch
    const dispatch = useDispatch()

    //handle submit
    const handleSubmit = (e) => {
        const {errors,isValid} = validity(value)
        if(isValid){
            setValid(true)
            setErrors('')
            console.log(value)
            dispatch(personalInformation(value))
            console.log(file)
        }else{
            setErrors({...errors})
        }
    }

    //handle change
    const handleChange = (e) => {
        setValue((prev) => ({
            ...prev,
            [e.target.name]:e.target.value,
            [e.target.name === 'profile']:e.target.files
        }))
    }
    //check validity
    const validity = (value) => {
        const errors = {}
        const {name,lastName,title,description,DOB} = value
        if(!name){
            errors.name = 'Invalid First Name'
        }
        if(!lastName){
            errors.lastName = 'Invalid Last Name'
        }
        if(!title){
            errors.title = 'Invalid title Name'
        }
        if(!description){
            errors.description = 'Invalid description Name'
        }
        if(!DOB){
            errors.DOB = 'Invalid DOB'
        }
        return{
            errors,
            isValid:Object.keys(errors).length === 0
        }
    }

  return (
    <div>
        <h1 className='text-center font-semibold text-2xl mt-4 text-slate-600'>Personal Information</h1>
        <Input 
        Placeholder='Enter Your First Name'
        Name='name'
        Value={value.name}
        OnChange={handleChange}
        Error={errors.name}
        />
        <Input 
        Placeholder='Enter Your Last Name'
        Name='lastName'
        Value={value.lastName}
        OnChange={handleChange}
        Error={errors.lastName}
        />
        <Input 
        Placeholder='Enter Your Title'
        Name='title'
        Value={value.title}
        OnChange={handleChange}
        Error={errors.title}
        />
        <Input 
        Placeholder='Enter Your Description'
        Name='description'
        Value={value.description}
        OnChange={handleChange}
        Error={errors.description}
        />
        <Input 
        Placeholder='Enter your Date Of Birth'
        Name='DOB'
        Value={value.DOB}
        OnChange={handleChange}
        Error={errors.DOB}
        />
        <div className='w-40 h-40 m-auto'>
            <label htmlFor="file" className='font-semibold text-red-800'>Choose your profile</label>
            <input type="file" onChange={handleChange} name='profile' id='file' />
        </div>
        <div className='w-40 h-10 m-auto -mt-24'>
                 <CvButton Text='Submit' bg='bg-green-400' OnClick={handleSubmit} />
        </div>
    </div>
  )
}

export default PersonalInfo