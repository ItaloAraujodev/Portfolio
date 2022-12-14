import React, { useEffect } from 'react'
import { CgScrollV } from 'react-icons/cg'
import Typewriter from 'typewriter-effect'; //Efeito nas palaveas
import device from '../../assets/devices.png'
import AOS from 'aos';

const HomeShocase = () => {
  
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease-in-out', delay: 1000 })
  }, [])

  let words = ['Competência em Node js, Express Js, React, Redux, Git, MongoDB, TypeScript, SQL.']

  return (
    <>
      <div className='row justify-content-center mx-0 showcase-div mt-4'>
        <div className='col-md-6 showcase-text mt-5' data-aos = 'slide-left' >
          <h1>Oi,</h1>
          <h2>Eu sou o Ítalo, um desenvolvedor Full Stack.</h2>
          <h5 className='texto'>Meu foco está em aliar as expectativas de meus clientes/parceiros às necessidades de seu público alvo</h5>
          <Typewriter options={{ 
            strings: words, 
            autoStart: true, 
            delay: 100,
            pauseFor: 50000,
            wrapperClassName: 'typewriter'
            }}/>
        </div>
      <div className='col-md-6 showcase-right-div' data-aos = 'slide-right'>
          <img src={device} alt='' />
      </div>

      </div>
      <div className='text-center'>
          <button data-bs-toggle= "tooltip" data-bs-placement ="top" title="Scroll-dowm" className='btn btn-outline-dark shadow py-2 rounded-pill px-1'><CgScrollV/></button>
      </div>
    </>
  )
}

export default HomeShocase