import { useState } from "react";
import { Otp } from "./components/otp";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center bg-blue-800 w-screen h-screen">
      <div className="absolute text-white top-[100px]">
        <h1 className="text-4xl">Webinar.gg</h1>
      </div>

      <div className="absolute top-[200px]">
        <h1 className="text-white text-4xl">Check your Email for the code</h1>
      </div>
    </div>
    
  );
}

export default App;




// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="flex justify-center items-center bg-blue-800 w-screen h-screen">
//       <div className="absolute top-[100px] text-white">
//         <h1 className="text-4xl">Webinar.gg</h1>
//       </div>

//       <div className="absolute top-[200px] text-white">
//         <h1 className="text-2xl">Check your Email for the code</h1>
//       </div>
//     </div>
//   );
// }

// export default App;