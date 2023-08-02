import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../types/IResponse';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchingDataService {
  private LIST_NEWS_URL = 'https://webapi.autodoc.ru/api/news/1/10';

  public constructor(private http: HttpClient) {}

  public getNews() {
    return this.http
      .get<IResponse>(this.LIST_NEWS_URL)
      .pipe(map(({ news }) => news));
  }
}
