import { useEffect, useState } from 'react';

const useCarousel = ({ slideCount, slidesToShow }: { slideCount: number; slidesToShow: number }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchCoordinate, setCoordinate] = useState<number>(0);
  const [isFirstTouch, setFirstTouch] = useState<boolean>(false);
  const [transformCSSValue, setTransformValue] = useState<string>(
    `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
  );

  const nextHandler = () => currentIndex <= slideCount && setCurrentIndex((prevState) => prevState + 1);
  const prevHandler = () => currentIndex > 0 && setCurrentIndex((prevState) => prevState - 1);

  const handleTouchStart = (e: React.TouchEvent) => {
    setCoordinate(e.touches[0].clientX);
    setFirstTouch(true);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isFirstTouch) return;
    const currentCoordinate = e.touches[0].clientX;
    const isValidNextMoveTouch = touchCoordinate - currentCoordinate > 5;
    const isValidPrevMoveTouch = touchCoordinate - currentCoordinate < -5;
    isValidNextMoveTouch && nextHandler();
    isValidPrevMoveTouch && prevHandler();
    setFirstTouch(false);
  };

  useEffect(() => {
    setTransformValue(`translateX(-${currentIndex * (100 / slidesToShow)}%)`);
  }, [currentIndex, slidesToShow]);

  return {
    transformCSSValue,
    prevHandler,
    nextHandler,
    handleTouchStart,
    handleTouchMove,
  };
};

export default useCarousel;
