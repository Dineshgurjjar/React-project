import { useState } from 'react'
import  './app.css'
export function App() {
  const [color,setColor]=useState("olive")

  return (
    <>
   <div className="wfull h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl">
        <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Red</button>
        <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Green</button>
        <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Black</button>
        <button onClick={() => setColor("cyan")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Cyan</button>
        <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Yellow</button>
        <button onClick={() => setColor("Blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">Blue</button>
        <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg">orange</button>
      </div>
    </div>
   </div>
      
    </>
  )
}
