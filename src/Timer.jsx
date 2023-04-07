import React from 'react';

function Timer(props) {
   const timeRestart = () => {
      props.setCheck(false)
      props.setCount(0);
   }
  return (
    <div>
      <div className="box">
         <h1>{props.count}</h1>
         <button onClick={()=>props.setCheck(true)}>Start</button>
         <button onClick={()=>props.setCheck(false)}>Stop</button>
         <button onClick={()=>props.setCheck(true)}>Resume</button>
         <button onClick={()=>timeRestart()}>Restart</button>
      </div>
    </div>
  )
}

export default Timer
