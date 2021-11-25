import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { api } from '../entities/api';

@Injectable({
  providedIn: 'root'
})
export class NewsDisplayService {
  public api = api;
  url = this.api.url+'/home';

  constructor(private Http : HttpClient) { }

  public displayNewsService() : Observable<any>{
    return this.Http.get(this.url,{
      headers : new HttpHeaders({
       'Authorization' : '',
      })
   }).pipe(map((res:any) =>{
    return res;
  }));
  }
}
