import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponseListUser, IResponseUser } from '../models/users.interface';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(page: number, gender?: string): Observable<IResponseListUser> {
    // const url = `https://reqres.in/api/users?page=${page}&&per_page=12`
    const url =
      `https://randomuser.me/api/?results=20&&page=${page}` +
      (gender ? `&&gender=${gender}` : '&&seed=foobar');
    return this.http.get(url);
  }

  getUser(id: string): Observable<any> {
    const url = `https://reqres.in/api/users/${id}`;
    return this.http.get(url);
  }
}
