
import {motion} from 'framer-motion'


const Time = () => {

  const variants = {
    initial: {
      opacity: 0,
      scale: 0.6
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 1,
      }
    }
  }



  return (
    <motion.div variants={variants} initial={'initial'} whileInView={'animate'} className='time flex flex-col justify-center items-center h-full text-main w-full gap-5'>
      <motion.h4 variants={variants} className='font-bold underline tracking wide text-4xl'>Öppettider</motion.h4>
      <motion.div variants={variants} className='text-center text-2xl'>
        <p>Mån- Lör   Kl. 10.00 -  20:00</p>
        <p>Sön   Kl. 110.00 -  19:00</p>
      </motion.div>
      
      <motion.p variants={variants} className='text-2xl'>Finns 1.5 Timmes Fri Parkering Mitt Emot</motion.p>
      <motion.div variants={variants} className='flex gap-10 items-center justify-center mt-5 ml-10'>
        <div className='flex flex-col gap-1 text-main text-xl items-center'>
          <i className="fa-solid fa-door-open"></i>
          <p className='text-center'>2st Exclusive <br />Massage-Rum</p>
        </div>
        <div className='flex flex-col gap-1 text-main text-xl items-center'>
          <i className="fa-solid fa-star"></i>
          <p className='text-center'>10+ År Samlad Erfarenhet <br />I Peronalen</p>
        </div>
        <div className='flex flex-col gap-1 text-main text-xl items-center'>
          <i className="fa-solid fa-thumbs-up"></i>
          <p className='text-center'>1000+ Nöjda Kunder <br /> Sedan Start</p>
        </div>
      </motion.div>
      <div className='flex flex-col items-center gap-5 mt-20'>
        <p className='text-3xl'>Ring Och Boka Nu!</p>
        <p className='text-2xl'><span role="img" aria-label="location" className='text-2xl'>📍</span> Gamla Tuvevägen 20 417 24 Göteborg</p>
        <p className='text-2xl'><span role="img" aria-label="phone" className='text-2xl'>📞</span>  0761 00 57 11</p>
      </div>
    </motion.div>
  )
}

export default Time