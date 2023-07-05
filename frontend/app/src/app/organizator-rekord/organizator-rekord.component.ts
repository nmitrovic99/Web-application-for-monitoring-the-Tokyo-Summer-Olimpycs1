import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rekord } from '../models/rekord';
import { RekordiService } from '../rekordi.service';

@Component({
  selector: 'app-organizator-rekord',
  templateUrl: './organizator-rekord.component.html',
  styleUrls: ['./organizator-rekord.component.css']
})
export class OrganizatorRekordComponent implements OnInit {

  constructor(private rekordServis: RekordiService, private ruter: Router) { }

  ngOnInit(): void {
    this.rekordServis.dohvatiSveRekordeZaMuskarce().subscribe((podaci: Rekord[]) => {
      this.rekordiMuskarci = podaci;
    })
    this.rekordServis.dohvatiSveRekordeZaZene().subscribe((podaci: Rekord[]) => {
      this.rekordiZene = podaci;
    })
  }

  odjaviSe() {
    localStorage.clear();
    this.ruter.navigate(['']);
  }

  rekordiMuskarci: Rekord[];
  rekordiZene: Rekord[];

}
