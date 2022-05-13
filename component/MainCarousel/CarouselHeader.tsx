import styles from './styles/CarouselHeader.module.scss';
import LeftArrowButton from '@/assets/icon/leftArrow.svg';
import RightArrowButton from '@/assets/icon/rightArrow.svg';

interface CarouselHeaderType {
  nextHandler: () => void;
  prevHandler: () => void;
}

const CarouselHeader = ({ nextHandler, prevHandler }: CarouselHeaderType) => {
  return (
    <div className={styles.header}>
      <h1>다음엔 이 코스 어떠세요?</h1>
      <div className={styles.button__container}>
        <LeftArrowButton onClick={prevHandler} />
        <RightArrowButton onClick={nextHandler} />
      </div>
    </div>
  );
};

export default CarouselHeader;
