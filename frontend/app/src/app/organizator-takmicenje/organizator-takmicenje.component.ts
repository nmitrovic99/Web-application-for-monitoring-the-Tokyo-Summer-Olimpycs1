import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EkipaService } from '../ekipa.service';
import { KorisnikService } from '../korisnik.service';
import { Ekipa } from '../models/ekipa';
import { Korisnik } from '../models/korisnik';
import { Sportista } from '../models/sportista';
import { SportPrilog } from '../models/sportPrilog';
import { SportistiService } from '../sportisti.service';
import { SportoviSviService } from '../sportovi-svi.service';
import { SportoviService } from '../sportovi.service';
import { TakmicenjaService } from '../takmicenja.service';

@Component({
  selector: 'app-organizator-takmicenje',
  templateUrl: './organizator-takmicenje.component.html',
  styleUrls: ['./organizator-takmicenje.component.css']
})
export class OrganizatorTakmicenjeComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService, private ruter:Router,private ekipaServis:EkipaService,
    private sportPrilogServis:SportoviSviService,private sportistaServis:SportistiService, private takmicenjeServic:TakmicenjaService,) { }

  ngOnInit(): void {
    this.sportPrilogServis.dohvatiSveSportovePoNazivu().subscribe((podaci:string[])=>{
      
      this.naziviSportovaTakmicenje=podaci;
    })
    this.korisnikServis.pronadjiSlobodneDelegate().subscribe((podaci:Korisnik[])=>{
      this.delegatiZaTakmicenje=podaci;
      if(this.delegatiZaTakmicenje){
        for(let i=0;i<this.delegatiZaTakmicenje.length;i++){
          this.takmicenjeServic.brojTakmicenjaDelegata(this.delegatiZaTakmicenje[i].ime,this.delegatiZaTakmicenje[i].prezime,this.delegatiZaTakmicenje[i].nacionalnost).subscribe((broj:number)=>{
            if(broj<3){
              this.delegatiZaTakmicenjeSaUslovom.push(this.delegatiZaTakmicenje[i]);
            }
          })
        }
      }
    })
  }

  odjaviSe(){
    localStorage.clear();
    this.ruter.navigate(['']);
  }

  sportTakmicenje:string=null;
  disciplinaTakmicenje:string;
  vrstaTakmicenje:string;
  polTakmicenje:string;
  datumPocetka:string;
  datumKraja:string;
  lokacija:string;
  format:string;
  brojPokusaja:string;
  nosioci:string[]=[];
  nosiociBr:number[]=[];

  nosilac:boolean=false;

  naziviSportovaTakmicenje:string[];
  naziviDisciplinaTakmicenje:SportPrilog[];

  sportistiZaTakmicenje:Sportista[];
  delegatiZaTakmicenje:Korisnik[];
  delegatiZaTakmicenjeSaUslovom:Korisnik[]=[];

  odabraniSportisti:string[]=[];
  odabraniDelegatiIme:string[]=[];
  odabraniDelegatiPrezime:string[]=[];
  odabraniDelegatiNacionalnost:string[]=[];

  dodajTakmicenje(){
    let s=0,d=0;
    for(let i=0;i<this.sportistiZaTakmicenje.length;i++){
      if(this.sportistiZaTakmicenje[i].izabran)
      {
        this.odabraniSportisti[s]=this.sportistiZaTakmicenje[i].imePrezime;
        s++;
      }
    }
    for(let i=0;i<this.delegatiZaTakmicenjeSaUslovom.length;i++){
      if(this.delegatiZaTakmicenjeSaUslovom[i].izabran)
      {
        this.odabraniDelegatiIme[d]=this.delegatiZaTakmicenjeSaUslovom[i].ime;
        this.odabraniDelegatiPrezime[d]=this.delegatiZaTakmicenjeSaUslovom[i].prezime;
        this.odabraniDelegatiNacionalnost[d]=this.delegatiZaTakmicenjeSaUslovom[i].nacionalnost;
        d++;
      }
    }
    if(this.sportTakmicenje=="tenis"){
      for(let i=0;i<this.nosioci.length;i++){
        this.nosiociBr[i]=parseInt(this.nosioci[i]);
      }
    }
    else{
      for(let i=0;i<this.nosioci.length;i++){
        this.nosioci[i]=null;
        this.nosiociBr[i]=null;
      }
    }
    if(this.odabraniSportisti.length>8){
      alert('Maksimalan broj takmicara je 8');
      return;
    }
    else{
      this.takmicenjeServic.dodajTakmicenje(this.sportTakmicenje,this.disciplinaTakmicenje,this.vrstaTakmicenje,this.polTakmicenje,
        this.datumPocetka,this.datumKraja,this.lokacija,this.format,parseInt(this.brojPokusaja),this.odabraniSportisti,this.nosiociBr,
        this.odabraniDelegatiIme,this.odabraniDelegatiPrezime,this.odabraniDelegatiNacionalnost).subscribe(response=>{
          if(response['message']='takmicenje dodato'){
            alert('novo takmicenje je dodato');
            this.sportTakmicenje=null;this.disciplinaTakmicenje=null;this.vrstaTakmicenje=null;this.polTakmicenje=null;
            this.datumPocetka=null;this.datumKraja=null;this.lokacija=null;this.format=null;this.brojPokusaja=null; 
            this.sportistiZaTakmicenje=[];this.delegatiZaTakmicenjeSaUslovom=[];
            this.korisnikServis.pronadjiSlobodneDelegate().subscribe((podaci:Korisnik[])=>{
              this.delegatiZaTakmicenje=podaci;
              if(this.delegatiZaTakmicenje){
                for(let i=0;i<this.delegatiZaTakmicenje.length;i++){
                  this.takmicenjeServic.brojTakmicenjaDelegata(this.delegatiZaTakmicenje[i].ime,this.delegatiZaTakmicenje[i].prezime,this.delegatiZaTakmicenje[i].nacionalnost).subscribe((broj:number)=>{
                    if(broj<3){
                      this.delegatiZaTakmicenjeSaUslovom.push(this.delegatiZaTakmicenje[i]);
                    }
                  })
                }
              }
            })
          }
        })
    }

  }

  odabraneEkipe:string[]=[];

  dodajEkipnoTakmicenje(){
    let s=0,d=0;
    for(let i=0;i<this.ekipeZaTakmicenje.length;i++){
      if(this.ekipeZaTakmicenje[i].izabran)
      {
        this.odabraneEkipe[s]=this.ekipeZaTakmicenje[i].naziv;
        s++;
      }
    }
    
    for(let i=0;i<this.delegatiZaTakmicenjeSaUslovom.length;i++){
      if(this.delegatiZaTakmicenjeSaUslovom[i].izabran)
      {
        this.odabraniDelegatiIme[d]=this.delegatiZaTakmicenjeSaUslovom[i].ime;
        this.odabraniDelegatiPrezime[d]=this.delegatiZaTakmicenjeSaUslovom[i].prezime;
        this.odabraniDelegatiNacionalnost[d]=this.delegatiZaTakmicenjeSaUslovom[i].nacionalnost;
        d++;
      }
    }
    if(this.sportTakmicenje=="tenis"){
      if(s!=4 && s!=8 && s!=16){
        alert("Broj takmicara mora da bude 4, 8 ili 16");
        return;
      }
      for(let i=0;i<this.nosioci.length;i++){
        this.nosiociBr[i]=parseInt(this.nosioci[i]);
      }
    }
    else{
      for(let i=0;i<this.nosioci.length;i++){
        this.nosioci[i]=null;
        this.nosiociBr[i]=null;
      }
    }
    this.takmicenjeServic.dodajTakmicenje(this.sportTakmicenje,this.disciplinaTakmicenje,this.vrstaTakmicenje,this.polTakmicenje,
      this.datumPocetka,this.datumKraja,this.lokacija,this.format,parseInt(this.brojPokusaja),this.odabraneEkipe,this.nosiociBr,
      this.odabraniDelegatiIme,this.odabraniDelegatiPrezime,this.odabraniDelegatiNacionalnost).subscribe(response=>{
        if(response['message']='takmicenje dodato'){
          alert('novo takmicenje je dodato'); 
          this.sportTakmicenje=null;this.disciplinaTakmicenje=null;this.vrstaTakmicenje=null;this.polTakmicenje=null;
          this.datumPocetka=null;this.datumKraja=null;this.lokacija=null;this.format=null;this.brojPokusaja=null;
          this.ekipeZaTakmicenje=[];this.delegatiZaTakmicenje=[];this.delegatiZaTakmicenjeSaUslovom=[];
          this.korisnikServis.pronadjiSlobodneDelegate().subscribe((podaci:Korisnik[])=>{
            this.delegatiZaTakmicenje=podaci;
            if(this.delegatiZaTakmicenje){
              for(let i=0;i<this.delegatiZaTakmicenje.length;i++){
                this.takmicenjeServic.brojTakmicenjaDelegata(this.delegatiZaTakmicenje[i].ime,this.delegatiZaTakmicenje[i].prezime,this.delegatiZaTakmicenje[i].nacionalnost).subscribe((broj:number)=>{
                  if(broj<3){
                    this.delegatiZaTakmicenjeSaUslovom.push(this.delegatiZaTakmicenje[i]);
                  }
                })
              }
            }
          })
        }
      })
  }

  popuniTakmicenje(){
    if(this.sportTakmicenje){
      if(this.sportTakmicenje=="tenis")this.nosilac=true;
      else this.nosilac=false;
      this.sportPrilogServis.dohvatiSveDisciplinePoSportu(this.sportTakmicenje).subscribe((podaci:SportPrilog[])=>{
        this.naziviDisciplinaTakmicenje=podaci;
      })
    }
  }

  dohvatiSportisteZaTakmicenje(){
    this.ekipnoTakmicenje=false;
    if(this.sportTakmicenje=='')this.sportTakmicenje=null;
    if(this.disciplinaTakmicenje=='')this.disciplinaTakmicenje=null;
    if(this.polTakmicenje=='')this.polTakmicenje=null;
    if(this.sportTakmicenje && this.disciplinaTakmicenje && this.polTakmicenje){
      this.sportistaServis.dohvatiSveSportisteZaSportDisciplinuPol(this.sportTakmicenje,this.disciplinaTakmicenje,this.polTakmicenje).subscribe((podaci:Sportista[])=>{
        this.sportistiZaTakmicenje=podaci;
      })
    }
    else{
      this.sportistiZaTakmicenje=null;
    } 
  }

  ekipeZaTakmicenje:Ekipa[];
  ekipnoTakmicenje:boolean;
  dohvatiEkipeZaTakmicenje(){
    this.ekipnoTakmicenje=true;
    if(this.sportTakmicenje=='')this.sportTakmicenje=null;
    if(this.polTakmicenje=='')this.polTakmicenje=null;
    if(this.sportTakmicenje && this.polTakmicenje){
      this.ekipaServis.dohvatiEkipeZaTakmicenje(this.sportTakmicenje,this.polTakmicenje).subscribe((podaci:Ekipa[])=>{
        this.ekipeZaTakmicenje=podaci;
      })
    }
    else{
      this.ekipeZaTakmicenje=null;
    }
  }

  sportista:Sportista;
  ekipa:Ekipa;
  korisnik:Korisnik;

  izaberi(sportista){
    this.sportista=sportista;
    this.sportista.izabran=true;
  }

  odustani(sportista){
    this.sportista=sportista;
    this.sportista.izabran=false;
  }

  izbrisi(imePrezime){
    this.sportistaServis.izbrisiSportistu(imePrezime).subscribe(res=>{
      if(res['poruka']=='ok'){
        if(this.sportTakmicenje && this.disciplinaTakmicenje && this.polTakmicenje){
          this.sportistaServis.dohvatiSveSportisteZaSportDisciplinuPol(this.sportTakmicenje,this.disciplinaTakmicenje,this.polTakmicenje).subscribe((podaci:Sportista[])=>{
            this.sportistiZaTakmicenje=podaci;
          })
        }
      }
    })
  }

  izaberiEkipa(ekipa){
    this.ekipa=ekipa;
    this.ekipa.izabran=true;
  }

  odustaniEkipa(ekipa){
    this.ekipa=ekipa;
    this.ekipa.izabran=false;
  }

  izaberiDelegat(korisnik){
    this.korisnik=korisnik;
    this.korisnik.izabran=true;
  }

  odustaniDelegat(korisnik){
    this.korisnik=korisnik;
    this.korisnik.izabran=false;
  }

}
