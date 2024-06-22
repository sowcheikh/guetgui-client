import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RaceService} from "../../../../core/services/race.service";
import {AnimalService} from "../../../../core/services/animal.service";
import {UserService} from "../../../../core/services/user.service";
import {Race} from "../../../../core/models/race";
import {User} from "../../../../core/models/user";
import {AuthService} from "../../../../core/services/auth.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  formAdd!: FormGroup;
  races: Race[] = [];
  currentUser: User = {} as User;
  fileName: string | null = null;
  constructor(private raceService: RaceService, private animalService: AnimalService, private authService: AuthService,
              private dialog: MatDialog, private userService: UserService
              ) {
  }
  ngOnInit() {
    this.initForm();
    this.getRaces();
    this.currentUser = this.authService.currentUserValue;
    console.log('currentUser', this.currentUser)
  }
  initForm() {
    this.formAdd = new FormGroup({
      nom: new FormControl('', Validators.required),
      sexe: new FormControl('', Validators.required),
      dateNaissance: new FormControl('', Validators.required),
      nomPere: new FormControl('', Validators.required),
      nomMere: new FormControl('', Validators.required),
      poids: new FormControl('', Validators.required),
      photo: new FormControl('', Validators.required),
      race_id: new FormControl('', Validators.required),
      dateEntree: new FormControl(new Date(), Validators.required),
    });
  }
  getRaces() {
    this.raceService.getRaces().subscribe((res: any) => {
      console.log(res);
      this.races = res;
    });

  }
  getFileNames(event: any): void {
    const file = event.target.files[0];
    console.log('file', file)
    if (file) {
      this.fileName = file.name;
      this.formAdd.patchValue({
        photo: file
      });
    }
  }
  formatDate(dateString: string): string {
    const date: Date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  onSubmit(): void {
    if (this.formAdd.valid) {
      // Clone the form value to manipulate it
      const formValue = { ...this.formAdd.value };

      // Format the dateNaissance field
      formValue.dateNaissance = this.formatDate(formValue.dateNaissance);
      formValue.dateEntree = new Date();

      const formData = new FormData();
      Object.keys(formValue).forEach(key => {
        if (key === 'photo' && formValue[key] instanceof File) {
          formData.append(key, formValue[key]);
        } else {
          formData.append(key, formValue[key]);
        }
      });
      const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
      formData.append('user_id', user._id);

      this.animalService.register(formData).subscribe(
        (res: any) => {
          console.log(res);
          // close the dialog
          this.dialog.closeAll();
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
