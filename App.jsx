import React, { useState } from "react";
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer /Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState,setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
<Hero/>
<div className="container">
<Title subTitle='Our PROGRAM' title ='What we offer'/>
<Programs/>
<About setPlayState={setPlayState}/>
<Title subTitle='Gallery' title ='Campus Photos'/>
<Campus/>
<Title subTitle='TESRIMONIALS' title ='What Students says'/>
<Testimonials/>
<Title subTitle='Constact us' title ='Get in touch'/>
<Contact/>
<Footer/>
</div>
<VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App