import { Injectable } from '@angular/core';
import { ICustomNew } from '../types/ICustomNew';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public constructor() {}

  public setCustomNews(news: ICustomNew[]) {
    localStorage.setItem('customNews', JSON.stringify(news));
  }

  public getCustomNews() {
    const lsData = localStorage.getItem('customNews');
    if (lsData) return JSON.parse(lsData);
  }
}
