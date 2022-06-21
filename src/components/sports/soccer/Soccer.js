import './Soccer.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Nav from '../../nav/Nav';
import Card1 from '../../cards/card1/Card1';
import Card2 from '../../cards/card2/Card2';
import Pele from '../../../resources/images/soccer/PELÉ.jpg';
import Maradona from '../../../resources/images/soccer/Diego Maradona.jpg';
import Nazario from '../../../resources/images/soccer/Ronaldo Nazario.jpg';
import Messi from '../../../resources/images/soccer/Messi.jpg';
import Stefano from '../../../resources/images/soccer/Alfred Di Stefano.jpg';
import Beckenbauer from '../../../resources/images/soccer/Franz Beckenbauer.jpg';
import Ronaldo from '../../../resources/images/soccer/Cristiano Ronaldo.jpg';
import FIFA from '../../../resources/images/soccer/fifa-logo.png';
import AFC from '../../../resources/images/soccer/afc-logo.jpg';
import CAF from '../../../resources/images/soccer/CAF-logo.webp';
import UEFA from '../../../resources/images/soccer/uefa.png';
import CONCACAF from '../../../resources/images/soccer/concacaf.png';
import CONMEBOL from '../../../resources/images/soccer/conmebol.jpg';
import OFC from '../../../resources/images/soccer/ofc-logo.webp';
import Footer from '../../footer/Footer';
import useDocumentTitle from '../../../hooks/useDocumentTitle';

const Soccer = () => {

    const slidesPerViewMobile = 3;
    useDocumentTitle('Soccer | ByteSport')

  return (
    <div className='soccer'>
        <Nav/>
        <header className='soccer-header'>
            <p>
                Soccer
            </p>
        </header>
        <div className='soccer-body'>

            <p className='bio'>
            &nbsp; &nbsp;&nbsp; Football, also called association football or soccer, game in which two teams of 11 players, using any part of their bodies except their hands and arms, try to maneuver the ball into the opposing team’s goal. Only the goalkeeper is permitted to handle the ball and may do so only within the penalty area surrounding the goal. The team that scores more goals wins.
            <br/>
            <br/>
            &nbsp; &nbsp;&nbsp; Football is the world’s most popular ball game in numbers of participants and spectators. Simple in its principal rules and essential equipment, the sport can be played almost anywhere, from official football playing fields (pitches) to gymnasiums, streets, school playgrounds, parks, or beaches. Football’s governing body, the Fédération Internationale de Football Association (FIFA), estimated that at the turn of the 21st century there were approximately 250 million football players and over 1.3 billion people “interested” in football; in 2010 a combined television audience of more than 26 billion watched football’s premier tournament, the quadrennial month-long World Cup finals.
            </p>
        
        <div className='goats'>

            <p className='goats-header'>
                Meet The GOATS
            </p>

            <div className="swiper-wrapper-parent-goats" >
                <Swiper
                spaceBetween={50}
                slidesPerView={slidesPerViewMobile}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <Card2 name='Pelé' nation='Brazil' title='FIFA World Cup x3' image={Pele} height='400' width='300' bgcolor='#5A806B' textcolor='white' dob='23 October 1940'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card2 name='Diego Maradona' nation='Argentina' title='Footballer Of The Year x4' image={Maradona} height='400' width='300' bgcolor='#0B0F12' textcolor='white' dob='30 October 1960'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card2 name='Ronaldo Nazario' nation='Brazil' title="Ballon d'Or x2" image={Nazario} height='400' width='300' bgcolor='#3d5477' textcolor='white' dob='3 June 1986'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card2 name='Franz Beckenbauer' nation='Germany' title="Ballon d'Or x2 "  image={Beckenbauer} height='400' width='300' bgcolor='#AAAAAA' textcolor='white' dob='4 July 1926'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card2 name='Lionel Messi' nation='Argentina' title="Ballon d'Or x7" image={Messi} height='400' width='300' bgcolor='#657423' textcolor='white' dob='24 June 1987'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card2 name='Alfred Di Stéfano' nation='Spain' title="Ballon d'Or x2 "  image={Stefano} height='400' width='300' bgcolor='#AAAAAA' textcolor='white' dob='4 July 1926'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card2 name='Cristiano Ronaldo' nation='Portugal' title="Ballon d'Or x5 "  image={Ronaldo} height='400' width='300' bgcolor='#9D041A' textcolor='white' dob='5 Februaury 1985'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div style={{backgroundColor: '', width: '300px', height: '300px'}}>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div style={{backgroundColor: '', width: '300px', height: '300px'}}>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div style={{backgroundColor: '', width: '300px', height: '300px'}}>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div style={{backgroundColor: '', width: '300px', height: '300px'}}>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div style={{backgroundColor: '', width: '300px', height: '300px'}}>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div style={{backgroundColor: '', width: '300px', height: '300px'}}>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div style={{backgroundColor: '', width: '300px', height: '300px'}}>
                    </div>
                </SwiperSlide>
                
                
                
                
                </Swiper>
            </div>

        </div>
        
        <div className='association'>

            <p className='association-header'>
                Governing Bodies
            </p>

            <div className="swiper-wrapper-parent-association">
                <Swiper
                spaceBetween={50}
                slidesPerView={slidesPerViewMobile}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='swiper-wrapper-association'
                >
                <SwiperSlide>
                    <Card1 name='FIFA' image={FIFA} site='https://www.fifa.com' length='250' bgcolor='white' textcolor='#004A96' border='5px solid #004A96'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card1 name='AFC' image={AFC} site='https://the-afc.com' length='250' bgcolor='white' textcolor='#2E3192' border='5px solid #2E3192'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card1 name='CAF' image={CAF} site='https://cafonline.com' length='250' bgcolor='white' textcolor='#01852E' border='5px solid #01852E'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card1 name='OFC' image={OFC} site='https://oceaniafootball.com' length='250' bgcolor='white' textcolor='#D0E63E' border='5px solid #D0E63E'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card1 name='CONCACAF' image={CONCACAF} site='https://concacaf.com' length='250' bgcolor='#F7F7F7' textcolor='#EF9F40' border='5px solid #EF9F40' coverSize='100%'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card1 name='UEFA' image={UEFA} site='https://uefa.com' length='250' bgcolor='white' textcolor='red'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card1 name='CONMEBOL' image={CONMEBOL} site='https://conmebol.com' length='250' bgcolor='white' textcolor='#0166B8' border='5px solid #0166B8'/>
                </SwiperSlide>
                
                {/* <SwiperSlide>
                    <Card1 name='The Championships Wimbeldon' nation='Spain' title='22 Grand Slams (Single)' image={TCW} site='https://wimbeldon.com' length='250' bgcolor='#370065' textcolor='white' dob='3 June 1986'/>
                </SwiperSlide> */}
                
                
                
                
                </Swiper>
            </div>

        </div>

        </div>

        <Footer/>

    </div>
  )
}

export default Soccer