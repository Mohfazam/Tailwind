import { useState } from "react";
import { Test1 } from "../src/components/test1";
import { Test2 } from "../src/components/test2";
import "./App.css";

function App() {
  return (
    <>
      <Test1>
        <Test2 />
      </Test1>
    </>
  );
}

export default App;
