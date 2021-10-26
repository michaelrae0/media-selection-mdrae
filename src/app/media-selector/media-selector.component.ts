import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Photo } from 'src/types';
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
    media: new FormControl(''),
  });
  images: Photo[] = [];

  constructor(
    private modalService: NgbModal,
    public unsplashService: UnsplashService
  ) {}

  /**
   * Fetch images from UnsplashService on init.
   */
  ngOnInit() {
    this.loadImages();
  }

  /**
   * Fetch images from UnsplashService manually.
   */
  loadImages() {
    this.unsplashService.getPhotos().subscribe((data) => {
      this.images = data as Photo[];
    });
  }

  /**
   * Open "Select Image" modal.
   */
  onOpenModal(content: any) {
    // console.log(this.unsplashService.photos);
    this.modalService.open(content);
  }

  /**
   * Close "Select Image" modal and set media id value to
   * mediaForm.media.
   */
  onSelectImage(image: Photo) {
    // console.log(image);
    this.modalService.dismissAll();
    this.mediaForm.controls.media.setValue(image?.id);
  }

  /**
   * Remove selected image.
   */
  onUnselectImage() {
    this.mediaForm.controls.media.setValue('');
  }

  /**
   * Get id of selected image.
   * @returns media id
   */
  getSelectedImageId() {
    return this.mediaForm.get('media')?.value;
  }

  /**
   * Get url of selected image.
   * @returns media url
   */
  getSelectedImage() {
    const imageId = this.getSelectedImageId();
    const image = this.images.find((image) => image.id === imageId);
    return image?.urls.regular;
  }

  /**
   * Output media form to console.
   */
  onLogForm() {
    console.log({ mediaForm: this.mediaForm.value });
  }
}
