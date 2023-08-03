import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public visible: boolean = false;

  public showDialog() {
    this.visible = true;
  }

  public isModalVisible(value: boolean) {
    this.visible = value;
  }
}
