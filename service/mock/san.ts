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

  async function getProveDetail(proveID: number) {
    return {
      id: proveID,
      image: 'https://user-images.githubusercontent.com/73823388/168329553-4e2acea9-26b7-4d23-8af4-27fa8f1c639a.png',
      comment: '북한산 등반 완료 우하하',
      userName: '짱비 주영',
    };
  }

  return { getSanDetail, getProveDetail };
}
