import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';
import {User} from '../Model/user';
import {ApiResponse} from '../Model/api-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string='http://localhost/AngularCrud/';

  constructor(public http : HttpClient) { }
  addUser(name: string, profileImage:File): Observable<any> {
    var formData= new FormData();  
    formData.append("name",name);
    formData.append("avatar", profileImage);

    return this.http.post<ApiResponse>(this.baseUrl + '/insert.php', formData)
  }
  
     getUsers():Observable<ApiResponse>{
       return this.http.get<ApiResponse>(this.baseUrl + '/list.php');
     }
}
