import { useState, useEffect, useRef } from "react";
import React from "react";

export function Otp() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();

  return (
    <div className="flex justify-center items-center space-x-2">
      <SubBoxes
        reference={ref1}
        onDone={() => {
          ref2.current.focus();
        }}
      />

      <SubBoxes
        reference={ref2}
        onDone={() => {
          ref3.current.focus();
        }} onBack={() => {
          ref1.current.focus();
        }}
      />

      <SubBoxes
        reference={ref3}
        onDone={() => {
          ref4.current.focus();
        }} onBack={() => {
          ref2.current.focus();
        }}
      />

      <SubBoxes
        reference={ref4}
        onDone={() => {
          ref5.current.focus();
        }} onBack={() => {
          ref3.current.focus();
        }}
      />

      <SubBoxes
        reference={ref5}
        onDone={() => {
          ref6.current.focus();
        }} onBack={() => {
          ref4.current.focus();
        }}
      />

      <SubBoxes
        reference={ref6}
        onDone={() => {
          ref7.current.focus();
        }} onBack={() => {
          ref5.current.focus();
        }}
      />

      <SubBoxes
        reference={ref7}
        onDone={() => {
          ref7.current.focus();
        }} onBack={() => {
          ref6.current.focus();
        }}
      />
    </div>
  );
}

function SubBoxes({ reference, onDone, onBack }) {
  const [inputBoxValue, setInputBoxValue] = useState("");

  return (
    <div>
      <input
      onKeyDown={(e) => {
        if (e.key == "Backspace") {
          //go back logic
          setInputBoxValue("");
          onBack();
        }
      }}
        value={inputBoxValue}
        ref={reference}
        onChange={(e) => {
          const val = e.target.value;
          if (/[0-9]/g.test(val)) {
            setInputBoxValue(val);
            onDone();
          } else {
          }
        }}
        type="text"
        maxLength={1}
        className="
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
              "
      />
    </div>
  );
}
