import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient) {}

  get(route: string) {
    return this.http.get(route);
  }

  getById(route: string, id: number) {
    return this.http.get(`${route}/${id}`);
  }

  post(route: string, body: any) {
   return this.http.post(route, body).toPromise();
  }

  delete(route: string, id: number) {
    return this.http.delete(`${route}/${id}`).toPromise();
  }
}
