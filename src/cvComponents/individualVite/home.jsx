import React from 'react'
import { useSelector } from 'react-redux'
import ContactInfo from './ContactInfo'
import EducationInfo from './Education'
import PersonalInfo from './PersonalInfo'
import QualificationInfo from './Qualification'
import Reference from './Reference'
import Skill from './Skill'
import WorkInfo from './WorkInfo'

const Home = () => {
  const info = useSelector((state) => state)
  const pinfoData = info.personalinfo.personalInformationSuccess
  const cinfoData = info.contactinfo.contactInformationSuccess
  const einfoData = info.educationalinfo.educationalInformationSuccess
  console.log(cinfoData)
  const qinfoData = info.qualificationinfo.qualificationInformationSuccess
  const sinfo = info.skillinfo.skillInformationSuccess 
  const rinfo = info.referencinfo.referencesInformationSuccess
  const winfo = info.workinfo.workInformationSuccess 
  console.log('thisi',qinfoData)
  return (
    <div>
        {!pinfoData && (<PersonalInfo />)}
        {pinfoData && !cinfoData && (<ContactInfo />)}
        {cinfoData && !einfoData && (<EducationInfo />)}
        {einfoData && !winfo && (<WorkInfo />)}
        {winfo && !rinfo && (<Reference />)}
        {rinfo && !qinfoData && (<QualificationInfo />)}
        {qinfoData && !sinfo && (<Skill />)}
    </div>
  )
}

export default Home