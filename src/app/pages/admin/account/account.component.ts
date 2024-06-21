import {Component, OnInit} from '@angular/core';
import {TopbarComponent} from "../topbar/topbar.component";
import {User} from "../../../core/models/user";
import {CURRENT_USER} from "../../../utils/constant";
import {FooterComponent} from "../footer/footer.component";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
  user! : User;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem(CURRENT_USER) || '{}');
  }

  openDialog(user: User) {

  }
}
