import { Component, Input, OnInit } from '@angular/core';
import { Pelicula} from 'src/app/classes/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit
{
  peliculas : Pelicula[] = [];
  peliculaSeleccionada : Pelicula = new Pelicula("","",new Date(),0,"");

  ngOnInit(): void 
  {
    this.peliculas = Pelicula.obtenerLocalStorage();
    
    if(this.peliculas.length == 0)
    {
      this.peliculas = new Array<Pelicula>()
      let peliculaEjemplo1 = new Pelicula("peli1","amor",new Date(),10,"../../assets/b938fd78-cdfb-4830-9a54-12dfe0342622.jpeg");
      let peliculaEjemplo2 = new Pelicula("peli2","terror",new Date(),2,"../../assets/331413220_509165874757715_2222745185025936774_n.jpg");
      let peliculaEjemplo3 = new Pelicula("peli3","comedia",new Date(),53,"../../assets/76e3df7e-cb26-4eb5-ae6c-52e1f864f71e.jpeg");

      this.peliculas.push(peliculaEjemplo1);
      this.peliculas.push(peliculaEjemplo2);
      this.peliculas.push(peliculaEjemplo3); 

      peliculaEjemplo1.guardarEnLocalStorage();
      peliculaEjemplo2.guardarEnLocalStorage();
      peliculaEjemplo3.guardarEnLocalStorage();
    }
    
  }

  onPeliculaSeleccionada(pelicula: Pelicula) 
  {
    this.peliculaSeleccionada = pelicula;
  }

}
