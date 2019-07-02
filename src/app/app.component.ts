import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ana Camila';
  novo: string = 'oi';
  items = ['Oi', 'tudo', 'bem', 'com', 'você'];

  novoItem() {
    const text = prompt('Digite novo texto');
    this.items.push(text);
  }

  ngOnInit() {
    setTimeout(() => {
      this.title = 'Santos';
    }, 2000);
  }
}
