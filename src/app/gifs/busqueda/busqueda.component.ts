import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  // textBuscar! -> el operador ! se llama Non-null assertion operator
  @ViewChild('textBuscar') textBuscar!: ElementRef<HTMLInputElement>;

  //* 👉 CONSTRUCTOR
  constructor(private gifsService: GifsService) {}

  //* Metodos
  buscar() {
    // 📝 Valor de la Busqueda
    const valor = this.textBuscar.nativeElement.value;

    if (valor.trim().length === 0) {
      return;
    }

    //* 📝 Hacemos uso del Service y su metodo "buscarGifs()" para enviar valor al array del Servicio
    this.gifsService.busquedaGifs(valor);

    // 📝 Limpiando Busqueda
    this.textBuscar.nativeElement.value = '';
  }
}
