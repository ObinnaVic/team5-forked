import React from 'react'
import Main from "../components/body/main"
import Carousel from '../components/Carousel/Carousel';

function Home() {
  return (
    <div>
      <Carousel autoSlide={true} duration={10000} />
      <Main />
    </div>
  );
}

export default Home
