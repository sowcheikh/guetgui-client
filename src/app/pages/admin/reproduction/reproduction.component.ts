import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ChooseMaleModalComponent} from "./choose-male-modal/choose-male-modal.component";
import {AnimalService} from "../../../core/services/animal.service";
import {IAnimal, Reproduction, Sexe} from "../../../core/models/animal";
import {Race} from "../../../core/models/race";
import {RaceService} from "../../../core/services/race.service";

@Component({
  selector: 'app-reproduction',
  templateUrl: './reproduction.component.html',
  styleUrls: ['./reproduction.component.css']
})
export class ReproductionComponent implements OnInit {
  items = [
    { name: 'Coumba', race: 'Ladoum', age: '9 mois', image: 'assets/img/mouton1.jpeg', action: 'Accoupler', status: 'En chaleur' },
    { name: 'Dieynaba', race: 'Ladoum', age: '15 mois', image: 'assets/img/mouton1.jpeg', action: 'En observation', status: 'En gestation' },
    { name: 'Khadija', race: 'Ladoum', age: '12 mois', image: 'assets/img/mouton1.jpeg', action: 'Accoupler', status: 'En observation' },
    { name: 'Mouhamed', race: 'Ladoum', age: '10 mois', image: 'assets/img/mouton1.jpeg', action: 'Accoupler', status: 'En allaitement' },
    { name: 'Moussa', race: 'Ladoum', age: '11 mois', image: 'assets/img/mouton1.jpeg', action: 'Accoupler', status: 'En chaleur' },

    // Ajoutez d'autres produits ici
  ];
  animals: IAnimal[] = [];

  filteredItems: any = [];
  searchText = '';
  currentPage = 1;
  itemsPerPage = 8;
  totalPages: any = [];
  races: Race[] = [];
  males = [
    { name: 'Balla Gaye', age: '10 mois' },
    { name: 'Laye Fall', age: '12 mois' },
    // Ajoutez d'autres mâles ici
  ];
  constructor(public dialog: MatDialog, private animalService: AnimalService, private raceService: RaceService) {
  }

  ngOnInit() {
    this.filteredItems = this.items;
    this.updatePagination();
    this.getAnimals();
    this.getRaces();


  }
  getRaces() {
    this.raceService.getRaces().subscribe((res: any) => {
      console.log(res);
      this.races = res;
  });
  }

  getAnimals() {
    this.animalService.getAll().subscribe((res: any) => {
      console.log(res);
      this.animals = res.filter((animal: IAnimal) => animal.sexe === Sexe.Femelle);
    });
  }

  search() {
    this.filteredItems = this.items.filter(item => item.name.toLowerCase().includes(this.searchText.toLowerCase()));
    this.updatePagination();
  }
  getAge(dateString: string): string {
    // differnce entre la date actuelle et la date de naissance
    const diff = Date.now() - new Date(dateString).getTime();
    const age = new Date(diff);
    console.log(Math.abs(age.getUTCFullYear() - 1970));
    // return mois, ou jours, ou ans
    if (Math.abs(age.getUTCFullYear() - 1970) > 1) {
      return Math.abs(age.getUTCFullYear() - 1970) + ' ans';
    } else if (Math.abs(age.getUTCMonth()) > 1) {
      return Math.abs(age.getUTCMonth()) + ' mois';
    } else {
      return Math.abs(age.getUTCDate()) + ' jours';
    }


  }
  getRaceName(id: string): string {
    const animal = this.races.find(a => a._id === id);
    return animal ? animal.name : 'NULL';
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  updatePagination() {
    this.totalPages = Array(Math.ceil(this.filteredItems.length / this.itemsPerPage)).fill(0).map((x, i) => i + 1);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.filteredItems = this.items.slice(startIndex, endIndex);
  }

  getBadgeClass(status: string) {
    switch (status) {
      case Reproduction.ATTENTE:
        return 'badge en-chaleur';
      case Reproduction.GESTATION:
        return 'badge en-gestation';
      case Reproduction.OBSERVATION:
        return 'badge en-observation';
      case Reproduction.ALLAITEMENT:
        return 'badge en-allaitement';
      default:
        return 'badge';
    }
  }
  openDialog(item: any): void {
    const dialogRef = this.dialog.open(ChooseMaleModalComponent, {
      width: '400px',
      data: { males: this.males }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Le dialogue a été fermé');
      console.log('Mâle sélectionné:', result);
      // Ajoutez la logique pour gérer la sélection du mâle
    });
  }

  protected readonly Reproduction = Reproduction;
}
