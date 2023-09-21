export class Pelicula 
{
    id : number;
    nombre : string;
    tipo : string;
    fechaEstreno : Date;
    cantPublico : number;
    fotoPortada : string;

    constructor(nombre : string, tipo : string, fechaEstreno: Date, cantPublico : number, fotoPortada: string)
    {
        this.id = this.generarId();
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantPublico = cantPublico;
        this.fotoPortada = fotoPortada;

    }

    generarId()
    {
        return 1;
    }

    public guardarEnLocalStorage()
    {
        let listaPeliculas : Array<Pelicula>;

        listaPeliculas = Pelicula.obtenerLocalStorage();

        listaPeliculas.push(this);
        
        localStorage.setItem("listaPeliculas", JSON.stringify(listaPeliculas));
    }

    public static obtenerLocalStorage()
    {
        let jsonCargado = null;
        let peliculas : string | null = localStorage.getItem("listaPeliculas");

        if(peliculas != null)
        {
            
            jsonCargado = JSON.parse(peliculas)
        }
        else
        {
            jsonCargado = Array<Pelicula>();
        }

        return jsonCargado;
    }

    static borrarStorage()
    {
        localStorage.removeItem("listaPeliculas");
    }


}
