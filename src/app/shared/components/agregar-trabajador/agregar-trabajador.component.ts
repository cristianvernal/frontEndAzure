import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-trabajador',
  templateUrl: './agregar-trabajador.component.html',
  styleUrl: './agregar-trabajador.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AgregarTrabajadorComponent {

}
