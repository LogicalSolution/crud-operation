import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {HttpClient,HttpEvent,HttpErrorResponse,HttpEventType,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm:FormGroup;
  imageScr:string;
  
  constructor(public formbuilder:FormBuilder,
              public apiservice: ApiService,
              public http:HttpClient,
              public router:Router) { }

  ngOnInit(): void {
    this.addForm=this.formbuilder.group({
      id:[''],
      name:['',Validators.required],
      profile:['',Validators.required],
      contact:['',[Validators.required,Validators.minLength(10), Validators.maxLength(10)]],
      email:['',Validators.required],
      salary:['',Validators.required],
      file:['',Validators.required],
      fileSource:['',Validators.required]
    });
  }


  onFileChange(event){
    const reader = new FileReader();

    if(event.target.files && event.target.files.length)
    {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload  = () => {
        this.imageScr = reader.result as string;
        this.addForm.patchValue({
          fileSource:reader.result
        });
      }
    }
  }

  employeesAdd()
  {
    console.log(this.addForm.value);
    this.http.post('http://localhost/AngularCrud/insert.php',this.addForm.value)
    .subscribe(res=>
    {
      console.log(res);
      alert("Employee added successfully");
      this.addForm.reset();
      this.router.navigate(['view']);
    });
  }

}
