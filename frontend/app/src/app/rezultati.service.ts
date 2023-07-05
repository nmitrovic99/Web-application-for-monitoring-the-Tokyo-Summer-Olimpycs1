import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RezultatiService {

  constructor(private http:HttpClient) { }

  uri='http://localhost:4000';


  pronadjiRezultateZaSportDisciplinu(sport,disciplina,pol){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      pol:pol
    }
    return this.http.post(`${this.uri}/rezultati/pronadjiRezultateZaSportDisciplinu`,podaci);
  }

  dodajRezultat(sport,disciplina,brojKola,format,imePrezime,rez,pol){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      brojKola:brojKola,
      format:format,
      pol:pol,
      imePrezime:imePrezime,
      rez:rez
    }

    return this.http.post(`${this.uri}/rezultati/dodajRezultat`,podaci);
  }

  pronadjiNajveceRezultate(sport,disciplina,pol,brojKola){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      pol:pol,
      brojKola:brojKola
    }

    return this.http.post(`${this.uri}/rezultati/pronadjiNajveceRezultate`,podaci);
  }

  pronadjiMaxRezultat(sport,disciplina,pol,imePrezime){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      pol:pol,
      imePrezime:imePrezime
    }
    return this.http.post(`${this.uri}/rezultati/pronadjiMaxRezultat`,podaci);
  }

  dodajMaxRezultat(sport,disciplina,pol,format,imePrezime,rez,pozicija){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      format:format,
      pol:pol,
      imePrezime:imePrezime,
      rez:rez,
      pozicija:pozicija
    }

    return this.http.post(`${this.uri}/maxRezultati/dodajMaxRezultat`,podaci);
  }

  dohvatiRezultatePoPoziciji(sport,disciplina,pol,pozicija){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      pol:pol,
      pozicija:pozicija
    }
    return this.http.post(`${this.uri}/maxRezultati/dohvatiRezultatePoPoziciji`,podaci);
  }

  inkrementirajPoziciju(sport,disciplina,pol,imePrezime){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      pol:pol,
      imePrezime:imePrezime
    }
    return this.http.post(`${this.uri}/maxRezultati/inkrementirajPoziciju`,podaci);
  }

  pronadjiAzuriranePozicije(sport,disciplina,pol,imePrezime){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      pol:pol,
      imePrezime:imePrezime
    }
    return this.http.post(`${this.uri}/maxRezultati/pronadjiAzuriranePozicije`,podaci);
  }
}
