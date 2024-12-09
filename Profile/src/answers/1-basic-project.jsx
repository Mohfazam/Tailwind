import React from 'react'

export function Basic_project(){
  return (
    <div className="flex justify-between w-fit h-fit text-black">
      <div className="w-61 bg-blue-900 p-4">
        sidebar
      </div>    
      <div className="w-61 bg-blue-200 p-4" >
        content
      </div>
    </div>
  )
}