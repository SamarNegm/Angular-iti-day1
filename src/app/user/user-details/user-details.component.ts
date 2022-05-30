import { Component, OnInit } from '@angular/core';
import { IexUser } from '../iex-user';
import { IUser } from '../iuser';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  currUser?: IexUser;
  image: string = "https://www.w3schools.com/howto/img_avatar.png";
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.currUser = this.userService.getCurrentUser();
  }

}
