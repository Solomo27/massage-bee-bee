import oil from '/images/oil.png'
import Thai from '/images/thai-mass.png' 
import Mix from '/images/mix.png' 
import {motion} from 'framer-motion'

const Service = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1,
        staggerChildren: 0.3
      }
    }
  }


  return (
    <div className='service w-full h-full flex flex-col gap-10 justify-center items-center relative'>
      <motion.h1 variants={variants} initial={'initial'} whileInView={'animate'} className='text-4xl text-main underline font-bold tracking wide mb-10'>Behandlingar</motion.h1>
      <motion.div variants={variants} initial={'initial'} whileInView={'animate'} className='flex gap-10 items-center'>
        <img loading='lazy' src={oil} width={400} alt="Massage Oil" className='border-2 border-main p-5'/>
        <div className='flex flex-col gap-5 text-main'>
          <h4 className='text-2xl font-bold tracking-wide'>Olje Massage</h4>
          <p className='desc'>Aroma-Oljemassage är en mjuk massage på den yttre muskeln. Denna behandling rekommenderas till dig som vill ha en mjukare och mer avslappnande massage. 
            Oljemassagen förstärker andningen och immunförsvaret, 
            förbättrar blodcirkulationen och även kroppens endorfinnivå höjs. Allt detta leder till avslappning i muskler, fräschare hud och bättre sömn
          </p>
        </div>
      </motion.div>
      <motion.div className='flex gap-10 items-center' variants={variants} initial={'initial'} whileInView={'animate'}>
        <img  loading='lazy' src={Thai} width={400} alt="Massage Oil" className='border-2 border-main p-5'/>
        <div className='flex flex-col gap-5 text-main'>
          <h4 className='text-2xl font-bold tracking-wide'>Thai Massage</h4>
          <p className='desc'>Aroma-Oljemassage är en mjuk massage på den yttre muskeln. Denna behandling rekommenderas till dig som vill ha en mjukare och mer avslappnande massage. 
            Oljemassagen förstärker andningen och immunförsvaret, 
            förbättrar blodcirkulationen och även kroppens endorfinnivå höjs. Allt detta leder till avslappning i muskler, fräschare hud och bättre sömn
          </p>
        </div>
      </motion.div>
      <motion.div variants={variants} initial={'initial'} whileInView={'animate'} className='flex gap-10 items-center'>
        <img loading='lazy' src={Mix} width={400}  alt="Massage Oil" className='border-2 border-main p-5'/>
        <div className='flex flex-col gap-5 text-main'>
          <h4 className='text-2xl font-bold tracking-wide'>Mix Massage</h4>
          <p className='desc'> Är en oslagbar kombination av både Thaimassage och Aromamassage vid samma behandlingstillfälle. 
          Den kan varmt rekomenderas till våra kunder, Vi erbjuder olika typer av massage, såsom klassisk Thai, djupgående massage och aromaterapi. Du kan välja en kortare eller längre session beroende på din tid och budget.
          </p>
        </div>
      </motion.div>

    </div>
  )
}

export default Service