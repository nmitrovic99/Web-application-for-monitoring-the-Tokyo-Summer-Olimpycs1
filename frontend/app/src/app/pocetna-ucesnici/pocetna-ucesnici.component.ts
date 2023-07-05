import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { Zemlja } from '../models/zemlja';
import { ZemljaService } from '../zemlja.service';

@Component({
  selector: 'app-pocetna-ucesnici',
  templateUrl: './pocetna-ucesnici.component.html',
  styleUrls: ['./pocetna-ucesnici.component.css']
})
export class PocetnaUcesniciComponent implements OnInit {

  constructor(private zemljaServis:ZemljaService) { }

  ngOnInit(): void {
    this.zemljaServis.dohvatiSveZemlje().subscribe((podaci:Zemlja[])=>{
      this.zemlje=podaci;
    })
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

  zemlje:Zemlja[];
  sortiraneZemlje:Zemlja[];

  pageZastava=1;
  countZastava=0;
  tableSizeZastava=10;

  onTableDataChangeZemljeZastava(event){
    this.pageZastava=event;
    /*this.zemljaServis.dohvatiSveZemlje().subscribe((podaci:Zemlja[])=>{
      this.zemlje=podaci;
    })*/
  }

  sortirajZemljePoRangu(){
    if(this.zemlje){
      return this.zemlje.sort((a,b)=>{
        let ukupnoA=a.zlato+a.srebro+a.bronza;
        let ukupnoB=b.zlato+b.srebro+b.bronza;
        if(ukupnoA>ukupnoB)return -1;
        if(ukupnoA<ukupnoB)return 1;
        if(ukupnoA==ukupnoB){
          if(a.zlato>b.zlato)return -1;
          if(a.zlato<b.zlato)return 1;
          if(a.zlato==b.zlato){
            if(a.srebro>b.srebro)return -1;
            if(a.srebro<b.srebro)return 1;
            if(a.srebro==b.srebro){
              return 0;
            }
          }
        }
      })
    }
}
}
