import { Injectable } from '@angular/core';
import { createApi } from 'unsplash-js';
import { Random } from 'unsplash-js/dist/methods/photos/types';

const unsplash = createApi({
  // committing the key to git is a bad practice but I am
  // leaving it since this is a small example project
  // otherwise I would store it in a .env file
  accessKey: 'CH4QCQpAe83QwPygfe3Kdcinqqutm6fVQYyb-hmB6OE',
});

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  photos: Random[] = [];

  /**
   * Fetch 6 random unsplash photos.
   */
  getPhotos() {
    unsplash.photos.getRandom({ count: 6 }).then((result) => {
      if (result.errors) {
        console.log('error occurred: ', result.errors[0]);
      } else {
        this.photos = result.response as Random[];
      }
    });
  }
}
