import leftStone from '/images/left-stone1-2.png'

import sideMassage from'/images/side-stone-thai.png'
import { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import girl from '/images/girl.png'
import girlTop from '/images/girl-mass2.png'

const Hero = () => {

  // useEffect(() => {
  //   const image = new Image();
  //   image.src = '/images/left-stone1.png'
    
  //   return () => {
  //     image.onload = null
  //   } 
  // }, [])

  const imgVariants = {
    initial: {
      opacity: 0,
      scale: 0.5
    }, 
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 1,
      }
    },
    textAnimate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 1.2,
        type: 'spring',
        stiffness: 30
      }
    }
  }

  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const mainContent = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])
  

  return (
    <div className='hero relative flex items-center justify-center h-full shadow-md overflow-hidden' ref={ref}>
      {/* <div className='hero-img absolute'></div> */}
      <motion.div variants={imgVariants} initial={'initial'} animate={'textAnimate'} className="wel-sec relative flex flex-col items-center gap-5 z-10 border-second p-20 bg-white bg-opacity-30 shadow-lg" style={{y: mainContent}} >
          <h2 className="font-bold text-5xl text-main tracking-wide">Välkomment Till Bee Bee Massage</h2>
          <div className="font-medium text-md text-main text-center">
            <p>
              Ge dig själv en stund av välbefinnande och avkoppling genom massage
            </p>
            <p>
              Vår professionella massör skapar en lugn atmosfär där stress och spänningar släpper
            </p>
            <p>
            Massage främjar inte bara fysisk avslappning utan kan också minska ångest och förbättra sömnen
            </p>
          </div>
          <button className="border-4 p-2 border-main text-white bg-main w-full text-lg hover:bg-white hover:text-main"><a href="#service">Behandlingar</a></button>
          <div className=' flex flex-col w-full justify-between items-center '>
            <p className='text-xl'><span role="img" aria-label="location" className='text-xl'>📍</span> Gamla Tuvevägen 20 417 24 Göteborg</p>
            <p className='text-xl'><span role="img" aria-label="phone" className='text-xl'>📞</span>  0761 00 57 11</p>
          </div>
      </motion.div>
      <motion.img variants={imgVariants} initial={'initial'} animate={'animate'} src={leftStone}  alt="HeroBanner" width={350} className='absolute bottom-0 left-20 hidden xl:block'/>
      <motion.img variants={imgVariants} initial={'initial'} animate={'animate'} src={girl} alt="HeroBanner" width={300} className='absolute bottom-0 right-20 hidden xl:block'/>
      <motion.img variants={imgVariants} initial={'initial'} animate={'animate'} src={girlTop} alt="HeroBanner" width={320} className='absolute hero-girl2 top-20 right-52 hidden 2xl:block'/>
      <motion.img variants={imgVariants} initial={'initial'} animate={'animate'} src={sideMassage} alt="HeroBanner" width={350} className='absolute hero-girl top-16 left-48 hidden 2xl:block'/>
    </div>
  )
}

export default Hero