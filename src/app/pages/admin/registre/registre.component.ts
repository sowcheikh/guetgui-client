import {Component, OnInit} from '@angular/core';
import {TopbarComponent} from "../topbar/topbar.component";
import {NgForOf, NgIf, SlicePipe} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {AddComponent} from "./add/add.component";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DetailComponent} from "./detail/detail.component";
import {AnimalService} from "../../../core/services/animal.service";

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit{
  items: any[] = [
    {
      id: 1,
      image: 'assets/img/mouton1.jpeg',
      name: 'Modou Lo',
      description: 'Modou Lo est un lutteur sénégalais, né le 1er janvier 1985 à Saint-Louis. Il est sociétaire de l\'écurie Rock Énergie.'
    },
    {
      id: 2,
      image: 'assets/img/mouton1.jpeg',
      name: 'Balla Gaye 2',
      description: 'Balla Gaye 2, de son vrai nom El Hadj Malick Gningue, est un lutteur sénégalais né le 22 avril 1978 à Guédiawaye.'
    },
    {
      id: 3,
      image: 'assets/img/mouton1.jpeg',
      name: 'Eumeu Sène',
      description: 'Eumeu Sène, de son vrai nom Mohamed Ndao, est un lutteur sénégalais né le 28 janvier 1978 à Dakar. Il est sociétaire de l\'écurie Tay Shinger.'
    },
    {
      id: 4,
      image: 'assets/img/mouton1.jpeg',
      name: 'Tapha Tine',
      description: 'Tapha Tine, de son vrai nom Babacar Gningue, est un lutteur sénégalais né le 1er janvier 1985 à Dakar. Il est sociétaire de l\'écurie Baol Mbollo.'
    },
    {
      id: 5,
      image: 'assets/img/mouton1.jpeg',
      name: 'Yékini',
      description: 'Yakhya Diop, dit Yékini, est un lutteur sénégalais né le 23 janvier 1974 à Joal.'
    }
  ];
  registres: any[] = [];
  formAdd!: FormGroup;
  constructor(private dialog: MatDialog, private fb: FormBuilder,
              private animalService: AnimalService) {
  }
  ngOnInit() {
    this.initForm();
    this.getAllAnimals();
  }
  initForm() {
    this.formAdd = this.fb.group({
      nom: [''],
      description: [''],
      sexe: [''],
      dateNaissance: [''],
      poids: [''],
      nomPere: [''],
      nomMere: [''],
      race_id: [''],
      user_id: [''],
      photo: [''],
    });
  }
  getAllAnimals() {
    this.animalService.getAll().subscribe({
      next: (data) => {
        console.log(data);
        this.registres = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  getUrlImage(image: string) {
    return `http://localhost:3000/${image}` ?? 'assets/img/mouton1.jpeg';
  }


  openDialog() {
    const dialogRef = this.dialog.open(AddComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProduitList();
        }
      },
    });
  }
  openDetailDialog(item: any): void {
    this.dialog.open(DetailComponent, {
      width: '600px',
      data: item
    });
  }

  private getProduitList() {
    console.log('test')
  }
}
