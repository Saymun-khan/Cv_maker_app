import React from 'react'

const input = ({Name,Value,OnChange,Placeholder,Error}) => {
  return (
    <div>
        <div className='w-96 h-auto m-auto mt-4'>
            <input type="text" name={Name} value={Value} onChange={OnChange} placeholder={Placeholder} className='outline-none w-96 h-10 border-r-orange-500 border-l-rose-600 border-2 bg-green-300 placeholder:text-emerald-800 placeholder:font-extralight rounded-md p-2 text-gray-700 cursor-pointer'  />
            <h1 className='mt-2 text-red-700 '>{Error}</h1>
        </div>
    </div>
  )
}

export default input