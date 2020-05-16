import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})
export class StockStatusComponent implements OnInit {

  @Input() stock: number;
  @Input() productId: number;
  @Output() stockValueChange = new EventEmitter();
  color = '';
  updatestockvalue: number;

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.stock > 10){
      this.color = 'green';
    }else {
      this.color = 'red';
    }
  }

  stockValueChanged(){
    this.stockValueChange.emit(
      {id: this.productId, updatstockvalue: this.updatestockvalue });
    this.updatestockvalue = null;
  }

  constructor() { }

 

}
