import LeftArrowButton from '@/assets/icon/leftArrow.svg';
import RightArrowButton from '@/assets/icon/rightArrow.svg';
import styles from './styles/CarouselHeader.module.scss';

const CarouselHeader = ({ nextHandler, prevHandler }: { nextHandler: () => void; prevHandler: () => void }) => {
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
