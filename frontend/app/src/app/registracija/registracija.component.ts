import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService,private router:Router) { }

  ngOnInit(): void {
  }

  korisnicko_ime:string;
  lozinka:string;
  potvrdalozinke:string;
  ime:string;
  prezime:string;
  nacionalnost:string;
  mail:string;
  tip:string;
  odobren=false;

  greska:string[]=[];

  register(){
    //const reg=/(.)\1\1\1/;
    //const reg=/^[0-9]\d{3-5}$/;
    let pogresno=false;
    this.greska=[];

    const regMaxMin: RegExp = /^.{8,12}$/;
    if(!regMaxMin.test(this.lozinka)){
      this.greska.push('Lozinka mora da bude izmedju 8 i 12 znakova');
      pogresno=true;
    }
    const regMaxChar:RegExp=/(.)\1{3,}/;
    if(regMaxChar.test(this.lozinka)){
      this.greska.push('Lozinka ne sme da ima vise od 3 uzastopna karaktera');
      pogresno=true;
    }
    const regMinUppercase:RegExp=/[A-Z]{1,}/;
    if(!regMinUppercase.test(this.lozinka)){
      this.greska.push('Minimalan broj velikih slova za lozinku je 1');
      pogresno=true;
    }
    const regMinLowercase:RegExp=/[a-z]{3,}/;
    if(!regMinLowercase.test(this.lozinka)){
      this.greska.push('Minimalan broj malih slova za lozinku je 3');
      pogresno=true;
    }
    const regMinNumeric:RegExp=/[0-9]{2,}/;
    if(!regMinNumeric.test(this.lozinka)){
      this.greska.push('Minimalan broj numerika za lozinku je 2');
      pogresno=true;
    }
    const regMinSpecChar:RegExp=/(?=(.*[`!@#$%\^&*\-_=\+'/\.,]){2,})/;
    if(!regMinSpecChar.test(this.lozinka)){
      this.greska.push('Minimalan broj specijalnih znakova za lozinku je 2');
      pogresno=true;
    }
    const regFirstChar:RegExp=/^[A-Za-z]/;
    if(!regFirstChar.test(this.lozinka)){
      this.greska.push('Prvi karakter mora biti veliko ili malo slovo');
      pogresno=true;
    }
    if(this.lozinka!=this.potvrdalozinke){
      this.greska.push('Potvrda lozinke mora biti ista kao i lozinka');
      pogresno=true;
    }
    if(!pogresno){
      this.korisnikServis.registracijaNaSistem(this.korisnicko_ime,this.lozinka,this.ime,this.prezime,this.nacionalnost,this.mail,this.tip,this.odobren).subscribe(response=>{
        if(response['message']='korisnik dodat'){
          alert('korisnik je dodat');
        }
      })
      this.router.navigate(['login']);
    }
  }

}

