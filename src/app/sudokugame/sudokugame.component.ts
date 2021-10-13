import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sudokugame',
  templateUrl: './sudokugame.component.html',
  styleUrls: ['./sudokugame.component.scss']
})
export class SudokugameComponent implements OnInit {

  public dimension:number[];

  constructor() { 
    this.dimension = [9,9,9,9,9,9,9,9,9];
  }

  ngOnInit(): void {
    this.dimension = [9,9,9,9,9,9,9,9,9];
  }

}
