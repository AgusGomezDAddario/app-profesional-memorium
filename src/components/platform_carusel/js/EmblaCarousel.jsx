import React from 'react';
import '../images_carrusel';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import { images_carrusel } from '../images_carrusel';
import AudioPlayer from '../../AudioInstrucciones';

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide embla__class-name" key={index}>
              <img 
                className="embla__slide__img"
                src={images_carrusel[index].src} 
                alt="Imagen de interfaz de Memorium App Profesional" 
              />
              <div>
                <p className='embla__slide__text'>{images_carrusel[index].text}</p>
              </div>
              <div className="embla__audio">
                <AudioPlayer audioSrc={`https://mybuckets3appprofesionalesmemorium.s3.us-east-2.amazonaws.com/${index}.mp3`} />
            </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;