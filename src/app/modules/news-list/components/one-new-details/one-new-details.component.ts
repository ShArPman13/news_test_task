import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, map, mergeMap } from 'rxjs';
import { FetchingDataService } from 'src/app/services/fetching-data.service';
import { ICertainNew } from 'src/app/types/ICertainNew';

@Component({
  selector: 'app-one-new-details',
  templateUrl: './one-new-details.component.html',
  styleUrls: ['./one-new-details.component.scss'],
})
export class OneNewDetailsComponent implements OnInit, OnDestroy {
  public news$?: Observable<ICertainNew>;

  public isLoading = false;

  public sub?: Subscription;

  public constructor(
    private fetchNewsService: FetchingDataService,
    private router: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.news$ = this.router.params.pipe(
      mergeMap((params) => this.fetchNewsService.getCertainNew(params['id']))
    );
    this.sub = this.fetchNewsService.isLoading$.subscribe(
      (loading: boolean) => {
        this.isLoading = loading;
      }
    );
  }

  public ngOnDestroy() {
    this.fetchNewsService.isMainPage$.next(true);
    this.sub?.unsubscribe();
  }
}
