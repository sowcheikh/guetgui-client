import {CommonModule, NgClass} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {BergerService} from "../../../core/services/berger.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!: UntypedFormGroup;
  submitted = false;
  error = '';
  showPassword = false;
  constructor(private formBuilder: UntypedFormBuilder,
              private bergerService: BergerService,
              private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      adresse: ['', Validators.required],
    });
  }

  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.error = '';
    if (this.registerForm.invalid) {
      this.error = 'Veuillez remplir tous les champs';
      return;
    } else {
      console.log('Full Name: ' + this.f['fullName'].value + ' Telephone: ' + this.f['telephone'].value + ' Email: ' + this.f['email'].value + ' Password: ' + this.f['password'].value + ' Adresse: ' + this.f['adresse'].value)
      this.bergerService
        .register(this.registerForm.value)
        .subscribe({
          next: (res) => {
            this.submitted = false;
            this.router.navigate(['/login']);
          },
          error: (error) => {
            console.log('error', error);
            this.submitted = false;
          }
        });
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
