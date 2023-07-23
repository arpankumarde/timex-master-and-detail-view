import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPage() {
  return (
    <div className='m-4 flex flex-col justify-center items-center gap-4 min-h-[60vh]'>
      <div className='text-4xl'>
        Page not found!
      </div>
      <Link to='/items' className='bg-black text-white rounded-lg px-4 py-2'>Go to Home</Link>
    </div>
  )
}
