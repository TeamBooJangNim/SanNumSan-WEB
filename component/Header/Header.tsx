import hamburger from '@/assets/img/hamburger.png';
import logo from '@/assets/img/logo.png';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={logo} width={50} height={50} alt="logo" />
      <Image src={hamburger} width={50} height={50} alt="hamburger" />
    </header>
  );
};

export default Header;
