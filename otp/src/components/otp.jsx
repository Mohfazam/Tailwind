import React from 'react'

export function Otp() {
  return (
    <div>
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
            <input type="text" className='flex m-2 w-[40px] h-[50] rounded-2xl bg-blue-500'/>
        </div>
    )
}