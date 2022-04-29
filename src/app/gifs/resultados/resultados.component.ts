import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [],
})
export class ResultadosComponent {
  //* Inyeccion de SERVICE
  constructor(private gifsService: GifsService) {}

  //* METODO GET
  get resultados() {
    return this.gifsService.resultados;
  }
}
