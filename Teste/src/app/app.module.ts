import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthComponent } from './auth/auth.component';
import { HttpAuthService } from './auth/httpauth.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListContatoComponent} from './contato/list.contato.component';
import { NovoContatoComponent} from './contato/novo.contato.component';
import { ContatoService } from './contato/contato.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Constants } from './constants';

@NgModule({
  declarations: [
    AppComponent,
    ListContatoComponent,
    NovoContatoComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [Constants],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
