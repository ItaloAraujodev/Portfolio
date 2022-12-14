import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid text-light shadow text-center mx-0 py-5 footer' style={{background: '#6C63FF' }}>
      <p>Todos os direitos reservados</p>
      <p className='fw-light'>&copy; Ítalo Araújo {new Date().getFullYear()}</p>
      <p className='fw-light'>Obrigado por visitar meu portfólio.</p>
    </div>
  )
}

export default Footer