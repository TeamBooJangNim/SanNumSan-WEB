import { useState } from 'react';
import CarouselCard from './CarouselCard';
import CarouselHeader from './CarouselHeader';

import styles from './Carousel.module.scss';

const Constant = {
  totalImgCount: 6,
  showImgCount: 2,
};

const CarouselContainer = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const next = () =>
    currentIndex < Constant.totalImgCount - Constant.showImgCount && setCurrentIndex((prevState) => prevState + 1);
  const prev = () => currentIndex > 0 && setCurrentIndex((prevState) => prevState - 1);

  const handleTouchStart = (e: React.TouchEvent) => setTouchPosition(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => {
    const touchDown = touchPosition;
    if (!touchDown) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (diff > 5) next();
    if (diff < -5) prev();
    setTouchPosition(null);
  };

  const mockImgList = new Array(10).fill(null);

  return (
    <section>
      <CarouselHeader next={next} prev={prev} />
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.contentWrapper} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div
              className={styles.content}
              style={{ transform: `translateX(-${currentIndex * (100 / Constant.showImgCount)}%)` }}>
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
