import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { NewsListRoutingModule } from './news-list-routing.module';
import { CardModule } from 'primeng/card';
import { OneNewComponent } from './components/one-new/one-new.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { OneNewDetailsComponent } from './components/one-new-details/one-new-details.component';

@NgModule({
  declarations: [AllNewsComponent, OneNewComponent, OneNewDetailsComponent],
  imports: [
    CommonModule,
    NewsListRoutingModule,
    CardModule,
    ProgressSpinnerModule,
  ],
})
export class NewsListModule {}
