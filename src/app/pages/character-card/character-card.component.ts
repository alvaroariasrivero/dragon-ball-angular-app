import { Component, Input, EventEmitter, Output, OnInit, inject } from '@angular/core';
import { Character } from '../../models/characters-array.model';
import { FavoriteCharactersService } from '../../services/favorite-characters.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent implements OnInit {

  buttonValue: string = ''
  
  @Input() characterData?: Character;
  @Output() favoriteSelected = new EventEmitter<Character>();

  private _favoriteService = inject(FavoriteCharactersService);

  ngOnInit(): void {
    this.updateButtonValue()
  }

  favoriteButton() {
    this.favoriteSelected.emit(this.characterData);
    this.updateButtonValue();
  }

  private updateButtonValue() {
    if (this.characterData) {
      const isFavorite = this._favoriteService.getFavorites().some(fav => fav.id === this.characterData!.id);
      this.buttonValue = isFavorite ? 'Eliminar de favoritos' : 'Añadir a favoritos';
    }
  }

}
