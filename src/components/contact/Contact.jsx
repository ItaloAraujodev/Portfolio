import React, { useEffect, useState } from 'react'
import contato2 from '../../assets/contato2.png';
import './contact.css';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from 'react-icons/ai';
import AOS from 'aos';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [count, setCount] = useState(0)
  const limit = 2000;

  useEffect(() => {
    AOS.init({ duration: 1000, delay: 100 })
  }, [])
  useEffect(() => {
    setCount(limit - message.length)
  }, [message])

  const sendEnviar = async (e) => {
    e.preventDefault();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name === '' || email === '' || message === '') {
      toast.error('Preenchar todos os campos')
      return;
    }

    if(!email.match(emailRegex)) {
      toast.error('Email inválido !!')
      return;
    }

    const template = {
      from_name: name,
      email: email,
      message: message
    }
    toast.success('Email enviado!!')
    const send = await emailjs.send("service_291e5dz", "template_uj93zmw", template, "WMWmDxs88-pZEYrp0");
    
    setName('')
    setEmail('')
    setMessage('')
    
    return send
  }

  return (
    <div className='container p-4'>
      <div className='row justify-content-center mx-0 mb-5'>
        { /* Left */}
        <div className='col-md-4 p-5 bg-light rounded mt-5 shadow' data-aos='flip-right' >
          <h1 className='fw-light'>Entrar em contato</h1>
          <hr />
          <div className='mb-3'>
            <label htmlFor="">Nome</label>
            <input
              type="text"
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Digite seu nome' />
          </div>

          <div className='mb-3'>
            <label htmlFor="">Email</label>
            <input
              type="email"
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Digite seu email' />
          </div>

          <div className=' mb-3'>
            <label htmlFor="">Mensagem</label>
            <textarea
              name=""
              id="text-area"
              className='form-control'
              value={message}
              maxLength={limit}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Digite sua mensagem aqui...'></textarea>
              <span className='bottom-0 start-0 span-text'>Limit: {count}</span>
          </div>
          <div className='text-end'>
            <button className='btn bg-light custom-btn rounded-pill shadow' onClick={sendEnviar}>Enviar</button>
          </div>
          <h6 className='text-center'>Or</h6>
          <hr />
          <div className='d-flex justify-content-evenly'>
            <a href="https://github.com/Italodevjr" target="_blank" style={{ textDecoration: 'none' }}>
              <button className='btn bg-light custom-btn shadow rounded-pill'><AiFillGithub /></button>
            </a>

            <a href="https://www.linkedin.com/in/italoaraujodev/" target="_blank" style={{ textDecoration: 'none' }}>
              <button className='btn bg-light custom-btn shadow rounded-pill'><AiFillLinkedin /></button>
            </a>

            <a href="https://gmail.com" target="_blank" style={{ textDecoration: 'none' }}>
              <button className='btn bg-light custom-btn shadow rounded-pill'><AiFillMail /></button>
            </a>
          </div>
        </div>
        { /* Right */}
        <div className='col-md-6 p-5 mt-5' data-aos='zoom-in'>
          <img src={contato2} alt="contato" className='contact-img' />
        </div>
      </div>
    </div>
  )
}

export default Contact