import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
private apiUrl = '';
  constructor(private http:HttpClient) {
    //this.http.get
    //this.http.post
   }
   getPosts(): Observable<PostService[]>{
     return this.http.get<PostService[]>(this.apiUrl);
   }
}
