import { useState } from "react"
import { Link } from "react-router-dom"
import CvButton from "./CvButton"
const CvHome = () => {
    

    const [show,setShow] = useState(false)
    const [showOne,setShowOne] = useState(false)
    const [showTwo,setShowTwo] = useState(false)

    const handleShow = () => {
        setShow(cur => !cur)
    }

    const handleShowOne = () => {
        setShowOne(cur => !cur)
    }

    const handleShowTwo = () => {
        setShowTwo(cur => !cur)
    }
    return(
        <div className='mt-4 grid grid-cols-2'>
            <div>
                <div className="text-center text-2xl md:text-6xl font-bold">
                    <h1>Your resume</h1>
                    <h1 className="md:mt-6 mt-2">in three <span className="text-blue-600">easy</span></h1>
                    <h1 className="md:mt-6 mt-2">steps</h1>
                    <div className="justify-center ml-4 md:ml-40 md:mt-20 mt-4">
                        <CvHomeLeft Number='1' Text='Field all required fields in form' />
                        <CvHomeLeft Number='2' Text='Select a template from our collection' />
                        <CvHomeLeft Number='3' Text='Download resume' />
                    </div>
                </div>
                
            </div>
           
           <div>

           <h1 className="text-xl font-semibold text-pink-600">Make your own cv</h1>
            <CvButton Text='Buiseness Vite' bg='bg-teal-400'/>
            <Link to='/individualvite'>
                <CvButton Text='Individual Vite' bg='bg-orange-400' text='text-white'/>
            </Link>
            <CvButton Text='Company Vite' bg='bg-teal-400' />
            <CvButton Text='Devoloper Vite' bg='bg-teal-400' />
           </div>

        </div>
    )
}


export default CvHome;

export const CvHomeLeft = ({Number,Text}) => {
    return (
        <div className="flex mt-2 md:mt-8">
            <div className="w-8 text-center rounded-sm mr-2 md:mr-4 text-gray-600 font-semibold text-sm md:text-xl h-8 bg-gray-300 ">
                {Number}
            </div>
            <div className="text-center rounded-sm mr-4 text-gray-400 font-semibold text-sm md:text-xl">
                {Text}
            </div>
        </div>
    )
}