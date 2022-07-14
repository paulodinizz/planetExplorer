import { Injectable } from "@angular/core";
import { Planeta } from "./planeta";
@Injectable({
  providedIn: 'root'
})
export class TamanhoPlanetaService{
  OTamanhoDoPlanetaEh(planeta: Planeta):string{

    if(planeta.diam >= 12742) return "Grande";
    else return "Pequeno";
  }
}