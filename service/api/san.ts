import { ProveData, RemoteSanData } from './types/san';

export interface SanService {
  getSanDetail(sanID: number): Promise<RemoteSanData>;
  getProveDetail(proveID: number): Promise<ProveData>;
}
