import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EventsService {
  events = [
    {
      id: 1,
      name: 'La Paz Expone',
      locale: 'Campo Ferial Chuquiago Marka',
      date: '15/07/17',
      pricing: 'Bs. 18'
    },
    {
      id: 2,
      name: 'El Alto de Pie',
      locale: 'Campo Ferial Chuquiago Marka',
      date: '15/07/17',
      pricing: 'Bs. 18'
    }, {
      id: 3,
      name: 'Concierto de Jazz',
      locale: 'Campo Ferial Chuquiago Marka',
      date: '15/07/17',
      pricing: 'Bs. 18'
    }, {
      id: 4,
      name: 'Rap contra el racismo',
      locale: 'Campo Ferial Chuquiago Marka',
      date: '15/07/17',
      pricing: 'Bs. 18'
    }
  ]
}

