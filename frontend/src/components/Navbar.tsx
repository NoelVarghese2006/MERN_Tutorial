import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { PackagePlus } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='max-w-screen'>
      <div className='flex h-4 items-center justify-between sm:flex-row md:flex-col'>
        <div className='text-transparent font-bold uppercase text-center bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 sm:text-[22px] md:text-[22px]'>
          <Link to={"/"}>Product Store 🛒</Link>
        </div>
        <div className='flex items-center flex-row'>
          <Link to={"/create"}>
            <Button>
              <PackagePlus />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar