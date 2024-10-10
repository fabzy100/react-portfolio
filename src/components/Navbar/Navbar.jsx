import React from 'react'
import Logo from '../../assets/1.jpg'
import {motion} from 'framer-motion'
import { slideBottom } from '../../utility/animation'
const NavbarLinks = [
  {
    id:1,
    title: "Home",
    link:"/",
  },
  {
    id:2,
    title: "features",
    link:"#",
  },
  {
    id:3,
    title: "shop",
    link:"#",
  },
  {
    id:4,
    title: "About us",
    link:"#",
  },
  {
    id:5,
    title: "Contact",
    link:"#",
  },
]

const Navbar = () => {
  return (
    <>
    <motion.div
    variants={slideBottom(0.2)}
    initial='initial'
    animate='animate' 
    className='container flex items-center justify-between py-4 '>
      {/*Logo section*/}
      <div className='flex items-center gap-1'>
        <img className="w-[60px] px-4" src={Logo} alt='' />
        <p className='px-4 text-2xl font-bold'>HUSTLE</p>
      </div>

      {/*Link section*/}
       <div className='hidden md:block'>
        <ul className='flex gap-3 xl:gap-7'>
          {NavbarLinks.map((link) => {
            return (
              <li key={link.id}>
                <a className="text-sm uppercase hover:text-primary xl:text-base"href={link.link}>{link.title}</a>
              </li>
            )
          })}
        </ul>
       </div>

      {/*Button section*/}
      <div>
        <button className='primary-btn'>Request for Quotes
        </button>
      </div>
    </motion.div>
    </>
  )
}

export default Navbar