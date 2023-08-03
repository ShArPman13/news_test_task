import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../types/IResponse';
import { BehaviorSubject, map, mergeMap, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { ICertainNew } from '../types/ICertainNew';

@Injectable({
  providedIn: 'root',
})
export class FetchingDataService {
  private LIST_NEWS_URL = 'https://webapi.autodoc.ru/api/news/1/12';

  private CERTAIN_NEW_URL = 'https://webapi.autodoc.ru/api/news/item/';

  public isLoading$ = new BehaviorSubject<boolean>(false);

  public fetchedNews$ = this.getNews();

  public constructor(private http: HttpClient) {}

  private getNews() {
    this.isLoading$.next(true);
    return this.http.get<IResponse>(this.LIST_NEWS_URL).pipe(
      map(({ news }) => {
        this.isLoading$.next(false);
        return news;
      })
    );
  }

  public getCertainNew(id: string) {
    return this.fetchedNews$.pipe(
      mergeMap((news) => {
        const certainURL = news.find((el) => el.id === Number(id))?.url;
        return this.http.get<ICertainNew>(
          `${this.CERTAIN_NEW_URL}${certainURL}`
        );
      })
    );
  }
}
