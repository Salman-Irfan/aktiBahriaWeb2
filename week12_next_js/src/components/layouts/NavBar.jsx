import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li className='bg-blue-300' > <Link href={`/`} > Home </Link> </li>
                    <li className='bg-blue-300' > <Link href={`/about`}> About</Link> </li>
                    <li className='bg-blue-300' > <Link href={`/contact`}> Contact</Link> </li>
                    <li className='bg-blue-300' > <Link href={`/servic`}> Services</Link> </li>
                    <li className='bg-blue-300' > <Link href={`/bms`}> BMS</Link> </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar