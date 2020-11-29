import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//users
import { UserEditComponent } from './components/user-edit.component';
import { HomeComponent } from './components/home.component';
//artist
import { ArtistListComponent } from './components/artist-list.component';
import { ArtistAddComponent } from './components/artist-add.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/artist/1',
    pathMatch: 'full'
  },
  //{path: '', component: UserEditComponent},
  //{path: 'mis-datos', component: UserEditComponent},
  //{path: '**', component: UserEditComponent},
  {path: '', component: ArtistListComponent},
  {path: 'artists/:page', component: ArtistListComponent},
  {path: 'create-artists', component: ArtistAddComponent},
  {path: 'mis-datos', component: UserEditComponent},
  {path: '**', component:ArtistListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const AppRoutingProviders: any[]=[];
//export const routing: ModuleWithProviders= RouterModule.forRoot(routes);

//export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);