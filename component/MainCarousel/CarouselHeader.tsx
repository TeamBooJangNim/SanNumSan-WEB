import styles from './styles/CarouselHeader.module.scss';
import LeftArrowButton from '@/assets/icon/leftArrow.svg';
import RightArrowButton from '@/assets/icon/rightArrow.svg';

interface CarouselHeaderType {
  next: () => void;
  prev: () => void;
}

const CarouselHeader = ({ next, prev }: CarouselHeaderType) => {
  return (
    <div className={styles.header}>
      <h1>다음엔 이 코스 어떠세요?</h1>
      <div className={styles.button__container}>
        <LeftArrowButton onClick={prev} />
        <RightArrowButton onClick={next} />
      </div>
    </div>
  );
};

export default CarouselHeader;
