import { Component, OnInit } from '@angular/core';
import { IexPhoto } from '../iex-photo';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  allPhotos: IexPhoto[] = [];

  constructor(private photoService: PhotosService) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(x => {
      this.allPhotos = x;
    }
    );
  }

}
