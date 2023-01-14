import React from 'react'

const CvButton = ({Text,OnClick,bg,text}) => {
  return (
    <div>
        <button className={`w-40 mt-6 h-8  ${bg} rounded-md ${text} font-semibold`} onClick={OnClick}>{Text}</button>
    </div>
  )
}

export default CvButton