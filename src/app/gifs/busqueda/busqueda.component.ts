import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  // textBuscar! -> el operador ! se llama Non-null assertion operator
  @ViewChild('textBuscar') textBuscar!: ElementRef<HTMLInputElement>;

  // Metodos
  buscar() {
    // 📝 Valor de la Busqueda
    const valor = this.textBuscar.nativeElement.value;
    console.log(valor);

    // 📝 Limpiando Busqueda
    this.textBuscar.nativeElement.value = '';
  }
}
