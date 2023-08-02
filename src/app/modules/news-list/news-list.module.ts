import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { NewsListRoutingModule } from './news-list-routing.module';
import { CardModule } from 'primeng/card';
import { OneNewComponent } from './components/one-new/one-new.component';

@NgModule({
  declarations: [AllNewsComponent, OneNewComponent],
  imports: [CommonModule, NewsListRoutingModule, CardModule],
})
export class NewsListModule {}
