import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/classes/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent 
{

  @Input() peliculaSeleccionada : Pelicula

  constructor()
  {
    this.peliculaSeleccionada = new Pelicula("","",new Date(),0,"");
  }
  
  ngOnInit(): void 
  {
    
  }

}
