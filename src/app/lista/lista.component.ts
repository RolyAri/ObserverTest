import { Component } from '@angular/core';
import { Persona, PersonasService } from '../personas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  arrayPersonas: Persona[] = [];

  constructor(private personaService: PersonasService){
  }

  ngOnInit(){
    this.personaService.getPersonas$().subscribe(personas =>{
      this.arrayPersonas=personas;
    })
  }
  
}
