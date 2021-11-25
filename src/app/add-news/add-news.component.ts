import { Component, OnInit } from '@angular/core';
import { newsUpload } from '../entities/newsUpload';
import { AddNewsService } from '../services/add-news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  file: string='';
  public img: any;
  public payload : newsUpload;

  constructor(private newsService: AddNewsService) {
    this.payload = {
      name:'',
      category_id:'',
      description:'',
      image1: '',

    }
   }

  ngOnInit(): void {
  }
  onImageSelected(event: any){
    this.img = event.target.files[0];
  }

 public uploadNews(){
   var reader  =new FileReader();
   reader.readAsDataURL(this.img);
  this.newsService.newsService(this.payload, this.img).subscribe((res:any) =>{
    console.log(res);
    alert("News Uploaded");
  })
  }

}
