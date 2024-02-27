import React from 'react'
import Winter from './winter/Winter'
import Discover from './discover/Discover'
import Recommended from './recommended/Recommended'
import Swaiper from '../../components/Carusel/Swaiper'
import './Home.scss'
function Home() {

  return (
    <>
    <Winter/>
    <Discover/>
    <Recommended/>
     <Swaiper/>
    </>
  )
}

export default Home