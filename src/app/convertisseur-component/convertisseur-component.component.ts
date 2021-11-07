import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertisseur-component',
  templateUrl: './convertisseur-component.component.html',
  styleUrls: ['./convertisseur-component.component.css']
})
export class ConvertisseurComponentComponent implements OnInit {
 valInput: number;
 valOutput:number;
  constructor() { }

  ngOnInit(): void {
  }
  ChangeValue(n:number)
  {
    this.valOutput=n;
  }

}
