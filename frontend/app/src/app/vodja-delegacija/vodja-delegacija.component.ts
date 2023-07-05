import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Sport } from '../models/sport';
import { Sportista } from '../models/sportista';
import { SportistiService } from '../sportisti.service';
import { SportoviService } from '../sportovi.service';

@Component({ 
  selector: 'app-vodja-delegacija',
  templateUrl: './vodja-delegacija.component.html',
  styleUrls: ['./vodja-delegacija.component.css']
})
export class VodjaDelegacijaComponent implements OnInit {

  constructor(private sportistaServis:SportistiService, private sportServis:SportoviService, private ruter:Router) { }

 ngOnInit(): void {
   this.korisnik=JSON.parse(localStorage.getItem('ulogovan'));
   this.sportistaServis.dohvatiSveSportisteZaZemlju(this.korisnik.nacionalnost).subscribe((sportisti:Sportista[])=>{
     this.sportistiPoNacionalnosti=sportisti;
     this.sportistiPoNacionalnostiBroj=sportisti.length;
   })
   this.sportServis.dohvatiSveSportovePoNazivu().subscribe((podaci:string[])=>{
     this.sviSportovi=podaci;
     for(let i=0;i<this.sviSportovi.length;i++){
       this.sportistaServis.dohvatiSveSportisteZaZemljuSport(this.korisnik.nacionalnost,this.sviSportovi[i]).subscribe((sportisti:Sportista[])=>{
         if(sportisti.length>0){
           this.sportistiPoNacionalnostiSportu.push(this.sviSportovi[i]);
           this.sportistiPoNacionalnostiSportuBroj.push(sportisti.length);
         }
       })
     }
   })
   
 }

 korisnik:Korisnik;

 odjaviSe(){
  localStorage.clear();
  this.ruter.navigate(['']);
}

sportistiPoNacionalnosti:Sportista[]=[];
  sportistiPoNacionalnostiBroj:number;
  sviSportovi:string[]=[];

  sportistiPoNacionalnostiSportu:string[]=[];   //sportovi*
  sportistiPoNacionalnostiSportuBroj:number[]=[];   //sportovi*

  disciplinePoNacionalnostiSportu:string[]=[];
  disciplinePoNacionalnostiSportuBrojSportista:number[]=[];

  buttonZaSportoveBezDiscipline:boolean;
  flagZaPrikazDisciplina:boolean;
  message3:string;

  breadcrumbs1:string;
  breadcrumbs2:string;

  prikaziDiscipline(i){
    this.indexSporta=i;
    this.breadcrumbs1=this.sportistiPoNacionalnostiSportu[i];
    this.flagZaPrikazDisciplina=true;
    this.buttonZaSportoveBezDiscipline=false;
    this.disciplinePoNacionalnostiSportuBrojSportista=[];
    this.disciplinePoNacionalnostiSportu=[];
    this.izabraniSportisti=[];
    this.flagZaPrikazSportista=false;
    this.sportServis.dohvatiSveDisciplinePoSportu(this.sportistiPoNacionalnostiSportu[i]).subscribe((sportovi:Sport[])=>{
      if(sportovi.length>1 || this.sportistiPoNacionalnostiSportu[i]=="tenis"){
        for(let j=0;j<sportovi.length;j++){
          this.sportistaServis.dohvatiSveSportisteZaZemljuSportDisciplinu(this.korisnik.nacionalnost,this.sportistiPoNacionalnostiSportu[i],sportovi[j].disciplina).subscribe((sportisti:Sportista[])=>{
            if(sportisti.length>0){
              this.disciplinePoNacionalnostiSportu.push(sportovi[j].disciplina);
              this.disciplinePoNacionalnostiSportuBrojSportista.push(sportisti.length);
            }
          })
        }
      }
      else{
        this.message3="Izabrani sport nema disciplina, pritisnite dugme ukoliko zelite da vidite igrace za odabrani sport";
        this.buttonZaSportoveBezDiscipline=true;
      }
    })
  }

  indexSporta:number;
  izabraniSportisti:Sportista[]=[];
  flagZaPrikazSportista:boolean;

  izabraniSportistiImePrezime:string[]=[];
  izabraniSportistiIme:string[]=[];
  izabraniSportitiPrezime:string[]=[];

  prikaziSportiste(j){
    this.flagZaPrikazSportista=true;
    this.izabraniSportisti=[];
    this.izabraniSportistiImePrezime=[];
    this.breadcrumbs2=this.disciplinePoNacionalnostiSportu[j];
    this.sportistaServis.dohvatiSveSportisteZaZemljuSportDisciplinu(this.korisnik.nacionalnost,this.sportistiPoNacionalnostiSportu[this.indexSporta],this.disciplinePoNacionalnostiSportu[j]).subscribe((sportisti:Sportista[])=>{
      for(let i=0;i<sportisti.length;i++){
        this.izabraniSportistiImePrezime.push(sportisti[i].imePrezime);
        this.izabraniSportistiIme.push(sportisti[i].imePrezime.split(/(\s+)/)[0]);
        this.izabraniSportitiPrezime.push(sportisti[i].imePrezime.split(/(\s+)/)[2]);
        if(i==sportisti.length-1){
          this.izabraniSportistiImePrezime.sort((a,b)=>{
            if(a.split(/(\s+)/)[2]>b.split(/(\s+)/)[2]){
              return -1;
            }
            else if(a.split(/(\s+)/)[2]<b.split(/(\s+)/)[2]){
              return 1;
            }
            else{
              if(a.split(/(\s+)/)[0]>b.split(/(\s+)/)[0]){
                return -1;
              }
              else if(a.split(/(\s+)/)[0]<b.split(/(\s+)/)[0]){
                return 1;
              }
              else return 0;
            }
          })
        }
        this.izabraniSportisti.push(sportisti[i]);
        
      }
    })
  }

  prikaziSportisteBezDiscipline(){
    this.flagZaPrikazSportista=true;
    this.izabraniSportisti=[];
    this.sportistaServis.dohvatiSveSportisteZaZemljuSportDisciplinu(this.korisnik.nacionalnost,this.sportistiPoNacionalnostiSportu[this.indexSporta],null).subscribe((sportisti:Sportista[])=>{
      for(let i=0;i<sportisti.length;i++){
        this.izabraniSportisti.push(sportisti[i]);
      }
    })
  }

  ukloni(){
    this.flagZaPrikazSportista=false;
  }

}
