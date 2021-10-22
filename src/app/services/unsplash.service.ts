import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  listImages() {
    console.log('listImages ran');
  }
}
