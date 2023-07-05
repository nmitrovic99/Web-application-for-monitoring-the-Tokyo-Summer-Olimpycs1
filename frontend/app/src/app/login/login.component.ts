import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService,private ruter:Router) { }

  ngOnInit(): void {
  }

  korisnicko_ime:string;
  lozinka:string;
  greska:string;

  prijava(){
    this.korisnikServis.prijavaNaSistem(this.korisnicko_ime,this.lozinka).subscribe((kor:Korisnik)=>{
      if(kor){
        
        if(kor.tip=='delegat' && kor.odobren==true){
          this.ruter.navigate(['delegat']);
        }
        else if(kor.tip=='vodja_delegacije' && kor.odobren){
          this.ruter.navigate(['vodjaSportista']);
        }
        else if(kor.tip=='organizator'){
          this.ruter.navigate(['organizatorZahtevi']);
        }
        else{
          this.greska='Vas zahtev je poslat na odobravanje od strane admina'
        }
        localStorage.setItem('ulogovan',JSON.stringify(kor));
      }
      else{
        this.greska='Greska pri unosu korisnickog imena ili lozinke';
      }
    })
  }

}

