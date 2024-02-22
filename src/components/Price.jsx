import React from 'react'
import Logo from '/images/Bee-logo.webp'
import {motion} from 'framer-motion'

const Price = () => {
  const variants = {
    initial: {
      opacity: 0,
      top: 50
    },
    animate: {
      opacity: 1,
      top: 0,
      transition: {
        delay: 0.4,
        duration: 1,
      }
    }
  }
  return (
    <motion.div variants={variants} initial={'initial'} whileInView={'animate'} 
    className='price flex flex-col gap-20 justify-center items-center h-full relative'
    > 
      <div className='flex flex-col gap-10 justify-center items-center'>

        <h1 className='font-bold text-3xl text-main underline'>Pris</h1>
        <div className='grid'>

        <div className='flex flex-col gap-5 text-main p-10 items-center card'>
          <h4 className='font-bold text-2xl'>Thai Massage</h4>
          <div className='flex flex-col gap-2 text-xl text-center'>
              <p>30 minuter: 400kr</p>
              <p>45 minuter: 500kr</p>
              <p>60 minuter: 600kr</p>
              <p>90 minuter: 950kr</p>
          </div>
          <img src={Logo} alt="Logo" width={200} height={200} />
        </div>
        <div className='flex flex-col gap-5 text-main p-10 items-center card '>
          <h4 className='font-bold text-2xl'>Olja Massage</h4>
          <div className='flex flex-col gap-2 text-xl text-center'>
              <p>30 minuter: 400kr</p>
              <p>45 minuter: 500kr</p>
              <p>60 minuter: 600kr</p>
              <p>90 minuter: 950kr</p>
          </div>
          <img src={Logo} alt="Logo" width={200} height={200} />
        </div>
        <div className='flex flex-col gap-5 text-main  p-10 items-center card'>
          <h4 className='font-bold text-2xl'>Mix Massage</h4>
          <div className='flex flex-col gap-2 text-xl text-center'>
              <p>30 minuter: 400kr</p>
              <p>45 minuter: 500kr</p>
              <p>60 minuter: 600kr</p>
              <p>90 minuter: 950kr</p>
          </div>
          <img src={Logo} alt="Logo" width={200} height={200} />
        </div>
        <div className='flex flex-col gap-5 text-main  p-10 items-center card'>
          <h4 className='font-bold text-2xl text-center'>Nack / <br />Rygg Massage</h4>
          <div className='flex flex-col gap-2 text-xl text-center'>
              <p>45 minuter: 500kr</p>
              <p>60 minuter: 600kr</p>
              <p>90 minuter: 950kr</p>
          </div>
          <img src={Logo} alt="Logo" width={200} height={200} />
        </div>
        
        </div>
      </div>
    </motion.div>
  )
}

export default Price