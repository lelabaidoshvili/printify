import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  setHoverColor(event: any, color: string) {
    event.target.style.color = color;
  }
  setColor(event: any, color: string) {
    event.target.style.color = color;
  }

}
