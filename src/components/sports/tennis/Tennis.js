import React from 'react';
import './Tennis.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from '../../cards/Card';
import Image1 from '../../../resources/images/Novak Djokovic.jpg';

const Tennis = () => {
  return (
    <div>
        <header className='tennis-header'>
            <p>
                Tennis
            </p>
        </header>
        <div className='tennis-body'>

            <p className='bio'>
            Original name lawn tennis, game in which two opposing players (singles) or pairs of players (doubles) use tautly strung rackets to hit a ball of specified size, weight, and bounce over a net on a rectangular court. Points are awarded to a player or team whenever the opponent fails to correctly return the ball within the prescribed dimensions of the court. Organized tennis is played according to rules sanctioned by the International Tennis Federation (ITF), the world governing body of the sport.

            Tennis originally was known as lawn tennis, and formally still is in Britain, because it was played on grass courts by Victorian gentlemen and ladies. It is now played on a variety of surfaces. The origins of the game can be traced to a 12th–13th-century French handball game called jeu de paume (“game of the palm”), from which was derived a complex indoor racket-and-ball game: real tennis. This ancient game is still played to a limited degree and is usually called real tennis in Britain, court tennis in the United States, and royal tennis in Australia.
            </p>
        
            <div className='goats'>

                <p>
                    Meet The GOATS
                </p>

                <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <Card name='John doe' nation='Switzerland' title='103 AT' image={Image1}/>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>

            </div>

        </div>
    </div>
  )
}

export default Tennis