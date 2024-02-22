import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Logo from '/images/Bee-logo.webp'

const Navbar = () => {

  const variants = {
    initial: {
      top: -100,
      opacity: 0
    },
    animate: {
      top: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delay: 0.2,
        duration: 1
      }
    }
  }
 

  const [menu, setMenu] = useState(false)

  const icon = menu ? <i className="fa-solid fa-x text-3xl"></i> :<i className="fa-solid fa-bars text-3xl"></i>

  return (
    <motion.nav className='w-full h-24 fixed top-0 flex items-center justify-between p-5 shadow-md z-30 bg-white' variants={variants} initial={'initial'} animate={'animate'}>
        <motion.div  className='flex items-center gap-5'>
          <img src={Logo} alt="Bee Bee Logo" width={150} height={150}/>
          <h1 className='text-2xl tracking-wide font-bold text-main'><a href="#hem">Bee Bee Massage</a></h1>
        </motion.div>
        <motion.ul  className='flex gap-10 text-lg font-medium text-main tracking-wide relative' >
            <motion.li className='absolute right-10  '  ><a href='#hem' className='text-main lg:hidden' onClick={() => setMenu(prev => !prev)}>{icon}</a></motion.li>

            <motion.li  ><a href='#hem' className='hidden lg:block hover:scale-110'>Hem</a></motion.li>
            <motion.li  ><a href='#service' className=' hidden lg:block hover:scale-110'>Behandlingar</a></motion.li>
            <motion.li  ><a href='#pris' className=' hidden lg:block hover:scale-110'>Pris</a></motion.li>
            <motion.li  ><a href='#time' className=' hidden lg:block hover:scale-110'>Öppettider</a></motion.li>
        </motion.ul>
      </motion.nav>  
  )
}

export default Navbar