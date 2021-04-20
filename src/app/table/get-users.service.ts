import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetUsersService {
  database = 'assets/database.json';

  constructor(private http: HttpClient) {}

  fetchData() {
    return this.http.get(this.database);
  }
}
