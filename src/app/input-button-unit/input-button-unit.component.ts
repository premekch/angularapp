import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  title: string = '';

  constructor() { 
    this.title = 'Hello World';
  }

  ngOnInit(): void {
  }

  changeTitle(newTitle:string): void {
    this.title = newTitle;
  }

}
