import CarouselCard from './CarouselCard';
import CarouselHeader from './CarouselHeader';

import ImageConstant from './constants';
import useCarousel from './useCarousel';
import styles from './Carousel.module.scss';

const CarouselContainer = () => {
  const { currentIndex, prev, next, handleTouchStart, handleTouchMove } = useCarousel();

  const mockImgList = new Array(10).fill(null);

  return (
    <section>
      <CarouselHeader next={next} prev={prev} />
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.contentWrapper} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div
              className={styles.content}
              style={{ transform: `translateX(-${currentIndex * (100 / ImageConstant.showImage)}%)` }}>
              {mockImgList.map((_, index) => (
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
