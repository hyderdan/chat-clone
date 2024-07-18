import { Component, OnInit } from '@angular/core';
import { SockectservicesService } from '../services/sockectservices.service';
import { DataSharingService } from '../services/data-sharing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit {

  username: string[] = []

  constructor(private Sockectservice: SockectservicesService, private dataSharing: DataSharingService) { }
  ngOnInit(): void {
    this.Hnadlenot()
  }
  Hnadlenot() {
    this.dataSharing.currentHandlenot.subscribe((res) => {
      this.username = res
    })
  }

}
