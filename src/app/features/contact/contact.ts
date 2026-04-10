import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  imports: [MatButtonModule, FontAwesomeModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  iconLinkedin = faLinkedin;
  iconGithub = faGithub;
  iconEnvelope = faEnvelope;

}
