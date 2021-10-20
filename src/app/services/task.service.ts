import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl!: 'http://localhost:5000/';
  constructor(private http: HttpClient) { }
  getTask() {
    return this.http.get(this.apiUrl)
  }
}
