import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { FileUploadEvent } from 'primeng/fileupload';
import { CustomNewsService } from 'src/app/services/custom-news.service';
import { ICustomNew } from 'src/app/types/ICustomNew';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() visibleModal = new EventEmitter<boolean>();

  public createForm!: FormGroup;

  public customNewsArray: ICustomNew[] = [];

  public fileString = '';

  public constructor(
    private fb: FormBuilder,
    private customNewsService: CustomNewsService,
    private toast: ToastService
  ) {}

  public ngOnInit(): void {
    this.createForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      description: ['', [Validators.minLength(3), Validators.maxLength(255)]],
    });
  }

  public onUpload(event: UploadEvent | FileUploadEvent) {
    let reader = new FileReader();
    reader.readAsDataURL(event.files[0]);
    reader.onload = () => {
      const base64 = reader.result;
      this.fileString = base64 as string;
    };
  }

  public onClick() {
    if (this.createForm?.valid) {
      const customNew = {
        ...this.createForm.value,
        titleImageUrl: this.fileString,
      };
      if (customNew) {
        this.customNewsService.addCustomNews(customNew);
      }
      this.toast.success('Your new has successfully added!');
      this.visibleModal.emit(false);
    } else {
      this.toast.error('Form is not valid!');
    }
  }
}
