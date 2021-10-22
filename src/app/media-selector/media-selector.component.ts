import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UnsplashService } from '../services/unsplash.service';

@Component({
  selector: 'app-media-selector',
  templateUrl: './media-selector.component.html',
  styleUrls: ['./media-selector.component.scss'],
})
export class MediaSelectorComponent implements OnInit {
  mediaForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private modalService: NgbModal,
    private unsplashService: UnsplashService
  ) {}

  /**
   * Fetch images from UnsplashService.
   */
  ngOnInit() {
    this.unsplashService.listImages();
  }

  /**
   * Open "Select Image" modal.
   */
  onOpenModal() {
    this.modalService.open('Hello');
  }

  /**
   * Output media form to console.
   */
  onLogForm() {
    console.log({ mediaForm: this.mediaForm.value });
  }
}
