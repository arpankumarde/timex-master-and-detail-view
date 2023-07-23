import React from 'react';
import { itemData } from '../api'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className='m-4 flex flex-wrap gap-6 justify-around'>
      {itemData.map((item) => (
        <Link to={`/item/${item.id}`} className='w-96 flex gap-4 bg-white rounded-lg px-8 py-4 shadow-xl hover:drop-shadow-2xl' key={item.id}>
          <img src={item.image} alt={item.title} className='rounded-xl w-32 fit object-contain' />
          <div className='flex flex-col justify-around'>
            <div>
              {item.title}
            </div>
            <div>
              Rating: {item.rating.rate} star
            </div>
          </div>
        </Link>
      ))}
    </main>
  )
}
