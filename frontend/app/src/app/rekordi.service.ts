import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RekordiService {

  constructor(private http:HttpClient) { }

  uri='http://localhost:4000';

  dohvatiSveRekordeZaMuskarce(){
    return this.http.get(`${this.uri}/rekordiMuskarci/dohvatiSveRekordeZaMuskarce`);
  }

  dohvatiSveRekordeZaZene(){
    return this.http.get(`${this.uri}/rekordiZene/dohvatiSveRekordeZaZene`);
  }
}
