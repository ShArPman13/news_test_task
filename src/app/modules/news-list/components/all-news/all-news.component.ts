import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { FetchingDataService } from 'src/app/services/fetching-data.service';
import { IOneNew } from 'src/app/types/IOneNew';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss'],
})
export class AllNewsComponent {
  public allNews$ = this.fetchNewsService.getNews();

  public constructor(public fetchNewsService: FetchingDataService) {}

  ngOnInit(): void {
    this.allNews$.subscribe();
  }
}
