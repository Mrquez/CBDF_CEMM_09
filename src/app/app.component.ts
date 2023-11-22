import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CBDF_EAM_09-Interpolacion';
  nombre= "Claudoio Enrique Márquez Moreno";
  edad=21;
  semestre="Quinto semestre";
  calificaciones=[8,7,10,10,8,10,8,6];
  calcularPromedio(){
    let suma=0;
    const longitudArreglo=this.calificaciones.length;
    for(let i=0; i<longitudArreglo;i++)
    suma+=this.calificaciones[i];
  return suma/this.calificaciones.length;
  }
  estadoAlumno(){
    if(this.calcularPromedio()>=6)
    return"Aprobado";
  else
  return"No Aprobado";
  }
}
