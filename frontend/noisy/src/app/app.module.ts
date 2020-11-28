import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
//import { AppRoutingModule} from './app-routing.module';
import { routing, AppRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { UserEditComponent} from './components/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserEditComponent,
    AppRoutingProviders,
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
