import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { NewsListRoutingModule } from './news-list-routing.module';

@NgModule({
  declarations: [AllNewsComponent],
  imports: [CommonModule, NewsListRoutingModule],
})
export class NewsListModule {}
