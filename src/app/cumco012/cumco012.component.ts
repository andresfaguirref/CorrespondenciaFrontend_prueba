import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cumco012',
  templateUrl: './cumco012.component.html',
  styleUrls: ['./cumco012.component.css']
})
export class CUMCO012Component implements OnInit {

    text: string;
    results: any[];

    constructor() {}
    ngOnInit() {
      this.results = [
        'a','b','c'
      ]
    }
    onClickBorrarAutoComplete() {
      this.text = '';
    }

}
