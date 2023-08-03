import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../types/IResponse';
import { BehaviorSubject, map, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class FetchingDataService {
  private LIST_NEWS_URL = 'https://webapi.autodoc.ru/api/news/1/12';

  public isLoading$ = new BehaviorSubject<boolean>(false);

  public constructor(private http: HttpClient) {}

  public getNews() {
    this.isLoading$.next(true);
    return this.http.get<IResponse>(this.LIST_NEWS_URL).pipe(
      map(({ news }) => {
        this.isLoading$.next(false);
        return news;
      })
    );
  }
}
