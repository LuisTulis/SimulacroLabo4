import { Component, EventEmitter, Input, Output, OnInit  } from '@angular/core';
import { Pelicula} from 'src/app/classes/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})

export class TablaPeliculaComponent implements OnInit
{
  @Input() listaPeliculas : Pelicula[];
  @Output() eventoPeliculaSeleccionada = new EventEmitter<any>();


  peliculaSeleccionada: any;

  constructor()
  {
    this.listaPeliculas = [];
  }
  
  ngOnInit(): void 
  {
    
  }

  seleccionarPelicula(pelicula: Pelicula) 
  {
    this.eventoPeliculaSeleccionada.emit(pelicula);
  }

}
