'use client';
import React from 'react'

const EventHandling = () => {
  return (
    <div><div className='container mx-automy-5 my-5'>
        <h1 className='mt-4 font-bold text-3xl text-center'>Event Handling</h1>
        <button 
        onClick={() => { alert('button was clicked')  }}
        
        
        className='p-3 border bg-blue-200'>Click Event</button>
        <input 
        onChange={(e) => {console.log('e.target.value');  }}
          
        className='mt-5 border p-3 w-full'type="text" />
        <input 
        onChange={(e) => {document.body.style.backgroundColor =e.target.value  }}
          
        className='mt-5'type="color" />
        </div></div>
  )
}

export default EventHandling