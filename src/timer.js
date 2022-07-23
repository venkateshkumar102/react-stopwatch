import React, { useEffect, useState } from 'react'
import "./timer.css"


const Timer = () => {
    
        const [seconds,setSeconds]=useState(0);
        const [minutes,setMinutes]=useState(0);
        const [start,setStart]=useState(false)
    
        var timer;
        useEffect(()=>{
            timer= setInterval(()=>{
                setSeconds(seconds+1);
                if(seconds===59){
                    setMinutes(minutes+1);
                    setSeconds(0);
                }
            },1000)
            return()=>clearInterval(timer);
        });

        const Restart=()=>{
            setSeconds(0);
            minutes(0);
        }
        const Stop=()=>{
            clearInterval(timer);
        }
    
  return (
    
    <div className='sec'>
        <h1>Stop watch</h1>
        <div className='timer'>
            <h1>{minutes<10? "0"+minutes: minutes}:{seconds<10? "0"+seconds: seconds}</h1>
        </div>
        <div className='btn'>
            
            <button onClick={Restart}>Restart</button>
            <button onClick={Stop}>Stop</button>
        </div>
    </div>
  )
}

export default Timer