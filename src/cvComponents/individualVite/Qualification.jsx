import React from 'react'
import { useDispatch } from 'react-redux'
import { qualificationInformation } from '../../redux/action/action'
import Checkbox from '../CheckBox'
import CvButton from '../CvButton'

const Qualification = () => {
    //dispatch
    const dispatch = useDispatch()

    //check language
    const data = {
        language:[],
        hobbies:[]
    }
    const datas = (e) => {
        data.language.push(e.target.value)
        console.log(data.language)
    }
    //check hobbies

    const hobbys = (e) => {
        data.hobbies.push(e.target.value)
        console.log(data.hobbies)
    }

    const handleSubmit = () => {
        dispatch(qualificationInformation(data))
    }

    //array filter 

  return (
    <div>
        <div className='w-96 h-auto m-auto'>
            <h1 className='text-red-400 font-bold text-2xl mt-4'>Other Qualification</h1>
            <div>
                <h1 className='text-green-800 font-semibold mt-6'>Language</h1>
                <div className='grid grid-cols-2'>
                    <div>
                        <Checkbox Text='English' OnChange={datas} />
                        <Checkbox Text='Bangla' OnChange={datas} />
                        <Checkbox Text='Arabia' OnChange={datas} />
                    </div>
                <div>
                        <Checkbox Text='Spanish' OnChange={datas} />
                        <Checkbox Text='China' OnChange={datas} />
                        <Checkbox Text='Urdu' OnChange={datas} />
                </div>
                </div>
            </div>
            <div>
                <h1 className='text-orange-600 font-semibold mt-6'>Hobbies</h1>
               <div className='grid grid-cols-2'>
                <div>
                        <Checkbox Text='Reading' OnChange={hobbys} />
                        <Checkbox Text='Writing' OnChange={hobbys} />
                        <Checkbox Text='Programming' OnChange={hobbys} />
                </div>
                    <div>
                        <Checkbox Text='Playing' OnChange={hobbys} />
                        <Checkbox Text='Singing' OnChange={hobbys} />
                        <Checkbox Text='Travelling' OnChange={hobbys} />
                    </div>
               </div>
            </div>
            <CvButton Text='submit' OnClick={handleSubmit} bg='bg-red-400' />
        </div>

    </div>
  )
}

export default Qualification