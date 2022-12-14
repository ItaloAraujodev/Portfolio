import React, { useEffect } from 'react';
// --------------- IMAGENS -------------------------
import minhaFoto from '../../assets/MinhaFoto.jpg';
import fotoAboult from '../../assets/aboult.png';
import curriculo from '../../assets/Italo-curriculo.pdf';
// --------------- IMAGENS FIM -------------------------
import './about.css';
import AOS from 'aos';

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
}, [])

  return (
    <div className='container-fluid my-5 mx-0'>
      <div className='text-center'>
        <img src={minhaFoto} alt="Foto de perfil" className='profile-img' />
        <h1 className='fw-light'>Sobre mim</h1>
        <hr className='mx-5' />
        <h3 className='fw-light ajustando'>Me chamo Ítalo, tenho 23 anos e sou de Alagoas. Atualmente estou cursando Analise e desenvolvimento de sistemas pela Uninter e desenvolvimento Web Full-Stack na Trybe e RocketSeat. Sempre amei tudo que envolve tecnologia e acredito no poder da transformação através dela. Gosto de assistir, series e filmes de todos os gêneros e praticar atividade física nas horas vagas. <br />
        </h3>
      </div>
      
      <div className='row justify-content-center mt-5'>
         <div className='col-md-6 mt-5'>
          <h1 className='text-center fw-light mt-5'>Experiência</h1>
          <h4 className=' fw-light text-center'>Estou tendo mais de 6 meses de experiência <br /> 
          Trabalhei em vários projetos relevantes
          </h4>
          
        </div>
        <div className='col-md-6' data-aos='fade-left'>
          <img src={fotoAboult} alt="" className='about-img' />
        </div> 

        <div className='text-center' data-aos='fade-up'>
          <a href={curriculo} style={{textDecoration: 'none'}} download>
          <button className='btn custom-btn rounded-pill px-5 mt-5 shadow'>
            Obter meu currículo</button>
            </a>
        </div>

      </div>
    </div>
  )
}

export default About