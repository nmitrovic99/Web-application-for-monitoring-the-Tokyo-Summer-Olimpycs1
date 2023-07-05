import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TakmicenjaService {

  constructor(private http:HttpClient) { }

  uri='http://localhost:4000';

  dodajTakmicenje(sport,disciplina,vrsta,pol,datumPocetka,datumKraja,lokacija,format,brojPokusaja,takmicari,nosiociBr,
    delegatiIme,delegatiPrezime,delegatiNacionalnost){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      vrsta:vrsta,
      pol:pol,
      datumPocetka:datumPocetka,
      datumKraja:datumKraja,
      lokacija:lokacija,
      format:format,
      brojPokusaja:brojPokusaja,
      takmicari:takmicari,
      nosiociBr:nosiociBr,
      delegatiIme:delegatiIme,
      delegatiPrezime:delegatiPrezime,
      delegatiNacionalnost:delegatiNacionalnost,
      zavrseno:false
    }

    return this.http.post(`${this.uri}/takmicenja/dodajTakmicenje`,podaci);
  }

  pronadjiSvaTakmicenjaDelegata(ime,prezime){
    const podaci={
      ime:ime,
      prezime:prezime
    }
    return this.http.post(`${this.uri}/takmicenja/pronadjiSvaTakmicenjaDelegata`,podaci);
  }

  brojTakmicenjaDelegata(ime,prezime,nacionalnost){
    const podaci={
      ime:ime,
      prezime:prezime,
      nacionalnost:nacionalnost
    }
    return this.http.post(`${this.uri}/takmicenja/brojTakmicenjaDelegata`,podaci);
  }

  pronadjiTakmicenjeZaSportDisciplinu(sport,disciplina){
    const podaci={
      sport:sport,
      disciplina:disciplina
    }
    return this.http.post(`${this.uri}/takmicenja/pronadjiTakmicenjeZaSportDisciplinu`,podaci);
  }

  zavrsenoTakmicenje(sport,disciplina,pol){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      pol:pol
    }
    return this.http.post(`${this.uri}/takmicenja/zavrsenoTakmicenje`,podaci);
  }
}

