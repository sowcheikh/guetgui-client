import {Race} from "./race";

export interface IAnimal{
  nom: string;
  nomPere:string ; // geniteur male
  nomMere: string; // geniteur femelle
  dateNaissance: string;
  sexe: string;
  dateEntree: Date;
  poids: number;
  fertilite: boolean;
  reproduction: Reproduction;
  photo: string ;
  race_id: string;
  race: Race;
  user_id: string;
}

export enum Reproduction {
  ATTENTE = "ATTENTE",
  OBSERVATION = "OBSERVATION",
  GESTATION = "GESTATION",
  ALLAITEMENT = "ALLAITEMENT"
}
export enum Sexe {
  Male = "male",
  Femelle= "femelle",

}
