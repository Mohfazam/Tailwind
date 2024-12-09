import React, { Children } from 'react'

export function Test1({children}){
  return (
    <div className="flex text-black">
      <div className="transition-all hidden delay-1000 h-screen bg-blue-900 p-4 md:block md:w-2/4">
        sidebar
      </div>    
      <div className="w-61 bg-blue-200 p-4 w-screen h-screen" >
        {children}
      </div>
    </div>
  )
}
