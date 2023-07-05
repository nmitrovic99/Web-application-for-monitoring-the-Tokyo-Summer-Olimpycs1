import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.prijavljenKorisnik=JSON.parse(localStorage.getItem('ulogovan'));
    if(this.prijavljenKorisnik!=null){
      if(this.prijavljenKorisnik.tip=="organizator")this.prijavljenOrganizator=this.prijavljenKorisnik;
      else if(this.prijavljenKorisnik.tip=="delegat")this.prijavljenDelegat=this.prijavljenKorisnik;
      else if(this.prijavljenKorisnik.tip=="vodja_delegacije")this.prijavljenVodja=this.prijavljenKorisnik;
    }
  }

  prijavljenKorisnik:Korisnik=null;
  prijavljenOrganizator:Korisnik=null;
  prijavljenDelegat:Korisnik=null;
  prijavljenVodja:Korisnik=null;

}
