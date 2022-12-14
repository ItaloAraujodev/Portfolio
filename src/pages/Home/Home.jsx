import React from 'react'
import HomeShocase from '../../components/home/HomeShocase'
import SkillGraph from '../../components/home/SkillGraph'
import Project from '../../components/home/Project'
import '../../components/home/home.css'

const Home = () => {
  return (
    <>
      <HomeShocase/>
      <SkillGraph />
      <Project />
    </>
  )
}

export default Home