import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportoviSviService {

  constructor(private http:HttpClient) { }

  uri='http://localhost:4000';

  dohvatiSveSportovePoNazivu(){
    return this.http.get(`${this.uri}/sportoviSvi/dohvatiSveSportovePoNazivu`);
  }

  dohvatiSveDisciplinePoSportu(sport){
    const podaci={
      sport:sport
    }

    return this.http.post(`${this.uri}/sportoviSvi/dohvatiSveDisciplinePoSportu`,podaci);
  }

  dohvatiSveSportovePoNazivuIDisciplini(sport,disciplina){
    const podaci={
      sport:sport,
      disciplina:disciplina
    }

    return this.http.post(`${this.uri}/sportoviSvi/dohvatiSveSportovePoNazivuIDisciplini`,podaci);
  }
}

