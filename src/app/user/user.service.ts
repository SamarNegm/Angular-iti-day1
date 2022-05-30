
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './iuser';
import { IexUser } from './iex-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userobj: IUser[] = [{ id: 1, name: 'admin', email: 'admin@admin.com', address: 'egypt cairo ' },
  { id: 2, name: 'admin2', email: 'admin2@admin.com', address: 'egypt cairo ' },
  { id: 3, name: 'admin3', email: 'admin3@admin.com', address: 'egypt cairo ' },
  { id: 4, name: 'admin4', email: 'admin4@admin.com', address: 'egypt cairo ' },
  { id: 5, name: 'admin5', email: 'admin5@admin.com', address: 'egypt cairo ' }]
  currUser?: IexUser;
  constructor(private httpclint: HttpClient) { }
  getAllUser(): IUser[] {
    return this.userobj;
  }
  getUserById(id?: number) {
    return this.userobj.find(user => user.id == id);
  }
  getExUser() {
    return this.httpclint.get<IexUser[]>('https://fakestoreapi.com/users')
  }
  getCurrentUser() {
    return this.currUser;
  }
  setCurrentUser(user: IexUser) {
    this.currUser = user;
  }
  setuser() {
    return this.httpclint.post('https://fakestoreapi.com/users', { id: 50, name: 'test' })
  }
}
