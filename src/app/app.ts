import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  email = 'hello@101techlabs.com';

  handleEmailClick() {
    navigator.clipboard.writeText(this.email);
    window.location.href = `mailto:${this.email}`;
  }

}
