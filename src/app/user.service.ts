import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userlist = ""
  constructor(private http: Http) {
    console.log('user service works!')
  }

  getUser(data: any) {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
