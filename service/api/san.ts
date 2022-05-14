import { RemoteSanData } from './types/san';

export interface SanService {
  getSanDetail(sanID: number): Promise<RemoteSanData>;
}
