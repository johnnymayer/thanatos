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
    console.log(value);
    this.clickSender.emit(value);
  }

}
