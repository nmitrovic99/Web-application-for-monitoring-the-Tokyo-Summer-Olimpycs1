import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MecService } from '../mec.service';
import { Korisnik } from '../models/korisnik';
import { MaxRezultat } from '../models/maxRezultat';
import { Mec } from '../models/mec';
import { Raspored } from '../models/raspored';
import { RasporedMec } from '../models/rasporedMec';
import { Rezultat } from '../models/rezultat';
import { Sportista } from '../models/sportista';
import { Takmicar } from '../models/takmicar';
import { Takmicenje } from '../models/takmicenje';
import { RasporedService } from '../raspored.service';
import { RezultatiService } from '../rezultati.service';
import { SportistiService } from '../sportisti.service';
import { TakmicenjaService } from '../takmicenja.service';
import { ZemljaService } from '../zemlja.service';

@Component({
  selector: 'app-delegat',
  templateUrl: './delegat.component.html',
  styleUrls: ['./delegat.component.css']
})
export class DelegatComponent implements OnInit {

  constructor(private takmicenjeServis: TakmicenjaService, private rasporedServis: RasporedService, private rezultatServis: RezultatiService,
    private sportistaServis: SportistiService, private zemljaServis: ZemljaService, private mecServis: MecService, private ruter: Router) { }

  ngOnInit(): void {
    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    this.takmicenjeServis.pronadjiSvaTakmicenjaDelegata(this.korisnik.ime, this.korisnik.prezime).subscribe((podaci: Takmicenje[]) => {
      this.takmicenja = podaci;
      this.popuniMec = [];
      this.streljastvo = [];
      this.skokovi = [];
      this.ostaliSportovi = [];
      for (let i = 0; i < this.takmicenja.length; i++) {
        this.rezultati[i] = [];
        this.vraceniRezultati1[i] = [];
        this.popunjenRezultatZaTakmicara[i] = [];
        this.popunjenRezultat[i] = [];

        this.rezultatServis.pronadjiRezultateZaSportDisciplinu(this.takmicenja[i].sport, this.takmicenja[i].disciplina, this.takmicenja[i].pol).subscribe((results: Rezultat[]) => {
          this.rezultati[i] = results;
          if (~~(this.rezultati[i].length / this.takmicenja[i].takmicari.length) < parseInt(this.takmicenja[i].brojPokusaja)) {
            this.popuniRezultat[i] = true;
            this.kolo[i] = ~~(this.rezultati[i].length / this.takmicenja[i].takmicari.length) + 1;
          }
          if (~~(this.rezultati[i].length / this.takmicenja[i].takmicari.length) == parseInt(this.takmicenja[i].brojPokusaja)) {
            this.kolo[i] = ~~(this.rezultati[i].length / this.takmicenja[i].takmicari.length);
          }

          for (let j = 1; j <= this.kolo[i]; j++) {
            this.vraceniRezultati1[i][j - 1] = [];
            this.rezultatServis.pronadjiNajveceRezultate(this.takmicenja[i].sport, this.takmicenja[i].disciplina, this.takmicenja[i].pol, j).subscribe((rezul: Rezultat[]) => {
              this.vraceniRezultati1[i][j - 1] = rezul;
              this.popunjenRezultatZaTakmicara[i] = [];
              for (let q = 0; q < rezul.length; q++) {
                this.popunjenRezultatZaTakmicara[i][q] = true;
              }
            })
          }
        })
        if (this.takmicenja[i].sport == "streljastvo") {
          this.streljastvo[i] = true;
        }
        else if (this.takmicenja[i].disciplina == "skok u dalj" || this.takmicenja[i].disciplina == "skok u vis" || this.takmicenja[i].disciplina == "troskok"
          || this.takmicenja[i].disciplina == "skok s motkom" || this.takmicenja[i].disciplina == "bacanje kugle" || this.takmicenja[i].disciplina == "bacanje diska"
          || this.takmicenja[i].disciplina == "bacanje kladiva" || this.takmicenja[i].disciplina == "bacanje koplja") {
          this.skokovi[i] = true;
        }
        else {
          this.ostaliSportovi[i] = true;
        }
        if (this.takmicenja[i].sport == "tenis") {
          this.popuniMec[i] = true;
          this.vraceniMecevi = [];
          this.fazeTakmicenja = [];
          this.takmicariPomocni = [];

          var s = 0;
          if (this.takmicenja[i].takmicari.length == 16) {
            s += 8;
            for (let j = 0; j < 8; j++) {
              this.fazeTakmicenja.push("osmina finala");
              this.paroviTakmicenja.push((j + 1));
              this.brojParova.push(s);
            }
          }
          if (this.takmicenja[i].takmicari.length >= 8) {
            s += 4;
            for (let j = 0; j < 4; j++) {
              this.fazeTakmicenja.push("cetvrtina finala");
              this.paroviTakmicenja.push((j + 1));
              this.brojParova.push(s);
            }
          }
          if (this.takmicenja[i].takmicari.length >= 4) {
            s += 2;
            for (let j = 0; j < 2; j++) {
              this.fazeTakmicenja.push("polufinale");
              this.paroviTakmicenja.push((j + 1));
              this.brojParova.push(s)
            }
            this.fazeTakmicenja.push("3. mesto");
            this.brojParova.push(++s);
            this.fazeTakmicenja.push("finale");
            this.brojParova.push(++s);
            this.paroviTakmicenja.push(1);
            this.paroviTakmicenja.push(1);
          }
          this.slFaza = true;
          for (let j = 0; j < this.fazeTakmicenja.length; j++) {
            this.mecServis.dohvatiSveMeceve(this.takmicenja[i].sport, this.takmicenja[i].disciplina, this.fazeTakmicenja[j], this.paroviTakmicenja[j]).subscribe((mec: Mec) => {
              if (mec) {
                this.vraceniMecevi[j] = mec;
                if (mec.rez == "" || mec.faza == "3. mesto") {
                  this.slFaza = false;
                }
                if (j == this.brojParova[this.brojParova.length - 1] - 1) {
                  this.krajMeca = true;
                }
              }
              else {
                if (j != 0) {
                  this.sledecaFaza = this.slFaza;
                }
                else {
                  this.sledecaFaza = false;
                }
              }
            })
          }

        }
      }
    })


  }

  korisnik: Korisnik;

  takmicenja: Takmicenje[] = [];
  takmicenjaSaRasporedom: Takmicenje[] = [];

  rezultati: Rezultat[][] = [];
  popunjenRezultat: string[][] = [];
  kolo: number[] = [];

  popuniRezultat: boolean[] = [];
  popuniMec: boolean[] = [];

  vraceniRezultati1: Rezultat[][][] = [];
  vraceniRezultati2: Rezultat[][] = [];
  vraceniRezultati3: Rezultat[][] = [];

  vraceniMecevi: Mec[] = [];

  raspored: boolean;
  rasporedMec: boolean;

  sport: string;
  disciplina: string;
  pol: string;
  datumPocetka: string;
  datumKraja: string;
  lokacija: string;
  takmicari: Takmicar[] = [];
  datumVreme: string;

  datPoc: Date;
  datKraj: Date;
  datumVremeDate: Date;

  message: string;
  message1: string;

  satnice: Raspored[] = [];

  odjaviSe() {
    localStorage.clear();
    this.ruter.navigate(['']);
  }

//-------------------------------------raspored za individualne sportove

  dodajRaspored(takmicenje) {
    this.rasporedMec = false;
    this.message = '';
    this.sport = takmicenje.sport;
    this.disciplina = takmicenje.disciplina;
    this.pol = takmicenje.pol;
    this.datumPocetka = takmicenje.datumPocetka;
    this.datumKraja = takmicenje.datumKraja;
    this.lokacija = takmicenje.lokacija;
    this.takmicari = takmicenje.takmicari;
    this.rasporedServis.dohvatiSatnicuZaSportDisciplinuPol(this.sport, this.disciplina, this.pol).subscribe((satnica: Raspored) => {
      if (satnica) {
        this.message1 = 'Satnica za ovaj sport i disciplinu je vec uneta';
        return;
      }
      else {
        this.message1 = '';
        this.raspored = true;
        this.rasporedServis.dohvatiSveSatniceZaLokaciju(this.lokacija).subscribe((podaci: Raspored[]) => {
          this.satnice = podaci;
        })
      }
    })

  }

  dodaj() {

    if (this.datumPocetka && this.datumKraja) {
      this.datPoc = new Date(this.datumPocetka);
      this.datKraj = new Date(this.datumKraja);
    }
    if (this.datumVreme) {
      this.datumVremeDate = new Date(this.datumVreme);
    }
    else {
      this.message = "Morate uneti datum i vreme";
      return;
    }
    if (this.datumVremeDate >= this.datPoc && this.datumVremeDate <= this.datKraj) {
      this.message = '';
      for (let i = 0; i < this.satnice.length; i++) {
        let vreme = new Date(this.satnice[i].datumVreme);
        if (vreme.getTime() === this.datumVremeDate.getTime()) {
          this.message = "Zauzet je termin na trazenoj lokaciji";
          return;
        }
      }
      this.rasporedServis.dohvatiSatnicuZaSportDisciplinuPol(this.sport, this.disciplina, this.pol).subscribe((satnica: Raspored) => {
        if (satnica) {
          this.message = 'Satnica za ovaj sport i disciplinu je vec uneta';
          return;
        }
        else {
          this.rasporedServis.dodajSatnicu(this.sport, this.disciplina, this.pol, this.lokacija, this.datumVreme).subscribe(response => {
            if (response['message'] = 'satnica dodata') {
              alert('satnica je dodata u raspored');
            }
          })
        }
      })
    }
    else {
      this.message = "Datum mora biti u opsegu datuma pocetka i kraja takmicenja";
      return;
    }
  }

//-----------------------raspored meceva

  dodajRasporedMeceva(takmicenje) {
    this.raspored = false;
    if (takmicenje.sport == "tenis") {    // || takmicenje.vrsta=="ekipni"
      this.message = '';
      this.sport = takmicenje.sport;
      this.disciplina = takmicenje.disciplina;
      this.pol = takmicenje.pol;
      this.datumPocetka = takmicenje.datumPocetka;
      this.datumKraja = takmicenje.datumKraja;
      this.lokacija = takmicenje.lokacija;
      this.takmicari = takmicenje.takmicari;
      this.message1 = '';
      this.rasporedMec = true;

      for (let i = 0; i < this.takmicari.length; i++) {
        this.rasporedServis.dohvatiRasporedMecaZaFazu(this.sport, this.disciplina, this.fazeTakmicenja[i], this.paroviTakmicenja[i]).subscribe((raspored: RasporedMec) => {
          if (raspored) {
            this.postojiRasporedMeca[i] = raspored;
          }
        })
      }
    }
  }

  zreb1: Takmicar[] = [];
  zreb2: Takmicar[] = [];

  randomElementNiza(niz) {
    return Math.floor(Math.random() * niz.length);
  }

  takmicariPomocni: Takmicar[] = [];
  fazeTakmicenja: string[] = [];
  paroviTakmicenja: number[] = [];
  brojParova: number[] = [];
  datumVremeMeca: string[] = [];
  terenMeca: string[] = [];
  postojiRasporedMeca: RasporedMec[] = [];


  algoritamTenis() {
    this.zreb2 = [];
    this.zreb1 = [];
    for (let i = 0; i < this.takmicari.length; i++) {
      this.takmicariPomocni.push(this.takmicari[i]);
    }
    this.takmicariPomocni.sort(() => Math.random() - Math.random()).slice(0, this.takmicari.length)
    for (var i = 0; i < this.takmicari.length; i++) {
      //var izabranElem:Takmicar=takmicariPomocni.slice(this.randomElementNiza(takmicariPomocni),1)[0];
      if (this.takmicariPomocni[i]) {
        if ((parseInt(this.takmicariPomocni[i].nosilac) % 2) == 0) {
          this.zreb1.push(this.takmicariPomocni[i]);
        }
        else {
          this.zreb2.push(this.takmicariPomocni[i]);
        }
      }
    }
    this.takmicariPomocni = [];
    for (let i = 0; i < this.zreb1.length; i++) {
      this.takmicariPomocni.push(this.zreb1[i]);
    }
    for (let i = 0; i < this.zreb2.length; i++) {
      this.takmicariPomocni.push(this.zreb2[i]);
    }
    for (let i = 0; i < this.zreb1.length; i++) {
      this.mecServis.dodajMec(this.sport, this.disciplina, "A:B", this.takmicariPomocni[2 * i].imePrezime, this.takmicariPomocni[2 * i + 1].imePrezime,
        this.takmicariPomocni[2 * i].nosilac, this.takmicariPomocni[2 * i + 1].nosilac, this.pol, this.fazeTakmicenja[i], this.paroviTakmicenja[i], "").subscribe(response => {
          if (response['message'] = 'mec dodat') {
            //alert('mec je dodat u bazu');
          }
        })
    }
    for (let j = 0; j < this.fazeTakmicenja.length; j++) {
      if (this.takmicenja[i]) {
        this.mecServis.dohvatiSveMeceve(this.takmicenja[i].sport, this.takmicenja[i].disciplina, this.fazeTakmicenja[j], this.paroviTakmicenja[j]).subscribe((mec: Mec) => {
          if (mec) {
            this.vraceniMecevi[j] = mec;
          }
        })
      }
    }
  }

  algoritamMecevi() {
    this.zreb2 = [];
    this.zreb1 = [];
    for (let i = 0; i < this.takmicari.length; i++) {
      this.takmicariPomocni.push(this.takmicari[i]);
    }
    this.takmicariPomocni.sort(() => Math.random() - Math.random()).slice(0, this.takmicari.length)
    for (var i = 0; i < this.takmicari.length; i++) {
      if (this.takmicariPomocni[i]) {
        if ((i % 2) == 0) {
          this.zreb1.push(this.takmicariPomocni[i]);
        }
        else {
          this.zreb2.push(this.takmicariPomocni[i]);
        }
      }
    }
  }

  dodajRasporedMeca(index) {
    if (this.datumPocetka && this.datumKraja) {
      this.datPoc = new Date(this.datumPocetka);
      this.datKraj = new Date(this.datumKraja);
    }
    if (this.datumVremeMeca[index]) {
      this.datumVremeDate = new Date(this.datumVremeMeca[index]);
    }
    else {
      this.message = "Morate uneti datum i vreme";
      return;
    }
    if (this.datumVremeDate < this.datPoc || this.datumVremeDate > this.datKraj) {
      this.message = "Vreme nije u okviru opsega trajanja takmicenja";
      return;
    }
    this.rasporedServis.dohvatiRasporedMecaZaTeren(this.terenMeca[index], this.datumVremeMeca[index]).subscribe((raspored: RasporedMec) => {
      if (raspored) {
        this.message = "Ovaj teren je zauzet za trazeno vreme";
        return;
      }
      else {
        this.rasporedServis.dodajRasporedMeca(this.sport, this.disciplina, this.pol, this.lokacija, this.fazeTakmicenja[index],
          this.paroviTakmicenja[index], this.terenMeca[index], this.datumVremeMeca[index]).subscribe(response => {
            if (response['message'] = 'satnica dodata') {
              this.message = '';
              for (let i = 0; i < this.takmicari.length; i++) {
                this.rasporedServis.dohvatiRasporedMecaZaFazu(this.sport, this.disciplina, this.fazeTakmicenja[i], this.paroviTakmicenja[i]).subscribe((raspored: RasporedMec) => {
                  if (raspored) {
                    this.postojiRasporedMeca[i] = raspored;
                  }
                })
              }
            }
          })
      }
    })

  }


  zatvori() {
    this.sport = null; this.disciplina = null; this.pol = null;
    this.datumPocetka = null; this.datumKraja = null; this.lokacija = null;
    this.datumVreme = null;
    this.raspored = false;
  }

  zatvoriRasporedMeca() {
    this.sport = null; this.disciplina = null; this.pol = null;
    this.datumPocetka = null; this.datumKraja = null; this.lokacija = null;
    this.datumVremeMeca = []; this.fazeTakmicenja = []; this.paroviTakmicenja = [];
    this.rasporedMec = false;
  }

  //-----------------------------------rezultat za individualne sportove

  popunjenRezultatZaTakmicara: boolean[][] = [];

  dodajRezultat(i, t, k) {
    this.popunjenRezultatZaTakmicara[i][k] = true;
    this.rasporedServis.dohvatiSatnicuZaSportDisciplinuPol(this.takmicenja[i].sport, this.takmicenja[i].disciplina, this.takmicenja[i].pol).subscribe((rasp: Raspored) => {
      if (rasp) {
        this.rezultatServis.dodajRezultat(this.takmicenja[i].sport, this.takmicenja[i].disciplina, this.kolo[i], this.takmicenja[i].format,
          t.imePrezime, this.popunjenRezultat[i][k], this.takmicenja[i].pol).subscribe(response => {
            if (response['message'] == 'rezultat dodat') {
              this.rezultatServis.pronadjiNajveceRezultate(this.takmicenja[i].sport, this.takmicenja[i].disciplina, this.takmicenja[i].pol, this.kolo[i]).subscribe((rezul: Rezultat[]) => {
                this.vraceniRezultati1[i][this.kolo[i] - 1] = rezul;
                if (rezul.length == this.takmicenja[i].takmicari.length) {
                  if (this.kolo[i] == parseInt(this.takmicenja[i].brojPokusaja)) {
                    this.popuniRezultat[i] = false;
                  }
                  else {
                    this.kolo[i]++;
                    this.vraceniRezultati1[i][this.kolo[i] - 1] = [];
                    this.popunjenRezultat[i] = [];
                    this.popunjenRezultatZaTakmicara[i] = [];
                  }
                }

              })
            }
          })
      }
      else {
        this.popunjenRezultat[i][k] = "";
        this.popunjenRezultatZaTakmicara[i][k] = false;
        alert("Satnica za ovaj sport i disciplinu nije unet");
      }
    })

  }

  stringUBroj(str: string) {
    var p = str.split(':'), s = 0, m = 1;
    while (p.length > 0) {
      s = s + m * parseFloat(p.pop());
      m = m * 60;
    }
    return s;
  }

  stringUBrojSkokovi(str: string) {
    var p = str.split(',');
    return 100 * parseInt(p[0]) + parseInt(p[1]);
  }

  maxRez: Rezultat[] = [];

  pozicija: number[] = [];
  dodatniKrug: boolean[] = [];
  trenutniRez: boolean[] = [];



  index1: number;
  streljastvo: boolean[] = [];
  skokovi: boolean[] = [];
  ostaliSportovi: boolean[] = [];
  s: number = 0;
  


  zavrsenoPoruka: string[] = [];
  prikaziNajboljeRezultate(index, sport, disciplina, takmicari) {
    this.index1 = index;
    this.maxRez = [];
    this.pozicija = [];
    this.trenutniRez = [];
    this.trenutniRez[index] = true;

    for (let i = 0; i < this.takmicenja[index].takmicari.length; i++) {
      this.rezultatServis.pronadjiMaxRezultat(sport, disciplina, this.takmicenja[index].pol, takmicari[i].imePrezime).subscribe((max: Rezultat[]) => {
        //this.maxRez[i]=max.sort((a,b)=>this.stringUBroj(a.rez)-this.stringUBroj(b.rez))[0];

        this.maxRez.push(max.sort((a, b) => this.stringUBroj(a.rez) - this.stringUBroj(b.rez))[0]);

        if (this.takmicenja[index].zavrseno) {
          this.zavrsenoPoruka[index] = 'Takmicenje je zavrseno';
          this.dodatniKrug[index] = false;
          this.rezultatServis.pronadjiAzuriranePozicije(sport, disciplina, this.takmicenja[index].pol, this.takmicenja[index].takmicari[i].imePrezime).subscribe((rez: MaxRezultat) => {
            if (rez) {
              this.pozicija.push(rez.pozicija);
            }
          })

        }
        else {
          this.zavrsenoPoruka[index] = '';
          for (let m = 0; m < this.maxRez.length; m++) {
            this.pozicija[m] = 1;
          }
          for (let m = 0; m < this.maxRez.length; m++) {
            for (let n = 0; n < this.maxRez.length; n++) {
              if (m !== n) {
                if (this.maxRez[m] && this.maxRez[n] && this.stringUBroj(this.maxRez[m].rez) < this.stringUBroj(this.maxRez[n].rez)) {
                  this.pozicija[n]++;
                }
              }
              if (i == (this.takmicenja[index].takmicari.length - 1) && m == (this.takmicenja[index].takmicari.length - 1) && n == (this.takmicenja[index].takmicari.length - 1)) {
                let s = 0;
                for (let k = 0; k < this.takmicenja[index].takmicari.length; k++) {
                  if (this.maxRez[k]) {
                    this.rezultatServis.dodajMaxRezultat(sport, disciplina, this.takmicenja[index].pol, this.maxRez[k].format, this.maxRez[k].imePrezime, this.maxRez[k].rez, this.pozicija[k]).subscribe(response => {
                      if (response['message'] == 'rezultat dodat') {
                        s++;
                        if (s == this.takmicenja[index].takmicari.length) {
                          alert('dodato je' + s);
                        }

                      }
                    })
                  }
                }
              }
            }
          }
        }
      })
    }
  }

  duplikatRezultati: MaxRezultat[] = [];
  zavrsiTak: boolean[] = [];
  zavrsiDodatniKrug(index) {
    var distElem = [];
    this.dodatniKrug = [];
    this.duplikatRezultati = [];
    this.poljaZaDupleRezultate = [];
    this.zavrsiTak = [];
    distElem = this.pozicija.filter((v, i, a) => a.indexOf(v) === i);
    for (let j = 0; j < distElem.length; j++) {
      var indices = [];
      var idx = this.pozicija.indexOf(distElem[j]);
      while (idx != -1) {
        indices.push(idx);
        idx = this.pozicija.indexOf(distElem[j], idx + 1);
      }
      if (indices.length > 1) {
        this.rezultatServis.dohvatiRezultatePoPoziciji(this.takmicenja[index].sport, this.takmicenja[index].disciplina, this.takmicenja[index].pol, distElem[j]).subscribe((rezul: MaxRezultat[]) => {
          for (let i = 0; i < rezul.length; i++) {
            this.duplikatRezultati.push(rezul[i]);
          }
        });
        this.dodatniKrug[index] = true;
      }
    }
    this.zavrsiTak[index] = true;
  }

  poljaZaDupleRezultate: string[] = [];
  dodajPozicije(index) {
    var distElem = [];
    distElem = this.pozicija.filter((v, i, a) => a.indexOf(v) === i);
    var k = 0;
    for (let j = 0; j < distElem.length; j++) {
      var indices = [];
      var idx = this.pozicija.indexOf(distElem[j]);
      while (idx != -1) {
        indices.push(idx);
        idx = this.pozicija.indexOf(distElem[j], idx + 1);
      }

      if (indices.length > 1) {
        for (let m = 0; m < indices.length; m++) {
          for (let n = 0; n < indices.length; n++) {
            let k1 = m + k; let k2 = n + k;
            if (this.streljastvo[index] || this.skokovi[index]) {
              if (this.stringUBroj(this.poljaZaDupleRezultate[k1]) > this.stringUBroj(this.poljaZaDupleRezultate[k2])) {
                this.rezultatServis.inkrementirajPoziciju(this.takmicenja[index].sport, this.takmicenja[index].disciplina, this.takmicenja[index].pol, this.duplikatRezultati[k2].imePrezime).subscribe(res => {
                  if (res['poruka'] == 'ok') {
                    alert('ok');
                  }
                })
              }
            }
            else {
              if (this.stringUBroj(this.poljaZaDupleRezultate[k1]) < this.stringUBroj(this.poljaZaDupleRezultate[k2])) {
                this.rezultatServis.inkrementirajPoziciju(this.takmicenja[index].sport, this.takmicenja[index].disciplina, this.takmicenja[index].pol, this.duplikatRezultati[k2].imePrezime).subscribe(res => {
                  if (res['poruka'] == 'ok') {
                    alert('ok');
                  }
                })
              }
            }
          }
        }
        k = k + indices.length;
        if (k == this.poljaZaDupleRezultate.length) {
          this.pozicija = [];
          for (let i = 0; i < this.maxRez.length; i++) {
            this.rezultatServis.pronadjiAzuriranePozicije(this.takmicenja[index].sport, this.takmicenja[index].disciplina, this.takmicenja[index].pol, this.maxRez[i].imePrezime).subscribe((podatak: MaxRezultat) => {
              if (podatak) {
                this.pozicija[i] = podatak.pozicija;
              }
            })
          }
        }
      }
    }
  }

  zavrsiTakmicenje(index) {

    this.rezultatServis.dohvatiRezultatePoPoziciji(this.takmicenja[index].sport, this.takmicenja[index].disciplina, this.takmicenja[index].pol, 1).subscribe((resul: Rezultat[]) => {
      if (resul[0]) {
        this.sportistaServis.dohvatiZemljuZaSportistu(resul[0].imePrezime).subscribe((sportista: Sportista) => {
          if (sportista) {
            this.zemljaServis.inkrementirajBrojZlata(sportista.nacionalnost).subscribe(res => {
              if (res['poruka'] == 'ok') {
                this.sportistaServis.osvojioMedalju(sportista.imePrezime).subscribe(res => {
                  if (res['poruka'] == 'ok') {
                    alert('Zlatna medalja:' + sportista.nacionalnost);
                  }
                })
              }
            })
          }
        })
      }
    })
    this.rezultatServis.dohvatiRezultatePoPoziciji(this.takmicenja[index].sport, this.takmicenja[index].disciplina, this.takmicenja[index].pol, 2).subscribe((resul: Rezultat[]) => {
      if (resul[0]) {
        this.sportistaServis.dohvatiZemljuZaSportistu(resul[0].imePrezime).subscribe((sportista: Sportista) => {
          if (sportista) {
            this.zemljaServis.inkrementirajBrojSrebra(sportista.nacionalnost).subscribe(res => {
              if (res['poruka'] == 'ok') {
                this.sportistaServis.osvojioMedalju(sportista.imePrezime).subscribe(res => {
                  if (res['poruka'] == 'ok') {
                    alert('Srebrna medalja:' + sportista.nacionalnost);
                  }
                })
              }
            })
          }
        })
      }
    })
    this.rezultatServis.dohvatiRezultatePoPoziciji(this.takmicenja[index].sport, this.takmicenja[index].disciplina, this.takmicenja[index].pol, 3).subscribe((resul: Rezultat[]) => {
      if (resul[0]) {
        this.sportistaServis.dohvatiZemljuZaSportistu(resul[0].imePrezime).subscribe((sportista: Sportista) => {
          if (sportista) {
            this.zemljaServis.inkrementirajBrojBronzi(sportista.nacionalnost).subscribe(res => {
              if (res['poruka'] == 'ok') {
                this.sportistaServis.osvojioMedalju(sportista.imePrezime).subscribe(res => {
                  if (res['poruka'] == 'ok') {
                    alert('Bronzana medalja:' + sportista.nacionalnost);
                  }
                })
              }
            })
          }
        })
      }
    })
    this.dodatniKrug[index] = false;
    this.takmicenjeServis.zavrsenoTakmicenje(this.takmicenja[index].sport, this.takmicenja[index].disciplina, this.takmicenja[index].pol).subscribe(res => {
      if (res['poruka'] == 'ok') {
        alert('Takmicenje je zavrseno');
      }
    })

  }

  //--------------------------------------rezultat za tenis(i trebalo bi tu da budu ostali mecevi)
  popunjenRezMeca: string[] = [];
  sledecaFaza: boolean;
  slFaza: boolean;
  dodajRezultatMeca(index, k) {
    this.rasporedServis.dohvatiRasporedMecaZaFazu(this.takmicenja[index].sport, this.takmicenja[index].disciplina, this.fazeTakmicenja[k], this.paroviTakmicenja[k]).subscribe((rasp: RasporedMec) => {
      if (rasp) {
        this.mecServis.dodajRezultatMeca(this.takmicenja[index].sport, this.takmicenja[index].disciplina, this.takmicenja[index].pol, this.fazeTakmicenja[k],
          this.paroviTakmicenja[k], this.popunjenRezMeca[k]).subscribe(res => {
            if (res['poruka'] == 'ok') {
              this.slFaza = true;
              for (let j = 0; j < this.brojParova[k]; j++) {
                this.mecServis.dohvatiSveMeceve(this.takmicenja[index].sport, this.takmicenja[index].disciplina, this.fazeTakmicenja[j], this.paroviTakmicenja[j]).subscribe((mec: Mec) => {
                  if (mec) {
                    this.vraceniMecevi[j] = mec;
                    if (mec.rez == "" || mec.faza == "3. mesto") {
                      this.slFaza = false;
                    }
                    if (j == this.brojParova[k] - 1) {
                      this.sledecaFaza = this.slFaza;
                    }

                  }
                })
              }
            }
          })
      }
      else {
        this.popunjenRezMeca[k] = "";
        alert("Satnica i broj terena nije unet za ovu fazu i takmicarski par");
      }
    })

  }

  dohvatiRezultateZaSledecuFazu(i) {
    this.slFaza = true;
    for (let j = 0; j < this.fazeTakmicenja.length; j++) {
      this.mecServis.dohvatiSveMeceve(this.takmicenja[i].sport, this.takmicenja[i].disciplina, this.fazeTakmicenja[j], this.paroviTakmicenja[j]).subscribe((mec: Mec) => {
        if (mec) {
          this.vraceniMecevi[j] = mec;
          if (mec.rez == "" || mec.faza == "3. mesto") {
            this.slFaza = false;
          }
          if (j == this.brojParova[this.brojParova.length - 1] - 1) {
            this.krajMeca = true;
          }
        }
        else {
          if (j != 0) {
            this.sledecaFaza = this.slFaza;
          }
          else {
            this.sledecaFaza = false;
          }
        }
      })
    }
  }

  krajMeca: boolean;
  zavrsiFazu(index) {
    let m = this.vraceniMecevi.length;
    let i = 0;
    while (this.fazeTakmicenja[i] != this.fazeTakmicenja[m - 1]) {
      i++;
    }
    let n = i;
    let b = this.vraceniMecevi.length;
    if (this.fazeTakmicenja[m] == "3. mesto") {
      let rez1: string[] = this.vraceniMecevi[n].rez.split(':');
      let rez2: string[] = this.vraceniMecevi[n + 1].rez.split(':');
      let imePrezimeFinale1: string; let nosilacFinale1: number;
      let imePrezimeFinale2: string; let nosilacFinale2: number;
      let imePrezime1: string; let nosilac1: number;
      let imePrezime2: string; let nosilac2: number;
      if (parseInt(rez1[0]) > parseInt(rez1[1])) {
        imePrezimeFinale1 = this.vraceniMecevi[n].imePrezimeTakmicara1;
        nosilacFinale1 = this.vraceniMecevi[n].nosilac1;
        imePrezime1 = this.vraceniMecevi[n].imePrezimeTakmicara2;
        nosilac1 = this.vraceniMecevi[n].nosilac2;
      }
      else {
        imePrezimeFinale1 = this.vraceniMecevi[n].imePrezimeTakmicara2;
        nosilacFinale1 = this.vraceniMecevi[n].nosilac2;
        imePrezime1 = this.vraceniMecevi[n].imePrezimeTakmicara1;
        nosilac1 = this.vraceniMecevi[n].nosilac1;
      }
      if (parseInt(rez2[0]) > parseInt(rez2[1])) {
        imePrezimeFinale2 = this.vraceniMecevi[n + 1].imePrezimeTakmicara1;
        nosilacFinale2 = this.vraceniMecevi[n + 1].nosilac1;
        imePrezime2 = this.vraceniMecevi[n + 1].imePrezimeTakmicara2;
        nosilac2 = this.vraceniMecevi[n + 1].nosilac2;
      }
      else {
        imePrezimeFinale2 = this.vraceniMecevi[n + 1].imePrezimeTakmicara2;
        nosilacFinale2 = this.vraceniMecevi[n + 1].nosilac2;
        imePrezime2 = this.vraceniMecevi[n + 1].imePrezimeTakmicara1;
        nosilac2 = this.vraceniMecevi[n + 1].nosilac1;
      }
      this.mecServis.dodajMec(this.takmicenja[index].sport, this.takmicenja[index].disciplina, this.takmicenja[index].format,
        imePrezime1, imePrezime2, nosilac1, nosilac2, this.takmicenja[index].pol, this.fazeTakmicenja[m], this.paroviTakmicenja[m], "").subscribe(res => {
          if (res['message'] == 'mec dodat') {
            //alert("mec je dodat");
            this.dohvatiRezultateZaSledecuFazu(index);
          }
        });
      this.mecServis.dodajMec(this.takmicenja[index].sport, this.takmicenja[index].disciplina, this.takmicenja[index].format,
        imePrezimeFinale1, imePrezimeFinale2, nosilacFinale1, nosilacFinale2, this.takmicenja[index].pol, this.fazeTakmicenja[m + 1], this.paroviTakmicenja[m + 1], "").subscribe(res => {
          if (res['message'] == 'mec dodat') {
            //alert("mec je dodat");
            this.dohvatiRezultateZaSledecuFazu(index);
            this.krajMeca = true;
          }
        });
    }
    else {
      while (this.fazeTakmicenja[m] == this.fazeTakmicenja[b]) {
        let rez1: string[] = this.vraceniMecevi[n].rez.split(':');
        let rez2: string[] = this.vraceniMecevi[n + 1].rez.split(':');
        let imePrezime1: string;
        let nosilac1: number;
        let imePrezime2: string;
        let nosilac2: number;
        if (parseInt(rez1[0]) > parseInt(rez1[1])) {
          imePrezime1 = this.vraceniMecevi[n].imePrezimeTakmicara1;
          nosilac1 = this.vraceniMecevi[n].nosilac1;
        } 
        else {
          imePrezime1 = this.vraceniMecevi[n].imePrezimeTakmicara2;
          nosilac1 = this.vraceniMecevi[n].nosilac2;
        }
        if (parseInt(rez2[0]) > parseInt(rez2[1])) {
          imePrezime2 = this.vraceniMecevi[n + 1].imePrezimeTakmicara1;
          nosilac2 = this.vraceniMecevi[n + 1].nosilac1;
        }
        else {
          imePrezime2 = this.vraceniMecevi[n + 1].imePrezimeTakmicara2;
          nosilac2 = this.vraceniMecevi[n + 1].nosilac2;
        }
        m = m + 1;
        n = n + 2;
        this.mecServis.dodajMec(this.takmicenja[index].sport, this.takmicenja[index].disciplina, this.takmicenja[index].format,
          imePrezime1, imePrezime2, nosilac1, nosilac2, this.takmicenja[index].pol, this.fazeTakmicenja[m - 1], this.paroviTakmicenja[m - 1], "").subscribe(res => {
            if (res['message'] == 'mec dodat') {
              this.dohvatiRezultateZaSledecuFazu(index);
              //alert("mec je dodat");
            }
          })
      }
    }
  }

  zavrsiTakmicenjeEkipno(index) {
    this.mecServis.dohvatiMecZaFazu(this.takmicenja[index].sport, this.takmicenja[index].disciplina, this.takmicenja[index].pol, "3. mesto").subscribe((mec: Mec) => {
      if (mec) {
        let rez: string[] = mec.rez.split(':');
        if (parseInt(rez[0]) > parseInt(rez[1])) {
          this.sportistaServis.dohvatiZemljuZaSportistu(mec.imePrezimeTakmicara1).subscribe((sportista: Sportista) => {
            if (sportista) {
              this.zemljaServis.inkrementirajBrojBronzi(sportista.nacionalnost).subscribe(res => {
                if (res['poruka'] == 'ok') {
                  this.sportistaServis.osvojioMedalju(sportista.imePrezime).subscribe(res => {
                    if (res['poruka'] == 'ok') {
                      alert('Osvojena bronzana medalja:' + sportista.nacionalnost);
                    }
                  })
                }
              })
            }
          })
        }
        else {
          this.sportistaServis.dohvatiZemljuZaSportistu(mec.imePrezimeTakmicara2).subscribe((sportista: Sportista) => {
            if (sportista) {
              this.zemljaServis.inkrementirajBrojBronzi(sportista.nacionalnost).subscribe(res => {
                if (res['poruka'] == 'ok') {
                  this.sportistaServis.osvojioMedalju(sportista.imePrezime).subscribe(res => {
                    if (res['poruka'] == 'ok') {
                      alert('Osvojena bronzana medalja:' + sportista.nacionalnost);
                    }
                  })
                }
              })
            }
          })
        }
      }
    })

    this.mecServis.dohvatiMecZaFazu(this.takmicenja[index].sport, this.takmicenja[index].disciplina, this.takmicenja[index].pol, "finale").subscribe((mec: Mec) => {
      if (mec) {
        let rez: string[] = mec.rez.split(':');
        if (parseInt(rez[0]) > parseInt(rez[1])) {
          this.sportistaServis.dohvatiZemljuZaSportistu(mec.imePrezimeTakmicara1).subscribe((sportista: Sportista) => {
            if (sportista) {
              this.zemljaServis.inkrementirajBrojZlata(sportista.nacionalnost).subscribe(res => {
                if (res['poruka'] == 'ok') {
                  this.sportistaServis.osvojioMedalju(sportista.imePrezime).subscribe(res => {
                    if (res['poruka'] == 'ok') {
                      alert('Osvojena zlatna medalja:' + sportista.nacionalnost);
                    }
                  })
                }
              })
            }
          })
          this.sportistaServis.dohvatiZemljuZaSportistu(mec.imePrezimeTakmicara2).subscribe((sportista: Sportista) => {
            if (sportista) {
              this.zemljaServis.inkrementirajBrojSrebra(sportista.nacionalnost).subscribe(res => {
                if (res['poruka'] == 'ok') {
                  this.sportistaServis.osvojioMedalju(sportista.imePrezime).subscribe(res => {
                    if (res['poruka'] == 'ok') {
                      this.krajMeca = false;
                      alert('Osvojena srebrna medalja:' + sportista.nacionalnost);
                    }
                  })
                }
              })
            }
          })
        }
        else {
          this.sportistaServis.dohvatiZemljuZaSportistu(mec.imePrezimeTakmicara2).subscribe((sportista: Sportista) => {
            if (sportista) {
              this.zemljaServis.inkrementirajBrojZlata(sportista.nacionalnost).subscribe(res => {
                if (res['poruka'] == 'ok') {
                  this.sportistaServis.osvojioMedalju(sportista.imePrezime).subscribe(res => {
                    if (res['poruka'] == 'ok') {
                      alert('Osvojena zlatna medalja:' + sportista.nacionalnost);
                    }
                  })
                }
              })
            }
          })
          this.sportistaServis.dohvatiZemljuZaSportistu(mec.imePrezimeTakmicara1).subscribe((sportista: Sportista) => {
            if (sportista) {
              this.zemljaServis.inkrementirajBrojSrebra(sportista.nacionalnost).subscribe(res => {
                if (res['poruka'] == 'ok') {
                  this.sportistaServis.osvojioMedalju(sportista.imePrezime).subscribe(res => {
                    if (res['poruka'] == 'ok') {
                      this.krajMeca = false;
                      alert('Osvojena srebrna medalja:' + sportista.nacionalnost);
                    }
                  })
                }
              })
            }
          })
        }
      }
    })
  }

  //-------------------slicne 2 metode kao za obicne rezultate
  prikaziNajboljeRezultateZaStreljastvo(index, sport, disciplina, takmicari) {
    this.index1 = index;
    this.maxRez = [];
    this.pozicija = [];
    this.trenutniRez = [];
    this.trenutniRez[index] = true;

    for (let i = 0; i < this.takmicenja[index].takmicari.length; i++) {
      this.rezultatServis.pronadjiMaxRezultat(sport, disciplina, this.takmicenja[index].pol, takmicari[i].imePrezime).subscribe((max: Rezultat[]) => {
        //this.maxRez[i]=max[0];
        //this.maxRez.push(max[0]);
        let maxR = max[0];
        //this.maxRez.push(maxR[0]);
        for (let j = 1; j < max.length; j++) {
          //this.maxRez[i].rez=JSON.stringify(parseInt(this.maxRez[i].rez)+parseInt(maxR[j].rez));
          maxR.rez = JSON.stringify(parseInt(maxR.rez) + parseInt(max[j].rez));
        }
        this.maxRez.push(maxR);

        if (this.takmicenja[index].zavrseno) {
          this.zavrsenoPoruka[index] = 'Takmicenje je zavrseno';
          this.dodatniKrug[index] = false;
          this.rezultatServis.pronadjiAzuriranePozicije(sport, disciplina, this.takmicenja[index].pol, this.takmicenja[index].takmicari[i].imePrezime).subscribe((rez: MaxRezultat) => {
            if (rez) {
              this.pozicija.push(rez.pozicija);
            }
          })

        }
        else {
          this.zavrsenoPoruka[index] = '';
          for (let m = 0; m < this.maxRez.length; m++) {
            this.pozicija[m] = 1;
          }
          for (let m = 0; m < this.takmicenja[index].takmicari.length; m++) {
            for (let n = 0; n < this.takmicenja[index].takmicari.length; n++) {
              if (m !== n) {
                if (this.maxRez[m] && this.maxRez[n] && parseFloat(this.maxRez[m].rez) > parseFloat(this.maxRez[n].rez)) {
                  this.pozicija[n]++;
                }
              }
              if (i == (this.takmicenja[index].takmicari.length - 1) && m == (this.takmicenja[index].takmicari.length - 1) && n == (this.takmicenja[index].takmicari.length - 1)) {
                let q = 0;
                //while(q==0){
                for (let k = 0; k < this.takmicenja[index].takmicari.length; k++) {
                  if (this.maxRez[k]) {
                    this.rezultatServis.pronadjiAzuriranePozicije(sport, disciplina, this.takmicenja[index].pol, this.maxRez[k].imePrezime).subscribe((rez: Rezultat) => {
                      if (!rez) {
                        this.rezultatServis.dodajMaxRezultat(sport, disciplina, this.takmicenja[index].pol, this.maxRez[k].format, this.maxRez[k].imePrezime, this.maxRez[k].rez, this.pozicija[k]).subscribe(response => {
                          if (response['message'] == 'rezultat dodat') {
                            this.s++;
                            if (this.s == this.takmicenja[index].takmicari.length) {
                              alert('dodato je' + this.s);
                              this.s = 0;
                              //q=1;
                            }

                          }
                        })
                      }
                    })
                  }
                }
                // }
              }
            }
          }
        }
      })
    }
  }

  prikaziNajboljeRezultateZaSkokove(index, sport, disciplina, takmicari) {
    this.index1 = index;
    //location.reload();
    this.maxRez = [];
    this.pozicija = [];
    this.trenutniRez = [];
    this.trenutniRez[index] = true;

    for (let i = 0; i < this.takmicenja[index].takmicari.length; i++) {
      this.rezultatServis.pronadjiMaxRezultat(sport, disciplina, this.takmicenja[index].pol, takmicari[i].imePrezime).subscribe((max: Rezultat[]) => {
        this.maxRez.push(max.sort((a, b) => this.stringUBroj(b.rez) - this.stringUBroj(a.rez))[0]);

        if (this.takmicenja[index].zavrseno) {
          this.zavrsenoPoruka[index] = 'Takmicenje je zavrseno';
          this.dodatniKrug[index] = false;
          this.rezultatServis.pronadjiAzuriranePozicije(sport, disciplina, this.takmicenja[index].pol, this.takmicenja[index].takmicari[i].imePrezime).subscribe((rez: MaxRezultat) => {
            if (rez) {
              this.pozicija.push(rez.pozicija);
            }
          })

        }
        else {
          this.zavrsenoPoruka[index] = '';
          for (let m = 0; m < this.maxRez.length; m++) {
            this.pozicija[m] = 1;
          }
          for (let m = 0; m < this.takmicenja[index].takmicari.length; m++) {
            for (let n = 0; n < this.takmicenja[index].takmicari.length; n++) {
              if (m !== n) {
                if (this.maxRez[m] && this.maxRez[n] && parseFloat(this.maxRez[m].rez) > parseFloat(this.maxRez[n].rez)) {
                  this.pozicija[n]++;
                }
              }
              if (i == (this.takmicenja[index].takmicari.length - 1) && m == (this.takmicenja[index].takmicari.length - 1) && n == (this.takmicenja[index].takmicari.length - 1)) {
                //location.reload();
                for (let k = 0; k < this.takmicenja[index].takmicari.length; k++) {
                  if (this.maxRez[k]) {
                    this.rezultatServis.pronadjiAzuriranePozicije(sport, disciplina, this.takmicenja[index].pol, this.maxRez[k].imePrezime).subscribe((rez: Rezultat) => {
                      if (!rez) {
                        this.rezultatServis.dodajMaxRezultat(sport, disciplina, this.takmicenja[index].pol, this.maxRez[k].format, this.maxRez[k].imePrezime, this.maxRez[k].rez, this.pozicija[k]).subscribe(response => {
                          if (response['message'] == 'rezultat dodat') {
                            this.s++;
                            if (this.s == this.takmicenja[index].takmicari.length) {
                              alert('dodato je' + this.s);
                              this.s = 0;
                              //q=1;
                            }
                          }
                        })
                      }
                    })
                  }
                }
              }
            }
          }
        }
      })
    }
  }

}
