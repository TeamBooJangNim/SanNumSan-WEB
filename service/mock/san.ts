import { SanService } from '../api/san';

export function sanMock(): SanService {
  async function getSanDetail(sanID: number) {
    return {
      id: sanID,
      name: '북한산',
      level: '상',
      height: 351,
      length: 10,
      map: {
        latitude: 37.662021,
        longitude: 126.993033,
      },
      defaultImage:
        'https://images.france.fr/zeaejvyq9bhj/4jKuK6yobYMkGGQ4IO0Kk2/b77683922a8cca16afaa0d2028df39ad/savoie-mont-blanc-ete-header.jpg',
    };
  }

  return { getSanDetail };
}
