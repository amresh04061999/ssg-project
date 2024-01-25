import { Component } from '@angular/core';
import { ApiHandlerService } from '../../service/api-handler.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
 
  public apiData :any=[]
  constructor(private ApiService:ApiHandlerService){

  }
  ngOnInit(): void {
    Array.from({length:10000}, (y,index) => {
      const data={
        id:index + 1,
        title:`hello ${index +1}`,
        body:`I am ${index + 1}`
      }
      this.apiData.push(data)
    })
  //  this.ApiService.getPost().subscribe((data:any)=>{
  //   this.apiData=data
  //  })
  }
}
