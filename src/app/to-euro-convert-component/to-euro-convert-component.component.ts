import { Component, EventEmitter, Input, OnInit, Output , OnChanges } from '@angular/core';

@Component({
  selector: 'app-to-euro-convert-component',
  templateUrl: './to-euro-convert-component.component.html',
  styleUrls: ['./to-euro-convert-component.component.css']
})
export class ToEuroConvertComponentComponent implements OnInit {
@Input() val : number;
@Output() event = new EventEmitter<number>();
  
constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(event)
  {
    {
      let amount = this.val * 3;
      this.event.emit(amount)
    }
  }
  notifParent()
  {
    let amount = this.val * 3;
    this.event.emit(amount)
  }

}
