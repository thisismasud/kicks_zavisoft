import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    
    <Link href="/" className={`text-2xl font-bold text-gray-800`}>
      <Image src="/Logo.svg" alt="Kicks Logo" width={128} height={32} className='sm:w-[128px] sm:h-[32px] w-[80px] h-[20px]'/>
    </Link>
  )
}

export default Logo