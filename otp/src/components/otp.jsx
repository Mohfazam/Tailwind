import React from 'react'

export function Otp() {
    
  return (
    <div className='flex justify-center items-center space-x-2'>
      <SubBoxes />
      <SubBoxes />
      <SubBoxes />
      <SubBoxes />
      <SubBoxes />
      <SubBoxes />
      <SubBoxes />
    </div>
  )
}

function SubBoxes(){
    return(
        <div>
            <input 
              type="text" 
              maxLength={1}
              className='
                w-12 
                h-12 
                text-center 
                text-white 
                bg-blue-500 
                border-2 
                border-blue-600 
                rounded-lg 
                focus:border-blue-300 
                focus:ring-2 
                focus:ring-blue-200 
                transition-all 
                duration-300 
                outline-none
              '
            />
        </div>
    )
}