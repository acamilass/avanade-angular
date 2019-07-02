import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  interval: any;
  cont = 0;

  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.cont++;

      if(this.cont === 10) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

}
