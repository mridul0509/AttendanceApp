import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { User } from '../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user!: User;
  signupForm!: FormGroup;
  isFormSubmitted = false;

  constructor(private fb: FormBuilder, private signupService: SignupService,
    private router : Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.isFormSubmitted = true;
    this.user = this.signupForm.value;
    console.log('user', this.user);
    this.signupService.signup(this.user)
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
        this.signupForm.reset();
      }
    });
  }

}
