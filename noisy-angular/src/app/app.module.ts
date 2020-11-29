import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { routing, AppRoutingProviders } from './app.routing';
import { HomeComponent } from './components/home.component';
import { AppComponent } from './app.component';
import { UserEditComponent} from './components/user-edit.component';
import { ArtistListComponent } from './components/artist-list.component';
import { ArtistAddComponent } from './components/artist-add.component';
import { ArtistEditComponent } from './components/artist-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserEditComponent,
    AppRoutingProviders,
    ArtistListComponent,
    ArtistAddComponent,
    ArtistEditComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
