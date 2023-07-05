import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelegatComponent } from './delegat/delegat.component';
import { LoginComponent } from './login/login.component';
import { OrganizatorRekordComponent } from './organizator-rekord/organizator-rekord.component';
import { OrganizatorSportComponent } from './organizator-sport/organizator-sport.component';
import { OrganizatorTakmicenjeComponent } from './organizator-takmicenje/organizator-takmicenje.component';
import { OrganizatorZahteviComponent } from './organizator-zahtevi/organizator-zahtevi.component';
import { PocetnaMedaljeComponent } from './pocetna-medalje/pocetna-medalje.component';
import { PocetnaPretragaComponent } from './pocetna-pretraga/pocetna-pretraga.component';
import { PocetnaUcesniciComponent } from './pocetna-ucesnici/pocetna-ucesnici.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { VodjaDelegacijaComponent } from './vodja-delegacija/vodja-delegacija.component';
import { VodjaSportistaComponent } from './vodja-sportista/vodja-sportista.component';
 
const routes: Routes = [
  {path:'',component:PocetnaComponent},
  {path:'pocetna',component:PocetnaComponent},
  {path:'pocetnaMedalje',component:PocetnaMedaljeComponent},
  {path:'pocetnaPretraga',component:PocetnaPretragaComponent},
  {path:'pocetnaUcesnici',component:PocetnaUcesniciComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistracijaComponent},
  {path:'promenaLozinke',component:PromenaLozinkeComponent},
  {path:'organizatorSport',component:OrganizatorSportComponent},
  {path:'organizatorTakmicenje',component:OrganizatorTakmicenjeComponent},
  {path:'organizatorRekord',component:OrganizatorRekordComponent},
  {path:'organizatorZahtevi',component:OrganizatorZahteviComponent},
  {path:'delegat',component:DelegatComponent},
  {path:'vodjaDelegacija',component:VodjaDelegacijaComponent},
  {path:'vodjaSportista',component:VodjaSportistaComponent},
  {path:'**',component:PocetnaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
