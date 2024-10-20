import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { Observable } from 'rxjs';
import { Pokemon, PokemonDetails } from './models';


const pokesUrl = 'https://pokeapi.co/api/v2/pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PokemonComponent, PokemonDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pokemons: Pokemon[] = [];
  pokemonDetail: any = {};
  isPokemonProvided: boolean = false;
  private httpClient = inject(HttpClient);

  ngOnInit() {
    this.getListOfPokemons();
  }

  onSelectedPokemon(url: string) {
    this.getPokemonDetailsAll(url);
    this.isPokemonProvided = true;
  }

  private getListOfPokemons(){
    this.getPokemons().subscribe((data: any) => {
      this.pokemons = data.results;  
     })
  }

  private getPokemonDetailsAll(url: string) {
    this.getPokemonDetails(url).subscribe((data: any) => {
        this.pokemonDetail = {
          name: data.name,
          image: data.sprites.front_default,
          type: data.types[0].type.name,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          speed: data.stats[5].base_stat,   
        }
    })
      
  }

  private getPokemons(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(pokesUrl);
  }

  private getPokemonDetails(url: string) : Observable<PokemonDetails> {
    return this.httpClient.get<PokemonDetails>(url);
  }
  
}
