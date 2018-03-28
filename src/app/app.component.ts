import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'THANATOS';
  masterKegList: Keg[] = [
    new Keg('Giantess', 'Thanatos', 200, 6),
    new Keg('Black Butte', 'Deschutes', 200, 7.4),
    new Keg('Hefeweizen', 'Paulener', 200, 5.9),
    new Keg('Pliny the Elder', 'Russian River', 200, 8),
    new Keg('Dad Guy Ale', 'Creepy Eagles', 200, 7.3),
    new Keg('Vortex', 'Fort George', 200, 5.5),
  ];

  kegToEdit = null;

  editKeg(keg) {
    this.kegToEdit = keg;
  }



}
