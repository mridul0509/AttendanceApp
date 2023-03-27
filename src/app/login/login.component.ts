import { Component, OnInit } from '@angular/core';
//import { MatDialogRef } from '@angular/material/dialog'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {username:'', password:'', remember: false};
  loginForm!: FormGroup;
  //constructor(public dialogRef: MatDialogRef<LoginComponent>) { }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }

  formData: any = {};
  
  onSubmit() {
    console.log('user', this.user);
  }

}
