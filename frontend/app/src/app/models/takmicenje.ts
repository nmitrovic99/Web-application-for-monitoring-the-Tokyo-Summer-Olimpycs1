import { Takmicar } from "./takmicar";

export class Takmicenje{
    sport:string;
    disciplina:string;
    vrsta:string;
    pol:string;
    datumPocetka:string;
    datumKraja:string;
    lokacija:string;
    format:string;
    brojPokusaja:string;
    takmicari:Array<Takmicar>;
    delegati:Array<Object>;
    zavrseno:boolean;
}