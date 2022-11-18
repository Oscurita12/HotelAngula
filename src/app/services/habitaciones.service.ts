import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  constructor(public peticion:HttpClient) { }


  consultarHabitaciones():Observable<any>{
    let uri="http://servidorhotel11.herokuapp.com/hotelesflork/habitaciones"
    return this.peticion.get(uri)
  }
}
