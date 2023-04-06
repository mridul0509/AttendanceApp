import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { User } from '../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user!: User;
  loginForm!: FormGroup;
  isFormSubmitted = false;
  //constructor(public dialogRef: MatDialogRef<LoginComponent>) { }
  constructor(private fb: FormBuilder, private loginService: LoginService,
    private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }
  
  onSubmit() {
    this.isFormSubmitted = true;
    this.user = this.loginForm.value;
    console.log('user', this.user);
    this.loginService.login(this.user)
    .subscribe({
      next : (data: any) =>{
        console.log(data);
        console.log(data.success);
        if(data.success){
          this.router.navigate(['/attendance']);
        }
      },
      error : (error: any) => {
        console.error(error)
        alert(error);
      }
    });
  }

  redirectToSignUp() {
    this.router.navigate(['/signup']);
  }

}
