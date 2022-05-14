import type { NextPage } from 'next';
import Header from '@/component/Header/Header';
import CarouselContainer from '@/component/MainCarousel/CarouselContainer';
import { BaseHead } from '@/component/Head/Head';

const Home: NextPage = () => {
  return (
    <main>
      <BaseHead />
      <Header />
      <CarouselContainer />
    </main>
  );
};

export default Home;
