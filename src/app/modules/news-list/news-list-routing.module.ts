import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { OneNewDetailsComponent } from './components/one-new-details/one-new-details.component';

const routes: Routes = [
  {
    path: '',
    component: AllNewsComponent,
  },
  {
    path: 'details/:id',
    component: OneNewDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsListRoutingModule {}
