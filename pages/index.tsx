import { BaseHead } from '@/component/Head/Head';
import Header from '@/component/Header/Header';
import CarouselContainer from '@/component/MainCarousel/CarouselContainer';
import SanRecordGridView from '@/component/SanRecordGridView/SanRecordGridView';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main>
      <BaseHead />
      <Header />
      <CarouselContainer />
      <SanRecordGridView />
    </main>
  );
};

export default Home;
