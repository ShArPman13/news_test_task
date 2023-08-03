import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomNewsService } from 'src/app/services/custom-news.service';
import { FetchingDataService } from 'src/app/services/fetching-data.service';
import { IOneNew } from 'src/app/types/IOneNew';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss'],
})
export class AllNewsComponent implements OnInit {
  public isLoading = false;

  public allNews$ = this.fetchNewsService.fetchedNews$;

  public customNewsFromLS = this.customNewsService.customNews$;

  public constructor(
    private fetchNewsService: FetchingDataService,
    private customNewsService: CustomNewsService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.allNews$.subscribe();
    this.fetchNewsService.isLoading$.subscribe((loading: boolean) => {
      this.isLoading = loading;
    });
  }

  public onClick(news: IOneNew): void {
    this.router.navigateByUrl(`details/${news.id}`);
  }
}
