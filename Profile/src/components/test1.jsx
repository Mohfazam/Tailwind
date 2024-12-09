import React, { Children } from 'react'

export function Test1({children}){
  return (
    <div className="flex text-black">
      <div className="w-96 h-screen bg-blue-900 p-4 hidden md:block">
        sidebar
      </div>    
      <div className="w-61 bg-blue-200 p-4 w-screen h-screen" >
        {children}
      </div>
    </div>
  )
}




// export function Test1({ children }){
//   return (
//     <div className="flex text-black">
//       <div className="w-96 h-screen bg-blue-900 p-4 hidden md:block">
//         sidebar
//       </div>    
//       <div className="w-61 bg-blue-200 p-4 w-screen h-screen" >
//         {children}
//       </div>
//     </div>
//   )
// }