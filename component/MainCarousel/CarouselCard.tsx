import Image from 'next/image';
import styles from './styles/Carousel.module.scss';
import mockImage from '@/assets/img/mockImage.png';

const CarouselCard = () => {
  return (
    <article className={styles.card}>
      <Image src={mockImage} alt="card" width={213} height={330} />
      <p className={styles.name}>북한산</p>
      <p className={styles.difficulty}>난이도 하</p>
    </article>
  );
};

export default CarouselCard;
