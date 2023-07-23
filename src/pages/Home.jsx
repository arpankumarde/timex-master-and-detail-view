import React, { useState } from 'react';
import { itemData } from '../api'
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

export default function Home({ top }) {
  return (
    <main className='m-4 flex flex-wrap gap-6 justify-around'>
      {itemData.map((item) => (
        <Link to={`/item/${item.id}`} className={`${top ? item.rating.rate >= 3.5 ? null : 'hidden' : null} flex w-96 gap-4 bg-white rounded-xl px-8 py-4 shadow-xl hover:drop-shadow-2xl`} key={item.id}>
          <img src={item.image} alt={item.title} className='rounded-xl w-32 fit object-contain' />
          <div className='flex flex-col justify-around'>
            <div>
              {item.title}
            </div>
            <div className='flex items-center gap-2'>
              {item.rating.rate} <AiFillStar />
            </div>
          </div>
        </Link>
      ))}
    </main>
  )
}
