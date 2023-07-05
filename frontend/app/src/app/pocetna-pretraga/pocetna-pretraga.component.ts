import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { Sport } from '../models/sport';
import { Sportista } from '../models/sportista';
import { Zemlja } from '../models/zemlja';
import { SportistiService } from '../sportisti.service';
import { SportoviService } from '../sportovi.service';
import { ZemljaService } from '../zemlja.service';

@Component({
  selector: 'app-pocetna-pretraga',
  templateUrl: './pocetna-pretraga.component.html',
  styleUrls: ['./pocetna-pretraga.component.css']
})
export class PocetnaPretragaComponent implements OnInit {

  constructor(private zemljaServis: ZemljaService, private sportistaServis: SportistiService, private sportServis: SportoviService) { }

  ngOnInit(): void {
    this.zemljaServis.dohvatiSveZemlje().subscribe((podaci: Zemlja[]) => {
      this.zemlje = podaci;
      //this.sortiraneZemlje=this.sortirajZemljePoRangu();
    })
    this.sportistaServis.traziSveSportiste().subscribe((podaci: Sportista[]) => {
      this.pretrazeniSportisti = podaci;
    })
    this.sportServis.dohvatiSveSportovePoNazivu().subscribe((podaci: string[]) => {
      this.naziviSportova = podaci;
    })
    this.prijavljenKorisnik = JSON.parse(localStorage.getItem('ulogovan'));
    if (this.prijavljenKorisnik != null) {
      if (this.prijavljenKorisnik.tip == "organizator") this.prijavljenOrganizator = this.prijavljenKorisnik;
      else if (this.prijavljenKorisnik.tip == "delegat") this.prijavljenDelegat = this.prijavljenKorisnik;
      else if (this.prijavljenKorisnik.tip == "vodja_delegacije") this.prijavljenVodja = this.prijavljenKorisnik;
    }
  }

  prijavljenKorisnik: Korisnik = null;
  prijavljenOrganizator: Korisnik = null;
  prijavljenDelegat: Korisnik = null;
  prijavljenVodja: Korisnik = null;

  zemlje: Zemlja[];

  pretragaImePrezime: string = null;
  pretragaPol: string = null;
  pretragaSport: string = null;
  pretragaDisciplina: string = null;
  pretragaNacionalnost: string = null;
  pretragaMedalja: boolean = false;

  pretrazeniSportisti: Sportista[];

  traziSportiste() {
    if (this.pretragaImePrezime == '') this.pretragaImePrezime = null;
    if (this.pretragaPol == '') this.pretragaPol = null;
    if (this.pretragaSport == '') this.pretragaSport = null;
    if (this.pretragaDisciplina == '') this.pretragaDisciplina = null;
    if (this.pretragaNacionalnost == '') this.pretragaNacionalnost = null;
    if (this.pretragaMedalja == false) this.pretragaMedalja = null;
    if (this.pretragaImePrezime == null && this.pretragaPol == null && this.pretragaSport == null && this.pretragaDisciplina == null && this.pretragaNacionalnost == null && this.pretragaMedalja == null) {
      this.sportistaServis.traziSveSportiste().subscribe((podaci: Sportista[]) => {
        this.pretrazeniSportisti = podaci;
      })
    }
    else {
      this.sportistaServis.traziSportiste(this.pretragaImePrezime, this.pretragaPol, this.pretragaSport, this.pretragaDisciplina, this.pretragaNacionalnost, this.pretragaMedalja).subscribe((podaci: Sportista[]) => {
        this.pretrazeniSportisti = podaci;
      })
    }

  }

  pageSportisti = 1;
  countSportisti = 0;
  tableSizeSportisti = 10;
  tableSizesSportisti = [10, 20, 50, 100];

  onTableDataChangeSportisti(event) {
    this.pageSportisti = event;
    /*this.sportistaServis.traziSveSportiste().subscribe((podaci:Sportista[])=>{
      this.pretrazeniSportisti=podaci;
    })*/
  }

  onTableSizeChangeSportisti(event): void {
    this.tableSizeSportisti = event.target.value;
    this.pageSportisti = 1;
    //this.fetchPosts();
    /*this.sportistaServis.traziSveSportiste().subscribe((podaci:Sportista[])=>{
      this.pretrazeniSportisti=podaci;
    })*/
  }

  naziviSportova: string[];
  naziviDisciplina: Sport[];

  popuni() {
    if (this.pretragaSport) {
      this.sportServis.dohvatiSveDisciplinePoSportu(this.pretragaSport).subscribe((podaci: Sport[]) => {
        this.naziviDisciplina = podaci;
      })
    }
  }

}
