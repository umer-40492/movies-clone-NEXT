'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';


export default function Searchbar() {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const handleSubmit = (e) =>{
        e.preventDefault();
        router.push(`/search/${search}`)
    }
  return (
    <div>
            <form className='flex justify-between px-5 max-w-6xl mx-auto gap-2 mt-3'
        onSubmit={handleSubmit}>
            <input type="text" placeholder='Search keywords...' className='w-full h-14 border border-gray-500 dark:border-white outline-none
             rounded-md placeholder-gray-500 bg-transparent flex-1 px-3'
             value={search}
             onChange={(e)=> setSearch(e.target.value)} />
             <button className='text-amber-500 disabled:text-gray-400' disabled={search === ''}>Search</button>
        </form>
    </div>
  )
}
