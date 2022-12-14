import React, { useEffect } from 'react';
import { projectDate } from '../../../projectDate';
import AOS from 'aos'; //Efeito de transição

const Project = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, delay: 300 })
    }, [])

    return (
        <div className='container-fluid my-5 mx-0'>
            <h1 className='text-center fw-light'> Meus Projetos</h1>
            <hr />
            <div className='container'>
                {projectDate.map((item, index) => (
                    <div className='row justify-content-between mx-0 shadow p-4 mb-5' key={index} data-aos ={index % 2 === 0 ? 'fade-left' : 'fade-right'}>
                    <div className='col-md-6' data-aos = 'zoom-in'>
                        <img src={item.image} alt={item.title} className='project-img' />
                    </div>

                    <div className='col-md-6 text-center'>
                        <h3 className='fw-light mt-3'>{item.title}</h3>
                        <p className='fw-light'>{item.info}</p>
                        <div className='d-flex justify-content-center ajuste'>
                            <a href={item.liveLink} target='_blank' style={{ textDecoration: 'none' }}>
                                {item.liveLink !== null ? <button className='btn custom-btn rounded-pill shadow'>Demo</button> : 
                                    <button className='btn custom-disabled rounded-pill shadow'>Demo</button>
                                }
                            </a>
                            <a href={item.repoLink} target='_blank' style={{ textDecoration: 'none' }}>
                                {item.repoLink !== null ? <button className='btn custom-btn rounded-pill shadow ms-5'>Repositório</button> : 
                                    <button className='btn custom-disabled rounded-pill shadow ms-5 '>Repo</button>
                                }
                            </a>
                        </div>
                    </div>
                </div>
                ))}
            </div>

        </div>
    )
}

export default Project