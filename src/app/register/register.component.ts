import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MyErrorStateMatcher } from '../login/login.component';
import { LoginService } from '../login-service.service';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private formBuilder: FormBuilder, private router: Router) {}

  registerForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  error='';

  ngOnInit() {}

  nicknameFormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$')]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-ZŻŹĆŃĄŚÓĘ])(?=.*?[a-zżźćńśąęó])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]);
  //co najmniej 1 duża litera,co najmniej 1 mała litera, co najmniej 1 znak specjalny, co najmniej 1 liczba, co najmniej 8 znaków

  loadSpinner: boolean;

  public register() {

    if(this.nicknameFormControl.valid && this.emailFormControl.valid && this.passwordFormControl.valid){
      this.registerService.registration(
        this.nicknameFormControl.value, this.emailFormControl.value,this.passwordFormControl.value)
        .pipe(first()).subscribe(
            data => {
              console.log("Udała się rejestracja");
              this.router.navigate(['/login']);
            },
            err => {
              this.error = err;
            });
    } else {
      alert('Formularz jest źle wypełniony!')
    }
    
  }
}
