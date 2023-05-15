import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Persona{
  nombre: string;
  apellidos: string;
  empresa: string;
  telefono: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private personas: Persona[];
  private personas$: Subject<Persona[]>;

  constructor() { 
    this.personas = [];
    this.personas$ = new Subject();
  }

  agregarPersona(persona: Persona){
    this.personas.push(persona);
    this.personas$.next(this.personas)
  }

  getPersonas$(): Observable<Persona[]>{
    return this.personas$.asObservable();
  }
}
