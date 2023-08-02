import { Component, Input, OnInit } from '@angular/core';
import { IOneNew } from 'src/app/types/IOneNew';

@Component({
  selector: 'app-one-new',
  templateUrl: './one-new.component.html',
  styleUrls: ['./one-new.component.scss'],
})
export class OneNewComponent implements OnInit {
  @Input() public new!: IOneNew;

  public date!: string;

  ngOnInit(): void {
    this.date = new Date(this.new.publishedDate).toString();
  }
}
