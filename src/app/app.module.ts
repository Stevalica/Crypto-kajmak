import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { CreateKajmakComponent } from './createKajmak/createKajmak.component';
import { ListKajmakComponent } from './listKajmak/listKajma.component';
import { MixKajmakComponent } from './mixKajmak/mixKajmak.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CreateKajmakComponent,
    ListKajmakComponent,
    MixKajmakComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'create' , component: CreateKajmakComponent},
      { path: 'list' , component: ListKajmakComponent},
      { path: 'mix', component: MixKajmakComponent},
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
