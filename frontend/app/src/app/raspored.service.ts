import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RasporedService {

  constructor(private http:HttpClient) { }

  uri='http://localhost:4000';

  dodajSatnicu(sport,disciplina,pol,lokacija,datumVreme){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      pol:pol,
      lokacija:lokacija,
      datumVreme:datumVreme 
    }

    return this.http.post(`${this.uri}/rasporedi/dodajSatnicu`,podaci);
  }

  dohvatiSveSatniceZaLokaciju(lokacija){
    const podaci={
      lokacija:lokacija
    }
    return this.http.post(`${this.uri}/rasporedi/dohvatiSveSatniceZaLokaciju`,podaci);
  }

  dohvatiSatnicuZaSportDisciplinuPol(sport,disciplina,pol){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      pol:pol
    }
    return this.http.post(`${this.uri}/rasporedi/dohvatiSatnicuZaSportDisciplinuPol`,podaci);
  }

  dodajRasporedMeca(sport,disciplina,pol,lokacija,faza,takmicarskiPar,teren,datumVreme){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      pol:pol,
      lokacija:lokacija,
      faza:faza,
      takmicarskiPar:takmicarskiPar,
      teren:teren,
      datumVreme:datumVreme
    }
    return this.http.post(`${this.uri}/rasporediMecevi/dodajRasporedMeca`,podaci);
  }

  dohvatiRasporedMecaZaFazu(sport,disciplina,faza,takmicarskiPar){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      faza:faza,
      takmicarskiPar:takmicarskiPar
    }
    return this.http.post(`${this.uri}/rasporediMecevi/dohvatiRasporedMecaZaFazu`,podaci);
  }

  dohvatiRasporedMecaZaTeren(teren,datumVreme){
    const podaci={
      teren:teren,
      datumVreme:datumVreme
    }
    return this.http.post(`${this.uri}/rasporediMecevi/dohvatiRasporedMecaZaTeren`,podaci);
  }
}
