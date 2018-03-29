import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-list-keg',
  templateUrl: './list-keg.component.html',
  styleUrls: ['./list-keg.component.css']
})
export class ListKegComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  selectedKeg = null;

  showKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  };


  editButtonClicked(value) {
    this.clickSender.emit(value);
  }

  @Output() sellPint = new EventEmitter();
  childSellPint(keg: Keg){
    console.log("HERE is YoUr KeG!!!" + keg.pints);
    this.sellPint.emit(keg);
  }



}
