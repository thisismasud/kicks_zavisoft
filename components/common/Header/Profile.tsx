import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Profile = () => {
  return (
    <Link href="/profile" className="text-gray-800 hover:text-gray-600">
      <Image src="/User.svg" alt="Profile Icon" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6" />
    </Link>
  )
}

export default Profile