import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneNewComponent } from './one-new.component';

describe('OneNewComponent', () => {
  let component: OneNewComponent;
  let fixture: ComponentFixture<OneNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneNewComponent]
    });
    fixture = TestBed.createComponent(OneNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
