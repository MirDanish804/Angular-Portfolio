import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Project } from './project/project';
import { Footer } from './footer/footer';
import { Nav } from './nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet,Footer,Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
 
})
export class App {
  protected readonly title = signal('portfolio');
}
