import { Component, OnInit } from '@angular/core';
import { FetchingDataService } from 'src/app/services/fetching-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public visible: boolean = false;

  public isMainPage$ = this.fetchNewsService.isMainPage$;

  public constructor(private fetchNewsService: FetchingDataService) {}

  public showDialog() {
    this.visible = true;
  }

  public isModalVisible(value: boolean) {
    this.visible = value;
  }
}
