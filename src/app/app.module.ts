import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { KegsComponent } from './kegs/kegs.component';


@NgModule({
  declarations: [
    AppComponent,
    EditKegComponent,
    KegsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
