import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PocetnaUcesniciComponent } from './pocetna-ucesnici/pocetna-ucesnici.component';
import { PocetnaMedaljeComponent } from './pocetna-medalje/pocetna-medalje.component';
import { PocetnaPretragaComponent } from './pocetna-pretraga/pocetna-pretraga.component';
import { OrganizatorZahteviComponent } from './organizator-zahtevi/organizator-zahtevi.component';
import { OrganizatorSportComponent } from './organizator-sport/organizator-sport.component';
import { OrganizatorTakmicenjeComponent } from './organizator-takmicenje/organizator-takmicenje.component';
import { OrganizatorRekordComponent } from './organizator-rekord/organizator-rekord.component';
import { VodjaSportistaComponent } from './vodja-sportista/vodja-sportista.component';
import { VodjaDelegacijaComponent } from './vodja-delegacija/vodja-delegacija.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DelegatComponent } from './delegat/delegat.component';
import { PocetnaChartComponent } from './pocetna-chart/pocetna-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistracijaComponent,
    PromenaLozinkeComponent,
    PocetnaComponent,
    PocetnaUcesniciComponent,
    PocetnaMedaljeComponent,
    PocetnaPretragaComponent,
    OrganizatorZahteviComponent,
    OrganizatorSportComponent,
    OrganizatorTakmicenjeComponent,
    OrganizatorRekordComponent,
    VodjaSportistaComponent,
    VodjaDelegacijaComponent,
    DelegatComponent,
    PocetnaChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
