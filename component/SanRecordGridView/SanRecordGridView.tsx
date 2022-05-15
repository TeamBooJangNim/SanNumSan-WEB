import mountain1 from '@/assets/img/mountain1.png';
import mountain2 from '@/assets/img/mountain2.png';
import mountain3 from '@/assets/img/mountain3.png';
import mountain4 from '@/assets/img/mountain4.png';
import mountain5 from '@/assets/img/mountain5.png';
import mountain6 from '@/assets/img/mountain6.png';
import Image from 'next/image';
import styles from './record.module.scss';

const SanRecordGridView = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>기록</h1>
      <div className={styles.san__grid__container}>
        <article className={styles.card}>
          <Image src={mountain1} alt="card" width={59} height={59} />
          <p className={styles.name}>인왕산</p>
        </article>
        <article className={styles.card}>
          <Image src={mountain2} alt="card" width={59} height={59} />
          <p className={styles.name}>광교산</p>
        </article>
        <article className={styles.card}>
          <Image src={mountain3} alt="card" width={59} height={59} />
          <p className={styles.name}>북한산</p>
        </article>
        <article className={styles.card}>
          <Image src={mountain4} alt="card" width={59} height={59} />
          <p className={styles.name}>광교산</p>
        </article>
        <article className={styles.card}>
          <Image src={mountain5} alt="card" width={59} height={59} />
          <p className={styles.name}>북한산</p>
        </article>
        <article className={styles.card}>
          <Image src={mountain6} alt="card" width={59} height={59} />
          <p className={styles.name}>인왕산</p>
        </article>
      </div>
    </section>
  );
};

export default SanRecordGridView;
