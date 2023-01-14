import React from 'react'

const Checkbox = ({Text,OnChange}) => {
  return (
    <div>
        <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="comments"
                            name={Text}
                            onChange={OnChange}
                            type="checkbox"
                            value={Text}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-medium text-gray-700">
                            {Text}
                          </label>
                        </div>
                      </div>
        </div>
    </div>
  )
}

export default Checkbox