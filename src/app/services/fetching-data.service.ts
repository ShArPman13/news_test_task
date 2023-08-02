import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IOneNew } from '../types/IOneNew';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchingDataService {
  private LIST_NEWS_URL = 'https://webapi.autodoc.ru/api/news/1/10';

  public constructor(private http: HttpClient) {}

  public getNews() {
    return this.http.get<IOneNew[]>(this.LIST_NEWS_URL);
  }
}
