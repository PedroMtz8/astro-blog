import { useState } from 'react'

export default function Example(){
  const [counter, setCounter] = useState(0)
  return (
    <div className="w-full flex flex-col gap-3 min-h-[130px] justify-center items-center text-xl " >
      <h3>React component</h3> 
      <div className='flex gap-3 items-center ' >
        <button 
          className='px-3 py-1 bg-gray-400 rounded hover:bg-gray-300 '
          onClick={() => {
            setCounter(counter - 1)
          }}
        >-</button>
        <div>{counter}</div>
        <button 
          className='px-3 py-1 bg-gray-400 hover:bg-gray-300 rounded'
          onClick={() => {
            setCounter(counter + 1)
          }} 
        >+
        </button>
      </div>
    </div>
  )
}