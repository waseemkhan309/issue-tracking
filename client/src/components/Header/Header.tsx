'use client'
import classnames from 'classnames';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';
import { FaBug } from "react-icons/fa";



const links =[
    {label:'Dashboard',href:'/'},
    {label:'Issues',href:'/issues'}
]

const Header = () => {
    const pathname = usePathname()
  return (
    <>
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center '>
        <Link href={'/'}>
    <FaBug className='text-xl' />
        </Link>
        <ul className='flex space-x-6 '>
            {
                links.map((ele,index)=>(
            <Link
            key={index}
            href={ele.href}
            >
                <li className={classnames({
                    'text-gray-900 border-b-2': ele.href === pathname,
                    'text-gray-500': ele.href !== pathname,
                    'hover:text-gray-800 transition-all duration-200':true
                 })}>
                    {ele.label}
                    </li>
            </Link>
                ))
            }
        </ul>

    </nav>
    </>
  )
}

export default Header