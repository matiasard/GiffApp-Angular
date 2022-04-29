import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  // * VARIABLE PRIVADAS
  private apiKey: string = 'zyO1ZdoMLfEgSjLNFqXLEEt7kdQBOj4X';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  // * USO DE HTTP
  constructor(private http: HttpClient) {
    //* 📝 MOSTRAR desde LOCAL STORAGE 👇
    this.resultados =
      JSON.parse(localStorage.getItem('ultimoResultado')!) || [];
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
  }

  // * METODO GET
  get historial() {
    return [...this._historial];
  }

  // * METODO/FUNCION BUSQUEDA GIFS
  busquedaGifs(busqueda: string) {
    // Quitar espacios y Conversion en minusculas
    busqueda = busqueda.trim().toLowerCase();

    if (this._historial.includes(busqueda) == false) {
      this._historial.unshift(busqueda);
      this._historial = this._historial.splice(0, 10);

      //* 📝 GUARDAR en LOCAL STORAGE 👇
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    //* 📝 HttpParams 👇
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', busqueda);

    // `https://api.giphy.com/v1/gifs/search?api_key=zyO1ZdoMLfEgSjLNFqXLEEt7kdQBOj4X&q=${busqueda}&limit=10`
    //* 📝 Peticiones HTTP 👇
    this.http
      .get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe((resp) => {
        // console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('ultimoResultado', JSON.stringify(resp.data));
      });
  }
}
