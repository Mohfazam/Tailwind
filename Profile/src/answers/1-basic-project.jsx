import React from 'react'

export function Basic_project(){
  return (
    <div className="flex justify-between w-full h-screen">
      <div className="w-61 bg-grey-200 p-4">
        sidebar
      </div>    
      <div className="w-61 bg-grey-200 p-4">
        content
      </div>
    </div>
  )
}