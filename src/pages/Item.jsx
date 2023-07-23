import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { itemData } from '../api';
import { BsStars, BsCurrencyRupee } from 'react-icons/bs';
import { IoArrowBack } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';

export default function Item() {
    let { id } = useParams();
    if (id == 'trending') {
        console.log('---', id);
    }
    else {
        id = id - 1;
        console.log(id);
    }
    return (
        <div className='m-12 flex gap-8 rounded-2xl p-8 shadow-2xl border-t drop-shadow-2xl bg-white'>
            <div className='w-1/3 flex justify-center items-center'>
                <img src={itemData[id].image} alt={itemData[2].tile} className='h-96 rounded-2xl object-contain' />
            </div>
            <div className='flex flex-col gap-8 w-2/3'>
                <div className='text-5xl text'>
                    {itemData[id].title}
                </div>
                <div className='capitalize flex gap-4'>
                    {
                        (itemData[id].rating.rate >= 3.5) ?
                            <span className='bg-black text-white pl-4 pr-3 py-1 rounded-full inline-flex items-center gap-2'>
                                Recommended
                                <BsStars className='text-xl' />
                            </span>
                            : null
                    }
                    <span className='border border-black px-4 py-1 rounded-full'>{itemData[id].category}</span>
                </div>
                <div className='flex gap-8 items-center'>
                    <div className='text-8xl flex items-baseline'>
                        <BsCurrencyRupee className='text-5xl' />
                        {itemData[id].price.toFixed(2)}
                    </div>
                    <div className='text-4xl'>
                        <span className='flex'>
                            {itemData[id].rating.rate}
                            <AiFillStar />
                        </span>
                        from {itemData[id].rating.count} reviews
                    </div>
                </div>
                <div className='capitalize'>
                    {itemData[id].description}
                </div>
                <div>
                    <Link to="/items" className='bg-black text-white rounded-lg px-4 py-2 inline-flex items-center gap-2'>
                        <IoArrowBack className='text-xl' />
                        Back to all items
                    </Link>
                </div>
            </div>
        </div>
    )
}
