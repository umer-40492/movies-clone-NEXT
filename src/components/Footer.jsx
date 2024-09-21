import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function footer() {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-xl
    justify-center gap-6 fixed w-full bottom-0'>
      <Link href={'https://github.com/umer-40492'} target='#'> <FaGithub /></Link>
      <Link href={'https://www.linkedin.com/in/muhammad-umer-8b162720a/2'} target='#'> <FaLinkedin /></Link>
    </div>
  )
}
