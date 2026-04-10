import { Component, signal } from '@angular/core';
import { Item } from '../../item';
import { Project } from '../project/project';

@Component({
  selector: 'app-projects',
  imports: [Project],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  protected readonly projects = signal<Item[]>([
    {
      name: 'Espacios Comunitarios API',
      description: 'API REST desarrollada para la gestión de una base de datos de Espacios Comunitarios que asisten a la población en situación de vulnerabilidad.',
      tech: ['Django', 'PostgreSQL', 'JWT'],
      github: 'https://github.com/GonAlvarado/api_espacios_comunitarios'
    },
    {
      name: 'Espacios Comunitarios App',
      description: 'Aplicación móvil para la gestión y administración de Espacios Comunitarios que brindan asistencia a la población en situación de vulnerabilidad social.',
      tech: ['Kotlin', 'Retrofit', 'Dagger Hilt', 'Google Maps'],
      github: 'https://github.com/GonAlvarado/espacios_comunitarios_app'
    },
    {
      name: 'FoodLab API',
      description: 'API desarrollada para la gestión de pedidos de comida.',
      tech: ['Java', 'Spring'],
      github: 'https://github.com/GonAlvarado/foodlab_api'
    },
    {
      name: 'Diario Digital',
      description: 'Diario digital creado en lenguaje PHP con index de acceso público y administración privada que permite iniciar sesión a los usuarios registrados.',
      tech: ['PHP', 'Ajax'],
      github: 'https://github.com/GonAlvarado/diario_digital'
    }
  ]);

}
