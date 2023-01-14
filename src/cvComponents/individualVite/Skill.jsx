import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { skillInformation } from '../../redux/action/action'
import CvButton from '../CvButton'
import Input from '../input'

const Skill = () => {
    const init = {
        skillName:'',
        skillLevel:''
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
            dispatch(skillInformation(addOnes))

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
        const {skillName,skillLevel} = value
        if(!skillName){
            errors.skillName = 'Invalid Skill Name'
        }
          return{
            errors,
            isValid:Object.keys(errors).length === 0
        }
    }

    const handleCheck = (e) => {
       value.skillLevel = e.target.value
    }

    //add one
    const addOne = (e) => {
        addOnes.push(value)
        console.log('array data',addOnes)
        setMsg(true)
    }

  return (
    <div>
        <h1 className='text-center font-semibold text-2xl mt-4 text-slate-600'>Skill Information</h1>
        {msg && <h1 className='text-center font-semibold text-xl mt-4 text-red-700'> One Qualification Added Successfully</h1>}
        <Input 
        Placeholder='Enter Your Skill Name'
        Name='skillName'
        Value={value.skillName}
        OnChange={handleChange}
        Error={errors.skillName}
        />
       <div className='w-96 h-40 bg-gray-50  m-auto'>
        <h1 className='mt-2 mb-1 font-semibold'>Skill Level</h1>
       <select className='w-96 h-10 bg-gray-200 rounded-md' name={value.skillLevel} onChange={handleCheck} >
           {/*} {optionData.map((d) => {
                return (
                    <option value={value.skillLevel}>{d}</option>
                )
            })}*/}
            <option value="10" name='slillLevel'>10</option>
            <option value="20" name='slillLevel'>20</option>
            <option value="30" name='slillLevel'>30</option>
            <option value="40" name='slillLevel'>40</option>
            <option value="50" name='slillLevel'>50</option>
            <option value="60" name='slillLevel'>60</option>
            <option value="70" name='slillLevel'>70</option>
            <option value="80" name='slillLevel'>80</option>
            <option value="90" name='slillLevel'>90</option>
            <option value="100" name='slillLevel'>100</option>
        </select>
       </div>
        <div className='w-96 h-10 m-auto mt-6'>

            <button className='w-48 h-8 rounded-md bg-emerald-400 mt-4' onClick={addOne}>Add one</button>
            <Link to='/templateone'>
                <CvButton Text='Submit' OnClick={handleSubmit} bg='bg-green-400' />
            </Link>

        </div>
    </div>
  )
}

export default Skill