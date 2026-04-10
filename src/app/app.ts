import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Hero } from './features/hero/hero';
import { Skills } from './features/skills/skills';
import { Contact } from './features/contact/contact';
import { Projects } from './features/projects/projects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Hero, Projects, Skills, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('landing_gonalvarado');
}
