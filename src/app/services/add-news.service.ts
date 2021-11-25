import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newsUpload } from '../entities/newsUpload';
import { api } from '../entities/api';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AddNewsService {
private api = api;
url = this.api.url + '/news_post'

  constructor(private Http: HttpClient) { }

  public newsService(newsUpload: newsUpload, img:any) : Observable<newsUpload[]>{
    console.log("in Services");
    const formData = new FormData();
    formData.append('name', newsUpload.name);
    formData.append('category_id', newsUpload.category_id);
    formData.append('description', newsUpload.description);
    formData.append('image1',img.name );
    return this.Http.post<newsUpload[]>(this.url, formData,{
       headers : new HttpHeaders({
        'Authorization' : '',
       })
    })
    .pipe(map((res:any) =>{
      return res;
    }));
  }
}
