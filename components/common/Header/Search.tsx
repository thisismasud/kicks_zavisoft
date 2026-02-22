import Image from 'next/image'
import React from 'react'

const Search = () => {
  return (
    <button className='cursor-pointer'>
        <Image src="/Search.png" alt="Search Icon" width={24} height={24} />
    </button>
  )
}

export default Search