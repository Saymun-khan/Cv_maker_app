import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { workInformation } from '../../redux/action/action'
import CvButton from '../CvButton'
import Input from '../input'

const WorkInfo = () => {
    const init = {
        jobTitle:'',
        companyName:'',
        duration:'',
        employerTitle:'',
        description:''
    }
    const [value,setValue] = useState({...init})
    const [errors,setErrors] = useState({...init})
    const [valid,setValid] = useState(false)
    const [msg,setMsg] = useState(false)
    const [addOnes,setAddOnes] = useState([])

    //dispatch
    const dispatch = useDispatch()

    //handle submit
    const handleSubmit = (e) => {
        const {errors,isValid} = validity(value)
        if(isValid){
            setValid(true)
            setErrors('')
            console.log(value)
            addOne()
            dispatch(workInformation(addOnes))
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
        const {jobTitle,employerTitle,duration,companyName,description} = value
        if(!jobTitle){
            errors.jobTitle = 'Invalid Job Title'
        }
        if(!employerTitle){
            errors.employerTitle = 'Invalid Employer Title'
        }
        if(!duration){
            errors.duration = 'Invalid Work Duration'
        }
        if(!companyName){
            errors.companyName = 'Invalid Company Name'
        }
        if(!description){
            errors.description = 'Invalid Description Data'
        }
        return{
            errors,
            isValid:Object.keys(errors).length === 0
        }
    }

        //add another one
        const addOne = (e) => {
            addOnes.push(value)
            console.log('array data',addOnes)
            setMsg(true)
        }
  return (
    <div>
        <h1 className='text-center font-semibold text-2xl mt-4 text-slate-600'>Work Information</h1>
        {msg && <h1 className='text-center font-semibold text-xl mt-4 text-red-700'> One Qualification Added Successfully</h1>}
        <Input 
        Placeholder='Enter Job Title'
        Name='jobTitle'
        Value={value.jobTitle}
        OnChange={handleChange}
        Error={errors.jobTitle}
        />
        <Input 
        Placeholder='Enter Your Company Name'
        Name='companyName'
        Value={value.companyName}
        OnChange={handleChange}
        Error={errors.companyName}
        />
        <Input 
        Placeholder='Enter Your Duration'
        Name='duration'
        Value={value.duration}
        OnChange={handleChange}
        Error={errors.duration}
        />
        <Input 
        Placeholder='Enter Your Employer Title'
        Name='employerTitle'
        Value={value.employerTitle}
        OnChange={handleChange}
        Error={errors.employerTitle}
        />
        <Input 
        Placeholder='Enter Your Job Description'
        Name='description'
        Value={value.description}
        OnChange={handleChange}
        Error={errors.description}
        />
        <div className='w-96 h-10 m-auto mt-6'>

            <button className='w-48 h-8 rounded-md bg-emerald-400 mt-4' onClick={addOne}>Add one</button>
            <CvButton Text='Submit' OnClick={handleSubmit} bg='bg-pink-500' />

        </div>
    </div>
  )
}

export default WorkInfo