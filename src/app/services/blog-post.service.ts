import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { api } from '../entities/api';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
 // private api = api;
  url;

  constructor(private Http: HttpClient) { }

  public blogPostService(name) : Observable<any>{
    this.url= api.url+'/news'+'/'+name;
    return this.Http.post(this.url ,{})
    .pipe(map((res:any) => {
     // console.log(res);
      return res;
    }));
  }
}
