import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICustomNew } from '../types/ICustomNew';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CustomNewsService {
  public customNews$ = new BehaviorSubject<ICustomNew[]>(
    this.ls.getCustomNews() || []
  );

  public constructor(private ls: LocalStorageService) {}

  public addCustomNews(news: ICustomNew) {
    this.customNews$.next([news, ...this.customNews$.value]);
    this.ls.setCustomNews(this.customNews$.value);
  }
}
