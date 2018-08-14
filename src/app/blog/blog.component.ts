import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  bloglist: any[] = [
    {img :'./assets/images/blog-1.jpg',text:'Long Don’t Spend Time Beating On a Wall, Hoping To Trans ... ',degination:'GYNOCOLOGY'},
    {img :'./assets/images/blog-2.jpg',text:'Long Don’t Spend Time Beating On a Wall, Hoping To Trans ... ',degination:'ORTHOSURGON'}
    
    
    ]
 text: any[ ]=[
   {heading:'OUR BLOG',message:'Lorem Ipsum is simply dummy text of the printing and typesetting in Lorem Ipsum has been the industrs standard dummy text ever since the 1500s',link:'Show All'}
 ]   
  
}
