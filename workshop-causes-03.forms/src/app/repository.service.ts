import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICause } from './shared/interfaces/cause';


const baseUrl = 'http://localhost:3000/causes';

@Injectable({
  providedIn: 'root'
})


export class RepositoryService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ICause[]>(baseUrl);
  }

  get(id: any) {
    return this.http.get<ICause>(`${baseUrl}/${id}`);
  }

  create(data: ICause) {
    return this.http.post<ICause>(baseUrl, data);
  }

  update(id: any, data: ICause) {
    return this.http.put<ICause>(`${baseUrl}/${id}`, data);
  }

  edit(id: any, data) {
    return this.http.patch<ICause>(`${baseUrl}/${id}`, data);
  }

  delete(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }
}