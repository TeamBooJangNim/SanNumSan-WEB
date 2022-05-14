import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CarouselCard from './CarouselCard';

const mockCard = {
  name: '북한산',
  difficulty: '난이도 하',
};

describe('Carousel Card UI Unit Test', () => {
  test('Carousel Card의 산 이름은 북한산, 난이도 하가 화면에 나타난다', () => {
    render(<CarouselCard />);

    expect(screen.getByText('북한산').textContent).toBe(mockCard.name);
    expect(screen.getByText('난이도 하').textContent).toBe(mockCard.difficulty);
  });
});
