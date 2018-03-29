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
    this.sellPint.emit(keg);
  }

  @Output() sellGrowler = new EventEmitter();
  childSellGrowler(keg: Keg){
    this.sellGrowler.emit(keg);
  }

  @Output() sellXlGrowler = new EventEmitter();
  childSellXlGrowler(keg: Keg){
    this.sellXlGrowler.emit(keg);
  }

  @Output() sellKegGrowler = new EventEmitter();
  childSellKegGrowler(keg: Keg){
    this.sellKegGrowler.emit(keg);
  }


  setWidth(input) {
    let color;
    let percent = Math.round((input / 124) * 100);
    if(input <= 10) {
      color = '#D73744';
    } else if (input > 11 && input <= 62) {
      color = '#E7B533';
    } else {
      color = '#3ED89C';
    }
    let styles = {
      'width': percent + "%",
      'background': color
    }
    return styles;
  }

  setAbvColor(input) {
    let abvColor;
    if(input >= 10) {
      abvColor = '#d39353';
    } else if(input <= 9 && input >= 7) {
      abvColor = '#754946';
    } else if(input <= 6 && input >= 3) {
      abvColor = '#d2ab8e';
    } else {
      abvColor = '#d2ab8e';
    }
    let styles = {
      'color': abvColor;
    }

    return styles;
  }

}
