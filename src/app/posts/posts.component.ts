import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts:any[]=[];
  filteredpost:any[]=[];

  private _searchValue:number = 0;

  
  
  constructor(private postserver:PostsService)  {}

      ngOnInit(): void
       
      {
          this.postserver.getpost().subscribe({next:(post)=>
            {
              console.log(post);
              this.posts=post;
              this.filteredpost=this.posts;
          }})
      }

      

      get searchValue ():number
    {
      return this._searchValue;
    }
    set searchValue(value:number)
    { 
      this._searchValue=value;
      this.performSearch(value)
        } 

        arr:any[]=[]
    performSearch (val:number)
      {
        this.postserver.getpostbyid(val).subscribe(
          {next:(data)=> {
            this.arr.push(data);
            this.filteredpost=this.arr;
          }})
      }


}