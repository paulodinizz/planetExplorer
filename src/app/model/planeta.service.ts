import { Injectable } from "@angular/core";
import { Planeta } from "./planeta";
import { TamanhoPlanetaService } from "./tamanhoPlaneta.service";
@Injectable({
  providedIn: 'root'
})
export class PlanetaService{

  private planetas: Planeta[] = [
    {
      nome: 'Terra',
      imagem:'https://drive.google.com/uc?id=1C7HmsPUqT8TkVuZ9OJlQrtG1L_Ho0LH3',
      temp: '15°C',
      diam: 12742,
      dia: '24h',
      ano: '365d',
      curiosidade: 'Daqui a 140 milhões de anos um dia durará 25 horas.'
    },
    {
      nome: 'Marte',
      imagem:'https://drive.google.com/uc?id=1sXfwBgOihDUyN3DJjYBFsIqEpYjRLH5O',
      temp: '-63°C',
      diam: 6779 ,
      dia: '24h',
      ano: '687d',
      curiosidade: 'Daqui a 140 milhões de anos um dia durará 25 horas.'
    },
    {
      nome: 'Vênus',
      imagem:'https://drive.google.com/uc?id=1xtU8E-fjxT1kv1xYZx3vmE4HfCQedTqJ',
      temp: '461°C',
      diam: 12104 ,
      dia: '5.832h',
      ano: '225d',
      curiosidade: 'O planeta gira ao contrário: do leste para o oeste. Assim, o sol nasce do lado oposto ao que estamos acostumados aqui na Terra.'
    },
    {
      nome: 'Sol',
      imagem:'https://drive.google.com/uc?id=1UTVz0wqrJ7aNxoj5auW5vaVqdHcBGdqX',
      temp: '5.504°C',
      diam: 1392700,
      dia: '648h',
      ano: '0d',
      curiosidade: 'A quantidade de energia liberada pelo Sol em um segundo é superior a produzida pelo ser humano em toda a história.'
    },
    {
      nome: 'Netuno',
      imagem:'https://drive.google.com/uc?id=1H0v6gcWbQ82rEN1t4snUJI0Az8aJWc6B',
      temp: '-214°C',
      diam: 49244 ,
      dia: '16h',
      ano: '60.225d',
      curiosidade: 'Em 11 de julho de 2011, Netuno completou sua primeira órbita completa desde sua descoberta em 1846.'
    },
    {
      nome: 'Lua',
      imagem:'https://drive.google.com/uc?id=1tQ6kVljFI09uJ2NdjQo-VqcwtQgom1xZ',
      temp: '-53°C',
      diam: 3476 ,
      dia: '648h',
      ano: '365d',
      curiosidade: 'Por causa de um fenômeno chamado "rotação sincronizada" nós só conseguimos ver uma face da Lua. Ou seja, o tempo em que a Lua gira em torno de seu próprio eixo é igual ao tempo que ela leva para girar ao redor da Terra.'
    }
  ]

  constructor(
    private tamanhoPlanetaService: TamanhoPlanetaService
  ){}
  getPlanetas(): Planeta[]{
    this.planetas = this.planetas.map(planeta=>{
      planeta.tamanho = this.tamanhoPlanetaService.OTamanhoDoPlanetaEh(planeta)
      return planeta;
    })
    return this.planetas;
  }
}