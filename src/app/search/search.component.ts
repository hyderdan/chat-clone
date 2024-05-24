import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { PostdatasService } from '../services/postdatas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [PostdatasService],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  toggleloader = true;
  searachInput: string = ""
  users: any[] = [];
    ngOnInit(): void {
    }
  constructor(private SearchUser: PostdatasService) { }

  handleSearch() {
    this.toggleloader = false
    setTimeout(() => {
      this.toggleloader = true
      this.SearchUser.SearchUser(this.searachInput).subscribe(
        res => {
          console.log(res.data); 
          this.users = res.data;
               }
      )
    }, 500);
     
    
  }

}
