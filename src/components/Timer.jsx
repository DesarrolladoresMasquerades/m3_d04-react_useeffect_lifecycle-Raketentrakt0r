import React, { useState,useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(
      ()=>{
          console.log("I am having a useEffect her, please be quite!")
            const intervalId = setInterval(
                ()=> setCount((prev) => prev + 1),
                1 * 1000
            )
            return ()=> clearInterval(intervalId) // cleanup runs AFTER useEffect has fnished
        },[]) // 2nd way take out the [] an the coma - garantiza no hacer un loop infinito

        useEffect(()=> {
            console.log("useEffect - on update");
            document.title = "Timer app count is: " + count

        },[count])
        
  return (
    <div className="Timer">
      <h2>Timer</h2>

      <h3>{count}</h3>
    </div>
  );
}

export default Timer;
