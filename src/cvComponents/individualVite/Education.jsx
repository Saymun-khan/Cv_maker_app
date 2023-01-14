import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { educationalInformation } from '../../redux/action/action'
import CvButton from '../CvButton'
import Input from '../input'

const Education = () => {
    //dispatch
    const dispatch = useDispatch()
    const init = {
        schoolName:'',
        year:'',
        degree:'',
        result:'',
    }
    const [value,setValue] = useState({...init})
    const [errors,setErrors] = useState({...init})
    const [msg,setMsg] = useState(false)
    const [addOnes,setAddOnes] = useState([])

    //handle submit
    const handleSubmit = (e) => {
        const {errors,isValid} = validity(value)
        if(isValid){
            setErrors('')
            console.log(value)
            addOne()
            dispatch(educationalInformation(addOnes))
        }else{
            setErrors({...errors})
        }
    }

    //handle change
    const handleChange = (e) => {
        e.preventDefault()
        setValue((prev) => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
        setMsg(false)
    }
    //check validity
    const validity = (value) => {
        const errors = {}
        const {schoolName,year,result,degree} = value
        if(!schoolName){
            errors.schoolName = 'Invalid School Name'
        }
        if(!year){
            errors.year = 'Invalid Passing Year'
        }
        if(!degree){
            errors.degree = 'Invalid Qualification'
        }
        if(!result){
            errors.result = 'Invalid Result'
        }
        return{
            errors,
            isValid:Object.keys(errors).length === 0
        }
    }

    const addOne = (e) => {
        addOnes.push(value)
        console.log('array data',addOnes)
        setMsg(true)
    }

  return (
    <div>
        <h1 className='text-center font-semibold text-2xl mt-4 text-slate-600'>Educational Qualification</h1>
        {msg && <h1 className='text-center font-semibold text-xl mt-4 text-emerald-700'> One Qualification Added Successfully</h1>}
        {!msg && <h1 className='text-center font-semibold text-xl mt-4 text-red-700'>Add onther educational skill</h1>}
        <Input 
        Placeholder='Enter Your School Name'
        Name='schoolName'
        Value={value.schoolName}
        OnChange={handleChange}
        Error={errors.schoolName}
        />
        <Input 
        Placeholder='Enter Passing Year'
        Name='year'
        Value={value.year}
        OnChange={handleChange}
        Error={errors.year}
        />
        <Input 
        Placeholder='Enter Your Educational Stage'
        Name='degree'
        Value={value.degree}
        OnChange={handleChange}
        Error={errors.degree}
        />
        <Input 
        Placeholder='Enter Your Result'
        Name='result'
        Value={value.result}
        OnChange={handleChange}
        Error={errors.result}
        />
        <div className='w-96 h-10 m-auto mt-6'>

            <button className='w-48 h-8 rounded-md bg-emerald-400 mt-4' onClick={addOne}>Add one</button>
            <CvButton Text='Submit' OnClick={handleSubmit} bg='bg-red-500' />
            
        </div>
    </div>
  )
}

export default Education