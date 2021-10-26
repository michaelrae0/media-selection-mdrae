import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const baseUrl = 'https://api.unsplash.com';
const headers = {
  // committing the key to git is a bad practice but I am
  // leaving it since this is a small example project
  // otherwise I would store it in a .env file
  Authorization: 'Client-ID CH4QCQpAe83QwPygfe3Kdcinqqutm6fVQYyb-hmB6OE',
  'Accept-Version': 'v1',
};

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(`A backend error occurred: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError('Failed to fetch photos.');
  }

  /**
   * Fetch 6 random unsplash photos.
   */
  getPhotos() {
    return this.http
      .get(baseUrl + '/photos/random', {
        headers,
        params: { count: 6 },
      })
      .pipe(catchError(this.handleError));
  }
}
