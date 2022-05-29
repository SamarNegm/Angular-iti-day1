import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IexPhoto } from './iex-photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private httpclint: HttpClient) { }
  getPhotos() {
    return this.httpclint.get<IexPhoto[]>('https://jsonplaceholder.typicode.com/albums/1/photos')
  }
}
