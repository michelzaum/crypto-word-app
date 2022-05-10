import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EncryptComponent } from './components/encrypt/encrypt.component';
import { DecryptComponent } from './components/decrypt/decrypt.component';

import { FormsModule } from '@angular/forms';
import { ResultEncryptComponent } from './components/result-encrypt/result-encrypt.component';
import { ResultDecryptComponent } from './components/result-decrypt/result-decrypt.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EncryptComponent,
    DecryptComponent,
    ResultEncryptComponent,
    ResultDecryptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
