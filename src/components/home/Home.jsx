import React from 'react'
import { Carousel } from 'antd'
import imagen1 from '../../media/img/Uno.jpg'
import imagen2 from '../../media/img/Dos.jpeg'
import imagen3 from '../../media/img/Tres.jpeg'
const Home = () => (
        <Carousel autoplay>
            <img  src={imagen1} alt="Uno"/>
            <img src={imagen2} alt="Dos" />
            <img src={imagen3} alt="Tres"/>
        </Carousel>
)

export default Home
