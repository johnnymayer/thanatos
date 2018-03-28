import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'THANATOS';


  kegToEdit = null;

  editKeg(keg) {
    this.kegToEdit = keg;
  }



}
