import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className='bg-green-200 h-10 flex items-center justify-between px-10 font-semibold'>
      <Link to='/items' className='text-lg' >
        &copy; Shopper's Stop, {year}
      </Link>
      <div className='flex gap-6 items-center'>
        <Link to='/privacy-policy' className=''>Privacy Policy</Link>
        <Link to='/terms-of-use' className=''>Terms of use</Link>
      </div>
    </footer>
  )
}
