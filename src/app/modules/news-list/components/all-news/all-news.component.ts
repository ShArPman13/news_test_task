import { Component, OnInit } from '@angular/core';
import { CustomNewsService } from 'src/app/services/custom-news.service';
import { FetchingDataService } from 'src/app/services/fetching-data.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss'],
})
export class AllNewsComponent implements OnInit {
  public isLoading = false;

  public allNews$ = this.fetchNewsService.getNews();

  public customNewsFromLS = this.customNewsService.customNews$;

  public constructor(
    private fetchNewsService: FetchingDataService,
    private customNewsService: CustomNewsService,
    private ls: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.allNews$.subscribe();
    this.fetchNewsService.isLoading$.subscribe((loading: boolean) => {
      this.isLoading = loading;
    });
  }
}
