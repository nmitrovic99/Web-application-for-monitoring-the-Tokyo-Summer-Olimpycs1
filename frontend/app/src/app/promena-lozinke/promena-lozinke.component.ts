import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-promena-lozinke',
  templateUrl: './promena-lozinke.component.html',
  styleUrls: ['./promena-lozinke.component.css']
})
export class PromenaLozinkeComponent implements OnInit {

  constructor(private korisnikServis:KorisnikService,private router:Router) { }

  ngOnInit(): void {
  }

  korisnicko_ime:string;
  lozinka:string;
  novaLozinka:string;
  potvrdaNoveLozinke:string;
  greska:string[]=[];
  promeniLozinku(){
    this.greska=[];
    this.korisnikServis.dohvatiKorisnikaPoKorImenu(this.korisnicko_ime).subscribe((kor:Korisnik)=>{
      if(kor){
        let pogresno=false;
        if(this.lozinka!=kor.lozinka){
          this.greska.push('Lozinka nije ispravno uneta');
          pogresno=true;
        }
        if(this.lozinka==this.novaLozinka){
          this.greska.push('Nova lozinka je ista kao i prethodna');
          pogresno=true;
        }
        
    
        const regMaxMin: RegExp = /^.{8,12}$/;
        if(!regMaxMin.test(this.novaLozinka)){
          this.greska.push('Lozinka mora da bude izmedju 8 i 12 znakova');
          pogresno=true;
        }
        const regMaxChar:RegExp=/(.)\1{3,}/;
        if(regMaxChar.test(this.novaLozinka)){
          this.greska.push('Lozinka ne sme da ima vise od 3 uzastopna karaktera');
          pogresno=true;
        }
        const regMinUppercase:RegExp=/[A-Z]{1,}/;
        if(!regMinUppercase.test(this.novaLozinka)){
          this.greska.push('Minimalan broj velikih slova za lozinku je 1');
          pogresno=true;
        }
        const regMinLowercase:RegExp=/[a-z]{3,}/;
        if(!regMinLowercase.test(this.novaLozinka)){
          this.greska.push('Minimalan broj malih slova za lozinku je 3');
          pogresno=true;
        }
        const regMinNumeric:RegExp=/[0-9]{2,}/;
        if(!regMinNumeric.test(this.novaLozinka)){
          this.greska.push('Minimalan broj numerika za lozinku je 2');
          pogresno=true;
        }
        const regMinSpecChar:RegExp=/(?=(.*[`!@#$%\^&*\-_=\+'/\.,]){2,})/;
        if(!regMinSpecChar.test(this.novaLozinka)){
          this.greska.push('Minimalan broj specijalnih znakova za lozinku je 2');
          pogresno=true;
        }
        const regFirstChar:RegExp=/^[A-Za-z]/;
        if(!regFirstChar.test(this.novaLozinka)){
          this.greska.push('Prvi karakter mora biti veliko ili malo slovo');
          pogresno=true;
        }
        if(this.novaLozinka!=this.potvrdaNoveLozinke){
          this.greska.push('Potvrda lozinke mora biti ista kao i lozinka');
          pogresno=true;
        }
        if(!pogresno){
          this.korisnikServis.promeniLozinku(this.korisnicko_ime,this.novaLozinka).subscribe(res=>{
            if(res['poruka']=='ok'){
              alert('Lozinka je uspesno promenjena')
              this.router.navigate(['login']);
            }
          })
        }
      }
      else{
        this.greska.push('Pogresno korisnicko ime ili lozinka');
      }
    })
  }

  

}

