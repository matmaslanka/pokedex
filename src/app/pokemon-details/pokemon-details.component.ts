import { Component, Input, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonDetails } from '../models';



@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent {
  @Input({required: true}) pokemonDetails!: PokemonDetails;
  
  private httpClient = inject(HttpClient);
  pokemonDetailed = {};

  ngOnInit(){
    console.log(this.pokemonDetails);
  }


}
