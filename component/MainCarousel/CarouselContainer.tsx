import CarouselCard from './CarouselCard';
import CarouselHeader from './CarouselHeader';
import styles from './styles/Carousel.module.scss';
import useCarousel from './useCarousel';

const CarouselContainer = () => {
  const { transformCSSValue, prevHandler, nextHandler, handleTouchStart, handleTouchMove } = useCarousel({
    slideCount: 5,
    slidesToShow: 2,
  });
  const mockImageList = new Array(10).fill(null);

  return (
    <section>
      <CarouselHeader nextHandler={nextHandler} prevHandler={prevHandler} />
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.contentWrapper} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div className={styles.content} style={{ transform: transformCSSValue }}>
              {mockImageList.map((_, index) => (
                <CarouselCard key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CarouselContainer;
