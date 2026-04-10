import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Item } from '../../item';

@Component({
  selector: 'app-project',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {

  readonly project = input.required<Item>();

}
