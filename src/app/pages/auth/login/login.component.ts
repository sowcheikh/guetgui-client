import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  submitted = false;
  error = '';
  showPassword = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }
  get f() {
    return this.loginForm.controls;
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(9)]], // Notez le troisième paramètre pour le validateur asynchrone
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [''],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.error = '';
    if (this.loginForm.invalid) {
      this.error = 'Email et mot de passe non valide !';
      return;
    } else {
      console.log('Email: ' + this.f['email'].value + ' Password: ' + this.f['password'].value)
      this.authService
        .login(this.f['email'].value, this.f['password'].value)
        .subscribe({
          next: (res) => {
            console.log('res', res)
            this.submitted = false;
            this.router.navigate(['/dashboard']);
          },
          error: (error) => {
            this.error = 'Email ou mot de passe incorrect';
            this.submitted = false;
          }
        });
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
