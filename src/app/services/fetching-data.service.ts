import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../types/IResponse';
import { BehaviorSubject, map, mergeMap, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { ICertainNew } from '../types/ICertainNew';
import { IOneNew } from '../types/IOneNew';

@Injectable({
  providedIn: 'root',
})
export class FetchingDataService {
  private CERTAIN_NEW_URL = 'https://webapi.autodoc.ru/api/news/item/';

  public isLoading$ = new BehaviorSubject<boolean>(false);

  public isMainPage$ = new BehaviorSubject<boolean>(true);

  public fetchedNews$ = new BehaviorSubject<IOneNew[]>([]);

  public constructor(private http: HttpClient) {
    this.getNews(1, 12);
  }

  public getNews(page: number, amount: number) {
    this.isLoading$.next(true);
    const LIST_NEWS_URL = `https://webapi.autodoc.ru/api/news/${page}/${amount}`;
    return this.http
      .get<IResponse>(LIST_NEWS_URL)
      .pipe(
        map(({ news }) => {
          this.isLoading$.next(false);
          this.fetchedNews$.next([...this.fetchedNews$.value, ...news]);
        })
      )
      .subscribe();
  }

  public getCertainNew(id: string) {
    this.isMainPage$.next(false);
    this.isLoading$.next(true);
    return this.fetchedNews$.pipe(
      mergeMap((news) => {
        const certainURL = news.find((el) => el.id === Number(id))?.url;
        this.isLoading$.next(false);
        return this.http.get<ICertainNew>(
          `${this.CERTAIN_NEW_URL}${certainURL}`
        );
      })
    );
  }
}
