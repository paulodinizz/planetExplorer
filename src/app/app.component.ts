import { Component, VERSION } from '@angular/core';
import { Planeta } from './model/planeta';
import { PlanetaService } from './model/planeta.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  planetaSelecionado: Planeta;

  planetas: Planeta[];

  constructor(
    private planetaService: PlanetaService
  ){}


  ngOnInit(){
    this.planetas = this.planetaService.getPlanetas();
  }

  clickOnPlanet(planeta:Planeta){
    this.planetaSelecionado = planeta;
  }
}
