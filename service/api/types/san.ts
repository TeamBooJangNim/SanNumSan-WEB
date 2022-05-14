export interface RemoteSanData {
  id: number;
  name: string;
  level: string;
  height: number;
  length: number;
  defaultImage: string;
  map: {
    latitude: number;
    longitude: number;
  };
}

export interface UserSanData {
  sanID: number;
  imageSource: string;
  date: string;
  record: string;
}
