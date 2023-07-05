import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportistiService {

  constructor(private http:HttpClient) { }

  uri='http://localhost:4000';
 
  traziSportiste(pretragaImePrezime, pretragaPol, pretragaSport,pretragaDisciplina,pretragaNacionalnost,pretragaMedalja){
    const podaci={
      pretragaImePrezime:pretragaImePrezime,
      pretragaPol:pretragaPol,
      pretragaSport:pretragaSport,
      pretragaDisciplina:pretragaDisciplina,
      pretragaNacionalnost:pretragaNacionalnost,
      pretragaMedalja:pretragaMedalja
    }

    return this.http.post(`${this.uri}/sportisti/traziSportiste`,podaci);
  }

  traziSveSportiste(){
    return this.http.get(`${this.uri}/sportisti/traziSveSportiste`);
  }

  dodajIndividualnogSportistu(imePrezime,pol,sport,disciplina,nacionalnost){
    const podaci={
      imePrezime:imePrezime,
      pol:pol,
      sport:sport,
      disciplina:disciplina,
      nacionalnost:nacionalnost,
      medalja:false,
      izabran:false
    }

    return this.http.post(`${this.uri}/sportisti/dodajIndividualnogSportistu`,podaci);
  }

  dohvatiSportistuPoImenu(imePrezime){
    const podaci={
      imePrezime:imePrezime
    }

    return this.http.post(`${this.uri}/sportisti/dohvatiSveSportistePoImenu`,podaci);
  }

  dodajDisciplinu(imePrezime,disciplina){
    const podaci={
      imePrezime:imePrezime,
      disciplina:disciplina
    }

    return this.http.post(`${this.uri}/sportisti/dodajDisciplinu`,podaci);
  }

  dohvatiSveSportisteZaZemljuSportDisciplinu(nacionalnost,sport,disciplina){
    const podaci={
      nacionalnost:nacionalnost,
      sport:sport,
      disciplina:disciplina
    }

    return this.http.post(`${this.uri}/sportisti/dohvatiSveSportisteZaZemljuSportDisciplinu`,podaci);
  }

  dohvatiSveSportisteZaSportDisciplinuPol(sport, disciplina, pol){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      pol:pol
    }

    
    return this.http.post(`${this.uri}/sportisti/dohvatiSveSportisteZaSportDisciplinuPol`,podaci);
  }

  dohvatiZemljuZaSportistu(imePrezime){
    const podaci={
      imePrezime:imePrezime
    }
    return this.http.post(`${this.uri}/sportisti/dohvatiZemljuZaSportistu`,podaci);
  }

  osvojioMedalju(imePrezime){
    const podaci={
      imePrezime:imePrezime
    }
    return this.http.post(`${this.uri}/sportisti/osvojioMedalju`,podaci);
  }

  dohvatiSveSportisteZaZemlju(nacionalnost){
    const podaci={
      nacionalnost:nacionalnost
    }
    return this.http.post(`${this.uri}/sportisti/dohvatiSveSportisteZaZemlju`,podaci);
  }

  dohvatiSveSportisteZaZemljuSport(nacionalnost,sport){
    const podaci={
      nacionalnost:nacionalnost,
      sport:sport
    }
    return this.http.post(`${this.uri}/sportisti/dohvatiSveSportisteZaZemljuSport`,podaci);
  }

  izbrisiSportistu(imePrezime){
    const podaci={
      imePrezime:imePrezime
    }
    return this.http.post(`${this.uri}/sportisti/izbrisiSportistu`,podaci);
  }
}

