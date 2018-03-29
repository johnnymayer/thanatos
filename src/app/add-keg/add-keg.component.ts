import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';


@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent {

  @Input() childKegtoAdd: boolean; 
  wantToAddKeg = null;

  addKeg() {
    this.wantToAddKeg = true;
  };

}
