import React, { useState } from 'react'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'
import Testimonials from './Components/Testimonials/Testimonials'
import Title from './Components/Title/Title'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className='container'>
      <Title subTitle='Our Program' title='What We Offer' />
       <Programs/>
       <About setPlayState={setPlayState}/>
       <Title subTitle='Gallery' title='Campus Photos' />
       <Campus/>
       <Title subTitle='TESTIMONIALS' title='What Student Says' />
       <Testimonials/>
       <Title subTitle='Contact Us' title='Get in Touch' />
       <Contact/>
       <Footer/>
     </div>
     <Videoplayer playState={playState} setPlayState={setPlayState} />
   </div>
  )
}

export default App