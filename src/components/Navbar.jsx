import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({ setTop }) {
  let navigate = useNavigate();

  const handleAll = (e) => {
    e.preventDefault();
    setTop(false);
    navigate('/items');
  }

  const handleTop = (e) => {
    e.preventDefault();
    setTop(true);
    navigate('/items');
  }

  return (
    <nav className='h-20 flex items-center justify-between pl-8 pr-10 border-b-2 shadow-lg'>
      <Link to='/items' className='text-4xl px-4 py-2 font-extrabold block font-greatvibes' >
        Shopper's Stop
      </Link>
      <div className='flex gap-4 items-center'>
        <button onClick={handleAll} className='font-semibold rounded-lg px-4 py-2'>All Items</button>
        <button onClick={handleTop} className='bg-black text-white rounded-lg px-4 py-2'>Top Collections</button>
      </div>
    </nav>
  )
}
