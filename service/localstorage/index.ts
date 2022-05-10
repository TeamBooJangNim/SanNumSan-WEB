import { LOCAL_STORAGE_KEYS } from './types';

export const localStorageUtil = {
  getStringOrUndefined: (key: LOCAL_STORAGE_KEYS) => {
    const value = localStorage.getItem(key);
    return value ?? undefined;
  },
  getNumberOrUndefined: (key: LOCAL_STORAGE_KEYS) => {
    const value = localStorage.getItem(key);
    if (!value) return undefined;
    if (isNaN(parseFloat(value))) return undefined;
    return parseFloat(value);
  },
  getBooleanOrUndefined: (key: LOCAL_STORAGE_KEYS) => {
    const value = localStorage.getItem(key);
    if (!value) return undefined;
    if (typeof value !== 'boolean') return undefined;
    return JSON.parse(value);
  },
  setItem: (key: LOCAL_STORAGE_KEYS, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
