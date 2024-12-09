import React from 'react'

export function Basic_project(){
  return (
    <div className="flex text-black">
      <div className="w-96 h-screen bg-blue-900 p-4 hidden md:block">
        sidebar
      </div>    
      <div className="w-61 bg-blue-200 p-4 w-full" >
        content
      </div>
    </div>
  )
}