import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { AddKegComponent } from './add-keg/add-keg.component';
import { ListKegComponent } from './list-keg/list-keg.component';

@NgModule({
  declarations: [
    AppComponent,
    EditKegComponent,
    AddKegComponent,
    ListKegComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
