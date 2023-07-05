import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_INITIALIZER } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MecService {

  constructor(private http:HttpClient) { }

  uri='http://localhost:4000';

  dodajMec(sport,disciplina,format,imePrezimeTakmicara1,imePrezimeTakmicara2,nosilac1,nosilac2,pol,faza,takmicarskiPar,rez){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      format:format,
      imePrezimeTakmicara1:imePrezimeTakmicara1,
      imePrezimeTakmicara2:imePrezimeTakmicara2,
      nosilac1:nosilac1,
      nosilac2:nosilac2,
      pol:pol,
      faza:faza,
      takmicarskiPar:takmicarskiPar,
      rez:rez
    }

    return this.http.post(`${this.uri}/mecevi/dodajMec`,podaci);
  }

  dohvatiSveMeceve(sport,disciplina,faza,takmicarskiPar){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      faza:faza,
      takmicarskiPar:takmicarskiPar
    }
    return this.http.post(`${this.uri}/mecevi/dohvatiSveMeceve`,podaci);
  }

  dodajRezultatMeca(sport,disciplina,pol,faza,takmicarskiPar,rez){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      pol:pol,
      faza:faza,
      takmicarskiPar:takmicarskiPar,
      rez:rez
    }
    return this.http.post(`${this.uri}/mecevi/dodajRezultatMeca`,podaci);
  }

  dohvatiMecZaFazu(sport,disciplina,pol,faza){
    const podaci={
      sport:sport,
      disciplina:disciplina,
      pol:pol,
      faza:faza
    }
    return this.http.post(`${this.uri}/mecevi/dohvatiMecZaFazu`,podaci);
  }
}
