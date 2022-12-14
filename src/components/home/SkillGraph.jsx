import React, { useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import AOS from 'aos';

const SkillGraph = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const roundProgressStyles = {
        pathColor: `#6C63FF`,
        textColor: '#a1a1a1',
        backgroundColor: '#3e98c7',
        pathTransitionDuration: 0.5,
    }

    const Circular = ({ val, text}) => {
        return <div className='col-md-1 skill-div mb-2 mt-5' data-aos="zoom-in-up" >
                <CircularProgressbar value={ val } maxValue={ 10 } strokeWidth={12} text={val+"/10"} 
                styles= {buildStyles({...roundProgressStyles})}
                />
                <p className='fw-light text-secondary mb-0 text-center'>{text}</p>
            </div>
    }

  return (
    <div className='container-fluid my-5'>
        <h1 className='text-center fw-light'>Gráfico de habilidades</h1>
        <hr />
        <div className='row justify-content-center mx-0'>
            <Circular val={8.5} text='Html' />
            <Circular val={8.5} text='Css' />
            <Circular val={8} text='JavaScript' />
            <Circular val={6} text='TypeScript' />
            <Circular val={8} text='React' />
            <Circular val={6} text='Redux' />
            <Circular val={8.5} text='Node Js' />
            <Circular val={8.5} text='Express Js' />
            <Circular val={7} text='MongoDB' />
            <Circular val={8} text='SQL' />

        </div>
    </div>
  )
}

export default SkillGraph