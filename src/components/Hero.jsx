import React from 'react'
import Button from './Button'

export default function Hero(){
    return (
        <div className = 'min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className = 'flex flex-col gap-4'>
            <p>Rise and Grind!</p>
            <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Lift<span className='text-blue-400'>TRACKER</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>Please <span className ='text-blue-400 font-medium'>stretch</span> properly, and ensure that you are <span className ='text-blue-400 font-medium'>well hydrated</span> prior to starting any of these splits</p>
            <Button func = {() => {
                window.location.href = '#generate'
            }} text = {"Accept and Begin"}></Button>
        </div>
    )
}
