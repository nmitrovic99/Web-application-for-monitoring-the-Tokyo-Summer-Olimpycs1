import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sport } from '../models/sport';
import { SportPrilog } from '../models/sportPrilog';
import { SportoviSviService } from '../sportovi-svi.service';
import { SportoviService } from '../sportovi.service';

@Component({
  selector: 'app-organizator-sport',
  templateUrl: './organizator-sport.component.html',
  styleUrls: ['./organizator-sport.component.css']
})
export class OrganizatorSportComponent implements OnInit {

  constructor(private sportPrilogServis: SportoviSviService, private ruter: Router, private sportServis: SportoviService) { }

  ngOnInit(): void {
    this.sportPrilogServis.dohvatiSveSportovePoNazivu().subscribe((podaci: string[]) => {
      this.naziviSportova = podaci;
    })
  }

  popuni() {
    if (this.sportIzabran) {
      this.sportPrilogServis.dohvatiSveDisciplinePoSportu(this.sportIzabran).subscribe((podaci: SportPrilog[]) => {
        this.naziviDisciplina = podaci;
      })
    }
  }

  odjaviSe() {
    localStorage.clear();
    this.ruter.navigate(['']);
  }

  naziviSportova: string[];
  naziviDisciplina: SportPrilog[];
  dohvacenSport: SportPrilog;
  message1: string;
  message2: string;
  message3: string;

  sportIzabran: string = null;
  disciplinaIzabrana: string = null;
  vrstaIzabrana: string = null;
  brIgracaIzabrano: string = null;

  dodajSport() {
    let pogresno = false;
    this.message1 = null;
    this.message2 = null;
    this.sportPrilogServis.dohvatiSveSportovePoNazivuIDisciplini(this.sportIzabran, this.disciplinaIzabrana).subscribe((dohvSport: SportPrilog) => {
      if (dohvSport) {
        if (dohvSport.vrsta != this.vrstaIzabrana) {
          this.message1 = 'Izabrana vrsta se ne poklapa sa vrstom iz priloga';
          pogresno = true;
          this.vrstaIzabrana = null;
        }
        if (dohvSport.minmax != this.brIgracaIzabrano) {
          this.message2 = 'Maksimalan broj igraca se ne poklapa sa brojem iz priloga';
          pogresno = true;
          this.brIgracaIzabrano = null;
        }
        if (!pogresno) {
          this.sportServis.dohvatiSportPoSportuDisciplini(this.sportIzabran, this.disciplinaIzabrana).subscribe((sport: Sport) => {
            if (sport) {
              this.message3 = 'Odabrani sport vec postoji u bazi';
            }
            else {
              this.sportServis.dodajSport(this.sportIzabran, this.disciplinaIzabrana, this.vrstaIzabrana, this.brIgracaIzabrano).subscribe(response => {
                if (response['message'] = 'sport dodat') {
                  alert('sport je dodat');
                  this.sportIzabran = null; this.disciplinaIzabrana = null;
                  this.vrstaIzabrana = null; this.brIgracaIzabrano = null;
                }
              })
            }
          })
        }
      }
      else {
        this.sportServis.dohvatiSportPoSportuDisciplini(this.sportIzabran, this.disciplinaIzabrana).subscribe((sport: Sport) => {
          if (sport) {
            this.message3 = 'Odabrani sport vec postoji u bazi';
          }
          else {
            this.sportServis.dodajSport(this.sportIzabran, this.disciplinaIzabrana, this.vrstaIzabrana, this.brIgracaIzabrano).subscribe(response => {
              if (response['message'] = 'sport dodat') {
                alert('novi sport je dodat');
                this.sportIzabran = null; this.disciplinaIzabrana = null;
                this.vrstaIzabrana = null; this.brIgracaIzabrano = null;
              }
            })
          }
        })
      }
    })
  }

  prikaz: boolean;
  minmax(vrsta) {
    if (vrsta == "individualni") {
      this.prikaz = false;
    }
    else {
      this.prikaz = true;
    }
  }

}
