import React from 'react'
import { useParams } from 'react-router-dom';
import { itemData } from '../api';

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
        <div className='m-12 flex gap-8 rounded-2xl p-8 shadow-2xl border-t'>
            <div className='w-1/3flex justify-center items-center'>
                <img src={itemData[id].image} alt={itemData[2].tile} className='h-96 rounded-2xl object-contain' />
            </div>
            <div className='flex flex-col gap-8 w-2/3'>
                <div className='text-5xl'>
                    {itemData[id].title}
                </div>
                <div className='capitalize flex gap-4'>
                    <span className='bg-pink-200 px-4 py-1 rounded-full'>{itemData[2].category}</span>
                    {
                        (itemData[id].rating.rate >= 3.5) ?
                            <span className='bg-black text-white px-4 py-1 rounded-full'>Recommended</span>
                            : null
                    }
                </div>
                <div>
                    {itemData[id].price}
                </div>
                <div>
                    {itemData[id].rating.rate}
                </div>
                <div className='capitalize'>
                    {itemData[id].description}
                </div>
            </div>
        </div>
    )
}
