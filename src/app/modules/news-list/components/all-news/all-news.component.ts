import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomNewsService } from 'src/app/services/custom-news.service';
import { FetchingDataService } from 'src/app/services/fetching-data.service';
import { IOneNew } from 'src/app/types/IOneNew';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss'],
})
export class AllNewsComponent implements OnInit {
  public isLoading = true;

  public allNews$ = this.fetchNewsService.fetchedNews$;

  public customNewsFromLS = this.customNewsService.customNews$;

  public sub?: Subscription;

  content: IOneNew[] = [];
  page = 1;
  pageSize = 12;

  public constructor(
    private fetchNewsService: FetchingDataService,
    private customNewsService: CustomNewsService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.sub = this.fetchNewsService.isLoading$.subscribe(
      (loading: boolean) => {
        this.isLoading = loading;
      }
    );
  }

  public onClick(news: IOneNew): void {
    this.router.navigateByUrl(`details/${news.id}`);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.offsetHeight;
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (windowHeight + scrollTop + 1 >= documentHeight) {
      this.page++;
      this.loadContent();
    }
  }

  loadContent() {
    this.fetchNewsService.getNews(this.page, this.pageSize);
  }

  public ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
