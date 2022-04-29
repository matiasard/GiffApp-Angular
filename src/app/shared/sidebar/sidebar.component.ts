import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  //* Constructor INYECION del SERVICE
  constructor(private gifsService: GifsService) {}

  //* Metodo Get
  get historial() {
    return this.gifsService.historial;
  }

  buscar(item: string) {
    this.gifsService.busquedaGifs(item);
  }
}
