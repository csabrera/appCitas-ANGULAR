import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listsCitas: any[] = [];

  agregarCitas(cita: any) {
    this.listsCitas.push(cita);
  }

  eliminarCitaListado(index: number) {
    this.listsCitas.splice(index, 1);
  }

}
