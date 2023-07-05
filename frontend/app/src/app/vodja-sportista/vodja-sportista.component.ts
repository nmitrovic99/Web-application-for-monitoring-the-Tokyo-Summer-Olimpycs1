import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EkipaService } from '../ekipa.service';
import { Korisnik } from '../models/korisnik';
import { Sport } from '../models/sport';
import { Sportista } from '../models/sportista';
import { Takmicenje } from '../models/takmicenje';
import { SportistiService } from '../sportisti.service';
import { SportoviService } from '../sportovi.service';
import { TakmicenjaService } from '../takmicenja.service';
import { ZemljaService } from '../zemlja.service';

@Component({
  selector: 'app-vodja-sportista',
  templateUrl: './vodja-sportista.component.html',
  styleUrls: ['./vodja-sportista.component.css']
})
export class VodjaSportistaComponent implements OnInit {

  constructor(private sportistaServis:SportistiService,private sportServis:SportoviService, private zemljaServis:ZemljaService,
    private ruter:Router,private takmicenjeServis:TakmicenjaService, private ekipaServis:EkipaService) { }

 ngOnInit(): void {
   this.korisnik=JSON.parse(localStorage.getItem('ulogovan'));
   this.sportServis.dohvatiNaziveIndividualnihSportova().subscribe((podaci:string[])=>{
     this.naziviIndividualnihSportova=podaci;
   })
   this.sportServis.dohvatiNaziveEkipnihSportova().subscribe((podaci:string[])=>{
     this.naziviEkipnihSportova=podaci;
   })
   
 }

 korisnik:Korisnik;

 imePrezime:string=null;
 pol:string=null;
 sport:string=null;
 disciplina:string=null;
 nacionalnost:string=null;
 message1:string='';

 pretrazeniSportisti:Sportista[];

 naziviIndividualnihSportova:string[];
 naziviIndividualnihDisciplina:Sport[];

 

 popuniIndividualneDiscipline(){
   if(this.sport){
     this.sportServis.dohvatiDisciplineIndividualnihSportova(this.sport).subscribe((podaci:Sport[])=>{
       this.naziviIndividualnihDisciplina=podaci;
     })
   }
 }

 odjaviSe(){
   localStorage.clear();
   this.ruter.navigate(['']);
 }

 dohvaceniSportisti:Sportista[];

 dodajIndividualnogSportistu(){
   
   
   let pogresno=false;
   this.message1='';
   if(this.imePrezime=='')this.imePrezime=null;
   if(this.pol=='')this.pol=null;
   if(this.sport=='')this.sport=null;
   if(this.disciplina=='')this.disciplina=null;
   this.nacionalnost=this.korisnik.nacionalnost;
   if(this.imePrezime==null){
     this.message1+="Ime i prezime mora biti uneto. ";
     pogresno=true;
   }
   if(this.pol==null){
     this.message1+="Pol mora biti unet. ";
     pogresno=true;
   }
   if(this.sport==null){
     this.message1+="Sport mora biti unet. ";
     pogresno=true;
   }
   if(this.disciplina==null){
     this.message1+="Disciplina mora biti uneta. ";
     pogresno=true;
   }
   if(!pogresno){
     this.sportistaServis.dohvatiSportistuPoImenu(this.imePrezime).subscribe((sportista:Sportista)=>{
       if(sportista){
         if(this.sport!=sportista.sport){
           this.message1+="Sportista se moze takmiciti u najvise jednom sportu";
           return;
         }
         else{
           this.takmicenjeServis.pronadjiTakmicenjeZaSportDisciplinu(this.sport,this.disciplina).subscribe((takmicenje:Takmicenje)=>{
             if(takmicenje){
               this.message1+="Organizator je formirao takmicenje, vreme za prijavljivanje korisnika je isteklo"
             }
             else{
               this.sportistaServis.dodajDisciplinu(this.imePrezime,this.disciplina).subscribe(response=>{
                 if(response['message']=='disciplina dodata'){
                   alert('disciplina je dodata');
                   this.imePrezime=null;this.sport=null;this.disciplina=null;this.pol=null;
                 }
               })
             }
           })
         }
       } 
       else{
         this.takmicenjeServis.pronadjiTakmicenjeZaSportDisciplinu(this.sport,this.disciplina).subscribe((takmicenje:Takmicenje)=>{
           if(takmicenje){
             this.message1+="Organizator je formirao takmicenje, vreme za prijavljivanje korisnika je isteklo"
           }
           else{
             this.sportistaServis.dodajIndividualnogSportistu(this.imePrezime,this.pol,this.sport,this.disciplina,this.nacionalnost).subscribe(response=>{
               if(response['message']=='sportista dodat'){
                 this.zemljaServis.inkrementirajBrojSportista(this.nacionalnost).subscribe(res=>{
                   if(res['poruka']=='ok'){
                     alert('sportista je dodat');
                     this.imePrezime=null;this.sport=null;this.disciplina=null;this.pol=null;
                   }
                 })
               }
             })
           }
         })
       }
     })
   }
 }

 //------------------------------------------------ekipni sportovi-----------------
 naziviEkipnihSportova:string[];

 imePrezimeEkipa:string=null;
 imePrezimeEkipaNiz:string[]=[];
 polEkipa:string=null;
 sportEkipa:string=null;
 nazivEkipe:string=null;
 message2:string='';

 dodajEkipnogSportistu(){
   if(this.sportEkipa){
     this.sportServis.dohvatiEkipniSport(this.sportEkipa).subscribe((sport:Sport)=>{
       if(sport){
         let minmax=sport.minmax.split('/');
         if(minmax[1]){
           if(parseInt(minmax[1])<=this.imePrezimeEkipaNiz.length){
             this.message2+="Uneli ste maksimalan broj sportista za ovaj sport";
             return;
           }
           else{
             this.imePrezimeEkipaNiz.push(this.imePrezimeEkipa);
             this.imePrezimeEkipa=null;
           }
         }
         else{
           if(parseInt(minmax[0])==this.imePrezimeEkipaNiz.length){
             this.message2+="Uneli ste tacan broj sportista za ovaj sport";
             return;
           }
           else{
             this.imePrezimeEkipaNiz.push(this.imePrezimeEkipa);
             this.imePrezimeEkipa=null;
           }
         }
       }
     })
   }
   
 }

 dodajEkipu(){
   let pogresno=false;
   this.message2='';
   if(this.polEkipa=='')this.polEkipa=null;
   if(this.sportEkipa=='')this.sportEkipa=null;
   this.nazivEkipe=this.korisnik.nacionalnost;
   if(this.polEkipa==null){
     this.message2+="Pol mora biti unet. ";
     pogresno=true;
   }
   if(this.sportEkipa==null){
     this.message2+="Sport mora biti unet. ";
     pogresno=true;
   }
   if(!pogresno){
     this.takmicenjeServis.pronadjiTakmicenjeZaSportDisciplinu(this.sportEkipa,null).subscribe((takmicenje:Takmicenje)=>{
       if(takmicenje){
         this.message2+="Organizator je formirao takmicenje, vreme za prijavljivanje korisnika je isteklo"
       }
       else{
         this.sportServis.dohvatiEkipniSport(this.sportEkipa).subscribe((sport:Sport)=>{
           let minmax=sport.minmax.split('/');
           if(minmax[1]){
             if(parseInt(minmax[0])>this.imePrezimeEkipaNiz.length){
               this.message2+="Niste uneli dovoljan broj clanova ekipe";
               return;
             }
             else{
               this.ekipaServis.dodajEkipu(this.nazivEkipe,this.polEkipa,this.sportEkipa,this.imePrezimeEkipaNiz,false).subscribe(response=>{
                 if(response['message']=='ekipa dodata'){
                   for(let i=0;i<this.imePrezimeEkipaNiz.length;i++){
                     this.zemljaServis.inkrementirajBrojSportista(this.nazivEkipe).subscribe(res=>{
                       if(res['poruka']=='ok'){
                         this.sportistaServis.dodajIndividualnogSportistu(this.imePrezimeEkipaNiz[i],this.polEkipa,this.sportEkipa,null,this.nazivEkipe).subscribe(response=>{
                           if(response['message']=='sportista dodat'){
                             //alert("Ekipa dodata");
                             this.imePrezimeEkipaNiz=[];
                             this.sportEkipa='';
                             this.polEkipa='';
                           }
                         })
                       }
                     })
                   }
                 }
               })
             }
           }
         })
       }
     }) 
   } 
 }

}
