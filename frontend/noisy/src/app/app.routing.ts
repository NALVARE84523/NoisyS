import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//users
import { UserEditComponent } from './components/user-edit.component';
import { HomeComponent } from './components/home.component';
//artist
import { ArtistListComponent } from './components/artist-list.component';

const routes: Routes = [
 
  //{path: '', component: UserEditComponent},
  //{path: 'mis-datos', component: UserEditComponent},
  //{path: '**', component: UserEditComponent},
  {path: '', component: HomeComponent},
  {path: 'artists/:page', component: ArtistListComponent},
  {path: 'mis-datos', component: UserEditComponent},
  {path: '**', component: HomeComponent},

];

export class AppRoutingModule { }

export const AppRoutingProviders: any[]=[];
export const routing: ModuleWithProviders= RouterModule.forRoot(routes);

//export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);

//export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);