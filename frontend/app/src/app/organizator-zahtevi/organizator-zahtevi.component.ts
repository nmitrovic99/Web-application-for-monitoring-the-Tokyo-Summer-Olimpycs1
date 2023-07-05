import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-organizator-zahtevi',
  templateUrl: './organizator-zahtevi.component.html',
  styleUrls: ['./organizator-zahtevi.component.css']
})
export class OrganizatorZahteviComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService,private ruter:Router) { }

  ngOnInit(): void {
    this.korisnikServis.dohvatiNeodobreneKorisnike().subscribe((podaci:Korisnik[])=>{
      this.neodobreniKorisnici=podaci;
    })
  }

  neodobreniKorisnici:Korisnik[];
 
  odjaviSe(){
    localStorage.clear();
    this.ruter.navigate(['']);
  }

  odobri(korisnicko_ime,nacionalnost,tip){
    this.korisnikServis.dohvatiVodjuNacionalneDelegacije(nacionalnost).subscribe((kor:Korisnik)=>{
      if(kor && tip=='vodja_delegacije'){
        alert('Vodja ove nacionalne delegacije vec postoji');
      }
      else{
        /*if(tip=='vodja_delegacije'){
          this.zemljaServis.dodajZemlju(nacionalnost).subscribe(response=>{
            if(response['message']='zemlja dodata'){
              alert('zemlja je dodata');
            }
          })
        }*/
        this.korisnikServis.odobriZahtev(korisnicko_ime).subscribe(res=>{
          if(res['poruka']=='ok'){
            this.korisnikServis.dohvatiNeodobreneKorisnike().subscribe((podaci:Korisnik[])=>{
              this.neodobreniKorisnici=podaci;
            })
          }
        })
      }
    })
  }

  odbij(korisnicko_ime){
    this.korisnikServis.odbijZahtev(korisnicko_ime).subscribe(res=>{
      if(res['poruka']=='ok'){
        this.korisnikServis.dohvatiNeodobreneKorisnike().subscribe((podaci:Korisnik[])=>{
          this.neodobreniKorisnici=podaci;
        })
      }
    })
  }

}
