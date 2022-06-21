import './Tennis.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Nav from '../../nav/Nav';
import Card1 from '../../cards/card1/Card1';
import Card2 from '../../cards/card2/Card2';
import NovakDjokovic from '../../../resources/images/tennis/Novak Djokovic.jpg';
import RogerFederer from '../../../resources/images/tennis/Roger Federer.jpg';
import RafaelNadal from '../../../resources/images/tennis/Rafael Nadal.jpg';
import JimmyConners from '../../../resources/images/tennis/Jimmy Conners.jpg';
import IvanLendl from '../../../resources/images/tennis/Ivan Lendl.jpg';
import ATP from '../../../resources/images/tennis/atp.jpg'
import ITF from '../../../resources/images/tennis/itf.jpg'
// import TCW from '../../../resources/images/the championship wembledon.jpg'
import Footer from '../../footer/Footer';
import useDocumentTitle from '../../../hooks/useDocumentTitle';

const Tennis = () => {

    const slidesPerViewMobile = 3;
    useDocumentTitle('Tennis | ByteSport')

  return (
    <div className='tennis'>
        <Nav/>
        <header className='tennis-header'>
            <p>
                Tennis
            </p>
        </header>
        <div className='tennis-body'>

            <p className='bio'>
            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Original name lawn tennis, game in which two opposing players (singles) or pairs of players (doubles) use tautly strung rackets to hit a ball of specified size, weight, and bounce over a net on a rectangular court. Points are awarded to a player or team whenever the opponent fails to correctly return the ball within the prescribed dimensions of the court. Organized tennis is played according to rules sanctioned by the International Tennis Federation (ITF), the world governing body of the sport.
            <br/>
            <br/>
            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Tennis originally was known as lawn tennis, and formally still is in Britain, because it was played on grass courts by Victorian gentlemen and ladies. It is now played on a variety of surfaces. The origins of the game can be traced to a 12th–13th-century French handball game called jeu de paume (“game of the palm”), from which was derived a complex indoor racket-and-ball game: real tennis. This ancient game is still played to a limited degree and is usually called real tennis in Britain, court tennis in the United States, and royal tennis in Australia.
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
                    <Card2 name='Novak Djokovic' nation='Serbia' title='20 Grand Slams (Single)' image={NovakDjokovic} site='https://novakdjokovic.com' height='400' width='300' bgcolor='#1D457B' textcolor='white' dob='22 May 1987'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card2 name='Roger Federer' nation='Swiss' title='20 Grand Slams (Single)' image={RogerFederer} site='https://rogerfederer.com' height='400' width='300' bgcolor='#0B0F12' textcolor='white' dob='8 August 1981'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card2 name='Rafael Nadal' nation='Spain' title='22 Grand Slams (Single)' image={RafaelNadal} height='400' width='300' bgcolor='#3d5477' textcolor='white' dob='3 June 1986'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card2 name='Jimmy Connors' nation='United States' title='8 Grand Slams (Single)' image={JimmyConners} height='400' width='300' bgcolor='#799073' textcolor='white' dob='22 May 1987'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card2 name='Ivan Lendl' nation='Czechoslovakia' title='8 Grand Slams (Single)' image={IvanLendl} height='400' width='300' bgcolor='#567742' textcolor='white' dob='22 May 1987'/>
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
                    <Card1 name='ATP Tour' nation='Serbia' title='20 Grand Slams (Single)' image={ATP} site='https://www.atptour.com' length='250' bgcolor='#051223' textcolor='white' dob='22 May 1987'/>
                </SwiperSlide>
                
                <SwiperSlide>
                    <Card1 name='ITF' nation='Swiss' title='20 Grand Slams (Single)' image={ITF} site='https://itftennis.com' length='250' bgcolor='white' textcolor='#01835D' dob='8 August 1981' border='5px solid #01835D'/>
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

export default Tennis