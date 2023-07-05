import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { Zemlja } from '../models/zemlja';
import { SportistiService } from '../sportisti.service';
import { ZemljaService } from '../zemlja.service';

@Component({
  selector: 'app-pocetna-medalje',
  templateUrl: './pocetna-medalje.component.html',
  styleUrls: ['./pocetna-medalje.component.css']
})
export class PocetnaMedaljeComponent implements OnInit {

  constructor(private zemljaServis:ZemljaService,private sportistaServis:SportistiService) { }

  ngOnInit(): void {
    this.zemljaServis.dohvatiSveZemlje().subscribe((podaci:Zemlja[])=>{
      this.zemlje=podaci;
      this.sortiraneZemlje=this.sortirajZemljePoRangu();
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

  pageRang=1;
  countRang=0;
  tableSizeRang=10;
  onTableDataChangeZemljeRang(event){
    this.pageRang=event;
    /*this.zemljaServis.dohvatiSveZemlje().subscribe((podaci:Zemlja[])=>{
      this.zemlje=podaci;
    })*/
  }

  saberi(zlato, srebro, bronza){

    return zlato+srebro+bronza;
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

  sortiraneZemlje:Zemlja[];

}
