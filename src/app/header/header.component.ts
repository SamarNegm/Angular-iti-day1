import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imgSrc?: string;

  constructor() { }

  ngOnInit(): void {
    this.imgSrc = "../../assets/img/logo.svg";
  }

}
