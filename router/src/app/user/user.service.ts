import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loadUser() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users/');
  }

  loadProfile(id: any) {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users/' + id,
    {
        headers:
          new HttpHeaders(
            {
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
            }
          )
      }
    );
  }
}
