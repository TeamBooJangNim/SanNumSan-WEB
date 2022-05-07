import { sanMock } from '../mock/san';
import { SanService } from './san';

export const api: APIService = getAPI();

function getAPI(): APIService {
  return {
    sanService: sanMock(),
  };
}

interface APIService {
  sanService: SanService;
}
