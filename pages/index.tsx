import { BaseHead } from '@/component/Head/Head';
import Header from '@/component/Header/Header';
import CarouselContainer from '@/component/MainCarousel/CarouselContainer';
import type { NextPage } from 'next';

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
