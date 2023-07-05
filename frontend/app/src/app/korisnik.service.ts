import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http:HttpClient) { }

  uri='http://localhost:4000';

  prijavaNaSistem(korisnicko_ime,lozinka){
    const podaci={
      korisnicko_ime:korisnicko_ime,
      lozinka:lozinka
    }
    
    return this.http.post(`${this.uri}/korisnici/prijavaNaSistem`,podaci);
    //mora ovaj return jer smo mi poslali zahtev ali vratice nam se response pa mora return kako bi komponenta sa tim mogla da radi
  }

  registracijaNaSistem(korisnicko_ime,lozinka,ime,prezime, nacionalnost,mail,tip,odobren){
    const podaci={
      korisnicko_ime:korisnicko_ime,
      lozinka:lozinka,
      ime:ime,
      prezime:prezime,
      nacionalnost:nacionalnost,
      mail:mail,
      tip:tip,
      odobren:odobren
    }

    return this.http.post(`${this.uri}/korisnici/registracijaNaSistem`,podaci);
  }

  dohvatiNeodobreneKorisnike(){
    return this.http.get(`${this.uri}/korisnici/dohvatiNeodobreneKorisnike`);
  }

  odobriZahtev(korisnicko_ime){
    const podaci={
      korisnicko_ime:korisnicko_ime
    }

    return this.http.post(`${this.uri}/korisnici/odobriZahtev`,podaci);
  }

  odbijZahtev(korisnicko_ime){
    const podaci={
      korisnicko_ime:korisnicko_ime
    }

    return this.http.post(`${this.uri}/korisnici/odbijZahtev`,podaci);
  }

  dohvatiVodjuNacionalneDelegacije(nacionalnost){
    const podaci={
      nacionalnost:nacionalnost
    }
    return this.http.post(`${this.uri}/korisnici/dohvatiVodjuNacionalneDelegacije`,podaci);
  }

  dohvatiKorisnikaPoKorImenu(korisnicko_ime){
    const podaci={
      korisnicko_ime:korisnicko_ime
    }
    return this.http.post(`${this.uri}/korisnici/dohvatiKorisnikaPoKorImenu`,podaci);
  }

  promeniLozinku(korisnicko_ime,lozinka){
    const podaci={
      korisnicko_ime:korisnicko_ime,
      lozinka:lozinka
    }
    return this.http.post(`${this.uri}/korisnici/promeniLozinku`,podaci);
  }

  pronadjiSlobodneDelegate(){
    return this.http.get(`${this.uri}/korisnici/pronadjiSlobodneDelegate`);
  }
}

