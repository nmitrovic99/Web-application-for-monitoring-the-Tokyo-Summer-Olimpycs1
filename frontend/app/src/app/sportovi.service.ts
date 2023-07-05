import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportoviService {

  constructor(private http:HttpClient) { }

  uri='http://localhost:4000';

  dodajSport(sport,disciplina,vrsta,minmax){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      vrsta:vrsta,
      minmax:minmax
    }

    return this.http.post(`${this.uri}/sportovi/dodajSport`,podaci);
  }

  dohvatiSveSportovePoNazivu(){
    return this.http.get(`${this.uri}/sportovi/dohvatiSveSportovePoNazivu`);
  }

  dohvatiSveDisciplinePoSportu(sport){
    const podaci={
      sport:sport
    }

    return this.http.post(`${this.uri}/sportovi/dohvatiSveDisciplinePoSportu`,podaci);
  }

  dohvatiNaziveIndividualnihSportova(){
    return this.http.get(`${this.uri}/sportovi/dohvatiNaziveIndividualnihSportova`);
  }

  dohvatiNaziveEkipnihSportova(){
    return this.http.get(`${this.uri}/sportovi/dohvatiNaziveEkipnihSportova`);
  }

  dohvatiDisciplineIndividualnihSportova(sport){
    const podaci={
      sport:sport
    }

    return this.http.post(`${this.uri}/sportovi/dohvatiDisciplineIndividualnihSportova`,podaci);
  }

  dohvatiDisciplineEkipnihSportova(sport){
    const podaci={
      sport:sport
    }
    return this.http.post(`${this.uri}/sportovi/dohvatiDisciplineEkipnihSportova`,podaci);
  }

  dohvatiEkipniSport(sport){
    const podaci={
      sport:sport
    }
    return this.http.post(`${this.uri}/sportovi/dohvatiEkipniSport`,podaci);
  }

  dohvatiSportPoSportuDisciplini(sport,disciplina){
    const podaci={
      sport:sport,
      disciplina:disciplina
    }
    return this.http.post(`${this.uri}/sportovi/dohvatiSportPoSportuDisciplini`,podaci);
  }
  
}

