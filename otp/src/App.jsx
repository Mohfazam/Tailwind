import { useState, useEffect } from "react";
import { Otp } from "./components/otp";
import "./App.css";

function App() {
  const [count, setCount] = useState(60);

  useEffect(() => {
   if(count > 0){
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if(prevCount <= 1){
          clearInterval(timer);
        }
        return prevCount - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
   }
  }, [])

  return (
    <div className="flex justify-center items-center bg-blue-800 w-screen h-screen">
      <div className="absolute text-white top-[100px]">
        <h1 className="text-4xl">Webinar.gg</h1>
      </div>

      <div className="absolute top-[200px]">
        <h1 className="text-white text-4xl">Check your Email for the code</h1>
      </div>
      <Otp />
      <br />
      <div className="absolute top-[430px] text-white text-center text-lg">
        {count > 0 ? `Time remaining: ${count}` : <h1 className="text-white text-lg">Time is Up</h1>}

        <div className="flex justify-center items-center mt-4">
        <button className=" text-white text-lg bg-blue-400 rounded-md p-2 w-[400px] hover:bg-blue-600">Continue</button>
      </div>
      </div>

      
    </div>
    
  );
}

export default App;


