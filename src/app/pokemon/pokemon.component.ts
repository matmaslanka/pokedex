import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../models';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  @Input({required:true}) pokemon!: Pokemon;
  @Output() selectedPokemon = new EventEmitter<string>();

  onSelectedPokemon() {
    this.selectedPokemon.emit(this.pokemon.url);
  }
}
