import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZemljaService {

  constructor(private http:HttpClient) { }

  uri='http://localhost:4000';

  dodajZemlju(imeZemlje){
    const podaci={
      imeZemlje:imeZemlje,
      skracenica:null,
      brojSportista:0,
      zlato:0,
      srebro:0,
      bronza:0
    }

    return this.http.post(`${this.uri}/zemlje/dodajZemlju`,podaci);
  }

  dohvatiSveZemlje(){
    return this.http.get(`${this.uri}/zemlje/dohvatiSveZemlje`);
  }

  inkrementirajBrojSportista(imeZemlje){
    const podaci={
      imeZemlje:imeZemlje
    }
    return this.http.post(`${this.uri}/zemlje/inkrementirajBrojSportista`,podaci);
  }

  dodajSportistu(ime){
    const podaci={
      ime:ime
    }
    return this.http.post(`${this.uri}/zemlje/dodajSportistu`,podaci);
  }

  inkrementirajBrojMedalja(imeZemlje,medalja){
    const podaci={
      imeZemlje:imeZemlje,
      medalja:medalja
    }

    return this.http.post(`${this.uri}/zemlje/inkrementirajBrojMedalja`,podaci);
  }

  inkrementirajBrojZlata(imeZemlje){
    const podaci={
      imeZemlje:imeZemlje
    }
    return this.http.post(`${this.uri}/zemlje/inkrementirajBrojZlata`,podaci);
  }

  inkrementirajBrojSrebra(imeZemlje){
    const podaci={
      imeZemlje:imeZemlje
    }
    return this.http.post(`${this.uri}/zemlje/inkrementirajBrojSrebra`,podaci);
  }

  inkrementirajBrojBronzi(imeZemlje){
    const podaci={
      imeZemlje:imeZemlje
    }
    return this.http.post(`${this.uri}/zemlje/inkrementirajBrojBronzi`,podaci);
  }
  
}

