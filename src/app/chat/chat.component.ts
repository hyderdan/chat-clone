import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  username = ""; 
 public datas = [
    { "name": 'hyder' },
    { "name": 'rahul' },
    { "name": 'manu' },
    { "name": 'danish' },
    { "name": 'asif' }
  ];

   handleusername(params:any) {
      this.username = params;
  } 

}


