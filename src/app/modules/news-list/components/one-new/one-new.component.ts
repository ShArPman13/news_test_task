import { Component, Input, OnInit } from '@angular/core';
import { ICustomNew } from 'src/app/types/ICustomNew';
import { IOneNew } from 'src/app/types/IOneNew';

@Component({
  selector: 'app-one-new',
  templateUrl: './one-new.component.html',
  styleUrls: ['./one-new.component.scss'],
})
export class OneNewComponent implements OnInit {
  @Input() public new!: IOneNew | ICustomNew;

  public date!: string;

  ngOnInit(): void {
    // console.log(this.new);
    this.date = this.new.publishedDate
      ? new Date(this.new.publishedDate).toString()
      : new Date().toString();
  }
}
