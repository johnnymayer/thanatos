import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';


@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent {

  @Input() childKegtoAdd: boolean;
  @Output() clickedAdd = new EventEmitter();
  wantToAddKeg = null;

  newKeg(name:string, brand:string, price:number, abv:number) {
    let newKeg: Keg = new Keg(name, brand, price, abv);
    console.log(newKeg);
    this.clickedAdd.emit(newKeg);
  }

}
