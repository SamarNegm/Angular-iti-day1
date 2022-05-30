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

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.currUser = this.userService.getCurrentUser();
  }

}
