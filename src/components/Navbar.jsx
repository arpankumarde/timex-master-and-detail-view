import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='bg-green-200 h-20 flex items-center justify-between pl-8 pr-10'>
      <Link to='/items' className='text-4xl px-4 py-2 font-extrabold block font-greatvibes' >
        Shopper's Stop
      </Link>
      <div className='flex gap-4 items-center'>
        <Link to='/items' className='font-semibold rounded-lg px-4 py-2'>All Items</Link>
        <Link to='/item/trending' className='bg-black text-white rounded-lg px-4 py-2'>Top Collections</Link>
      </div>
    </nav>
  )
}