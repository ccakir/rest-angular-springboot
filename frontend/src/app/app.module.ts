import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTeppichComponent } from './components/teppich/create-teppich/create-teppich.component';
import { TeppichListComponent } from './components/teppich/teppich-list/teppich-list.component';
import { TeppichDetailsComponent } from './components/teppich/teppich-details/teppich-details.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { from } from 'rxjs';
import { UpdateTeppichComponent } from './components/teppich/update-teppich/update-teppich.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateTeppichComponent,
    TeppichListComponent,
    TeppichDetailsComponent,
    UserListComponent,
    UpdateTeppichComponent,    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
