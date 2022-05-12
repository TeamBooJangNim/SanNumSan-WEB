import { useState } from 'react';
import ImageConstant from './constants';

const useCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchCoordinate, setCoordinate] = useState<number>(0);
  const [isFirstTouch, setFirstTouch] = useState<boolean>(false);

  const next = () => currentIndex <= ImageConstant.totalImage && setCurrentIndex((prevState) => prevState + 1);
  const prev = () => currentIndex > 0 && setCurrentIndex((prevState) => prevState - 1);

  const handleTouchStart = (e: React.TouchEvent) => {
    setCoordinate(e.touches[0].clientX);
    setFirstTouch(true);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isFirstTouch) return;
    const currentCoordinate = e.touches[0].clientX;
    const isValidNextMoveTouch = touchCoordinate - currentCoordinate > 5;
    const isValidPrevMoveTouch = touchCoordinate - currentCoordinate < -5;
    isValidNextMoveTouch && next();
    isValidPrevMoveTouch && prev();
    setFirstTouch(false);
  };

  return {
    currentIndex,
    prev,
    next,
    handleTouchStart,
    handleTouchMove,
  };
};

export default useCarousel;
