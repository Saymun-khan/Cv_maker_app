import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import React, { useEffect, useRef, useState } from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { useSelector } from 'react-redux'


const TemplateOne = () => {
    const pdfRef = useRef(null)
    const data = useSelector((state) => state)
    console.log(data)
    const personalInfo = data.personalinfo.personalInformation
    const contactInfo = data.contactinfo.contactInformation
    console.log(contactInfo)
    const workInfo = data.workinfo.workInformation 
    const referenceInfo = data.referencinfo.referencesInformation
    const skillInfo = data.skillinfo.skillInformationSuccess 
    const qualificationInfo = data.qualificationinfo.qualificationInformation
    const [pdf,setPdf] = useState()

    //state mangement
    const [image,setImage] = useState(null)
    useEffect(() => {
        setImage(personalInfo.true[0])
    },[])    
    console.log('amar',image)

    //download pdf file


    const handlePdf = () => {
        html2canvas(pdfRef.current, {width:800,height:900}).then(canvas => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF()
            pdf.addImage(imgData,'JPEG',0,0)
            pdf.save('pageDownload.pdf')
        })
        console.log('pdf download successfully')
    }
  return (
    <div className='justify-center'>    
        <div className='flex p-4 w-11/12 h-auto m-auto shadow-xl shadow-gray-400' ref={pdfRef}>
            <div className='w-72 bg-gray-800'>
                <div>
                    <div className='w-24 h-24 ml-20 rounded-full bg-red-500 mt-4'>
                        {image && <img src={URL.createObjectURL(image)} alt="image not found" className='w-24 h-24 rounded-full mt-4' />}
                    </div>
                </div>
                <TemplateLeftBar Header='About me'>
                    <h1>
                        {personalInfo.description}
                    </h1>
                </TemplateLeftBar>
                
                <div>
                    <TemplateLeftBar Header='website and social links'>
                        <div className='mt-2'>
                            <h1 className='font-semibold'>Facebook:</h1>
                            <h1>facebook.com/{contactInfo.facebook}</h1>
                        </div>
                        <div className='mt-2'>
                            <h1 className='font-semibold'>Linkdin:</h1>
                            <h1>linkdin.com/{contactInfo.linkdin}</h1>
                        </div>
                        <div className='mt-2'>
                            <h1 className='font-semibold'>Facebook:</h1>
                            <h1>github.com/{contactInfo.github}</h1>
                        </div>
                    </TemplateLeftBar>
                </div>
                <div>
                    <TemplateLeftBar Header='References'>
                        {referenceInfo.map((reference) => {
                            return(
                                <div>
                                    <div className='mb-4'>
                                        <h1 className='font-semibold text-md mb-1'>{reference.name}</h1>
                                        <p>{reference.title}</p>
                                        <p className='mt-1 first-letter:text-blue-400'>Mobile:{reference.mobile}</p>
                                        <p className='first-letter:text-blue-400'>Email:{reference.email}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </TemplateLeftBar>
                </div>
                <div>
                    <TemplateLeftBar Header='Languages'>
                        <div className='grid grid-cols-2 mt-4'>
                            <div className='grid grid-cols-2'>
                                {qualificationInfo.language.map((d) => {
                                    return(
                                        <div className='flex'>
                                            <div className='w-3 h-3 rounded-full bg-slate-400 mr-2 mt-1'></div>
                                            <h1 className='text-sm'>{d}</h1>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </TemplateLeftBar>
                    <TemplateLeftBar Header='Hobbies'>
                        <div className='grid grid-cols-2 mt-4'>
                            <div className='grid grid-cols-2'>
                                {qualificationInfo.hobbies.map((d) => {
                                    return(
                                        <div className=''>
                                            <div className='w-3 h-3 rounded-full bg-yellow-400 mr-2 mt-1'></div>
                                            <h1 className='text-green-400 mt-1'>{d}</h1>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </TemplateLeftBar>
                </div>
            </div>
            <div className=''>
                <TemplateRightBar />
            </div>
        </div>
        <div className='w-72 rounded-md h-16 bg-orange-500 mt-10  mb-40 m-auto'>
            <button className='w-72 shadow-lg shadow-green-500 h-14 bg-blue-600 rounded-md' onClick={handlePdf}>download pdf</button>
        </div>
    </div>
  )
}

export default TemplateOne

export const TemplateLeftBar = ({Header,children}) => {
    return(
        <div className='mt-4 ml-4'>
                    <h1 className='uppercase font-semibold text-slate-400'>{Header}</h1>
                    <div className='mt-2 text-sm text-slate-100'>
                        {children}
                    </div>
                    <hr className='w-10/12 mt-6 mb-4' />
                </div>
    )
}

export const TemplateRightBar = () => {
    const data = useSelector((state) => state)
    console.log(data)
    const personalInfo = data.personalinfo.personalInformation
    const contactInfo = data.contactinfo.contactInformation
    const educationalInfo = data.educationalinfo.educationalInformation
    const workInfo = data.workinfo.workInformation 
    const referenceInfo = data.referencinfo.referencesInformation
    const skillInfo = data.skillinfo.skillInformation
    return(
        <div>
            <div className='p-4'>
                {/*info section*/}
                <div className='grid grid-cols-2'>
                    <div>
                        <h1 className='md:text-4xl font-semibold text-gray-700 uppercase'>{personalInfo.name}<br></br> {personalInfo.lastName}</h1>
                        <p className='mt-1 text-xl font-extralight text-gray-500'>{personalInfo.title}</p>
                    </div>
                    <div>
                        <div className='md:ml-36'>
                            <h1 className='text-xl font-semibold text-slate-700'>CONTACT</h1>
                            <div className='w-24 h-0.5 bg-slate-400 mt-2'></div>
                            <Contact Text={contactInfo.addressLineOne} />
                            <Contact Text={contactInfo.phone} />
                            <Contact Text={contactInfo.email} />
                        </div>
                    </div>
                </div>
                <hr className='w-10/12 mt-6 mb-4 h-0.5 bg-gray-400' />
                {/*work info section*/}
                <div>
                    <h1 className='text-xl mt-4 font-bold text-gray-600 mb-4 uppercase'>Work Experience</h1>
                </div>
               {workInfo.map((work) => {
                return (
                    <div>
                        <Container 
                        Header='work experience' 
                        Title={work.jobTitle} 
                        Company={work.companyName} 
                        Date={work.duration} 
                        Level={work.employerTitle} 
                        Description={work.description}/>
                    </div>
                )
               })}
                {/*education info section*/}
                <div>
                <div>
                    <h1 className='text-xl mt-4 font-bold text-gray-600 mb-4 uppercase'>Education</h1>
                </div>
                {
                    educationalInfo.map((education) => {
                        return (
                            <div>
                                <Container  
                                    Title={education.schoolName} 
                                    Company='england' 
                                    Date={education.year} 
                                    Level={education.degree} 
                                    Description='this is lorem'
                                /> 
                            </div>
                        )
                    })
                }
                </div>
                {/*skill info section*/}
                <div className='mt-8'>
                <div>
                     <h1 className='text-xl font-bold text-gray-600 mb-4 uppercase'>Skill</h1>
                </div>
                    {skillInfo.map((skill) => {
                        return(
                            <div>
                               
                                <Skill Title= {skill.skillName} Width={(23 / 100) * skill.skillLevel } />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export const Container = ({Title,Company,Date,Level,Description}) => {
    return(
        <div>
        
        <div className='flex'>
            <div className='w-1/3'>
                <h1 className='font-semibold text-gray-700 uppercase'>{Title}</h1>
                <h1 className='text-sm text-gray-500'>{Company}</h1>
                <h1 className='text-sm text-gray-500'>{Date}</h1>
            </div>
            <div>
                <div className='w-0.5 h-16 bg-gray-600 ml-10 mr-6 mt-2'>
                    <div className='w-2 h-2 bg-gray-700 rounded-full'></div>
                </div>
            </div>
            <div>
                <h1 className='font-semibold text-gray-700'>{Level}</h1>
                <p className='text-sm text-gray-500 w-10/12'>{Description}</p>
            </div>
        </div>
    </div>
    )
}

export const Skill = ({Title,Width}) => {
    return(
        <div>
            <div>
            
                <div>
                    <h1 className='font-semibold text-gray-700'>{Title}</h1>
                    <div className='w-1/2 h-2 bg-orange-400 mt-2'>
                        <div className={`h-2 bg-emerald-700`} style={{width:Width + 'rem'}}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Contact = ({Text}) => {
    return(
        <div className='flex'>
                                <FaLocationArrow className='mt-1 mr-2' />
                                <h1 className='text-slate-600 first-letter:text-blue-500'>{Text}</h1>
                            </div>
    )
}