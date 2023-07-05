import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EkipaService {

  constructor(private http:HttpClient) { }

  uri='http://localhost:4000';

  dodajEkipu(naziv,pol,sport,clanovi,medalja){
    const podaci={
      naziv:naziv,
      pol:pol,
      sport:sport,
      clanovi:clanovi,
      medalja:medalja
    }

    return this.http.post(`${this.uri}/ekipe/dodajEkipu`,podaci);
  }

  dohvatiEkipeZaTakmicenje(sport,pol){
    const podaci={
      sport:sport,
      pol:pol
    }
    return this.http.post(`${this.uri}/ekipe/dohvatiEkipeZaTakmicenje`,podaci);
  }
}
