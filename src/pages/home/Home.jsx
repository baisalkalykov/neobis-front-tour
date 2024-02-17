import React from 'react'
import Winter from './section-one/Winter'
import Discover from './section-two/Discover'
import Recommended from './section-three/Recommended'
import './Home.scss'
function Home() {
  return (
    <>
    <Winter/>
    <Discover/>
    <Recommended/>
    </>
  )
}

export default Home