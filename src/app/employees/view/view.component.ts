import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {User} from '../../Model/user';
import {ApiResponse} from '../../Model/api-response';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  users: any;

  constructor(public apiservice:ApiService) { }

  ngOnInit(): void {
    this.apiservice.getUsers().
    subscribe( (data:any) =>{
      this.users=data;
      console.log(this.users);
    });
  }

}
