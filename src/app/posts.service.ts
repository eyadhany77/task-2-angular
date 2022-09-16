import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) {}
    getpost() : Observable <any> {
      return this.http.get(`https://jsonplaceholder.typicode.com/posts`)
   }

   getpostbyid(postId:number):Observable<any>
   {
    if(postId==null)
    {
    return this.getpost();
    }
  else
   {
      return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
   }

  }  
}
