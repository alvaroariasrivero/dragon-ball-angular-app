import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../models/characters-array.model';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  
  @Input() characterData?: Character;
  @Output() favoriteSelected = new EventEmitter<Character>();

  markAsFavorite() {
    this.favoriteSelected.emit(this.characterData);
  }

}
