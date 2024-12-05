import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center bg-blue-800 text-center w-screen h-screen min-h-screen">
      <div className="text-white">
        <h1 className="text-6xl font-bold mb-[34px]">Webinar.gg</h1>

        <h1 className="text-2xl font-bold mb-3">Verify your age</h1>

        <p>please confirm your birth year. this data will not be stored</p>
        <input type="date" className="bg-blue-300 rounded-lg mt-2 p-2 w-full" />
        <div>
        <button className="bg-blue-400 border mt-4 rounded-md p-2 w-full hover:bg-blue-600">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
