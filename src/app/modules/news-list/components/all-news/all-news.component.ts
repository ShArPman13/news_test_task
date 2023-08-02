import { Component, OnInit } from '@angular/core';
import { FetchingDataService } from 'src/app/services/fetching-data.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss'],
})
export class AllNewsComponent implements OnInit {
  public allNews$ = this.fetchNewsService.getNews();

  public constructor(public fetchNewsService: FetchingDataService) {}

  ngOnInit(): void {
    this.allNews$.subscribe((data) => {
      console.log(data);
    });
  }
}
