import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-user-api',
  templateUrl: './user-api.component.html',
  styleUrls: ['./user-api.component.css']
})
export class UserApiComponent implements OnInit {

  users: any;

  constructor(public userApiService: UserApiService) {}

  ngOnInit() {
    this.userApiService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
