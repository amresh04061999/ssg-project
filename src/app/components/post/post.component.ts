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
  public apiData :any
  constructor(private ApiService:ApiHandlerService){

  }
  ngOnInit(): void {
   this.ApiService.getPost().subscribe((data:any)=>{
    this.apiData=data
   })
  }
}
