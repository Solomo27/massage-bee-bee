import Logo from '/images/Bee-logo.webp'


const Footer = () => {
  return (
    <div className='absolute bottom-0 w-full flex justify-between items-center p-2 bg-light text-black px-10 border-t-2 border-main'>
      <img src={Logo} alt="Logo"  width={150}/>
  
      <p className='text-xl'>Kontakt: 076-100 57 11</p>
    </div>
  )
}

export default Footer