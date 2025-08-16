import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {sendMessage(event: Event) {
  event.preventDefault(); // stop form from reloading the page

  console.log("Form submitted!");
  // Here you can handle sending data to an API or email service
}

}
