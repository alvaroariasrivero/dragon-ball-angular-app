import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GetCharacterService } from '../../services/get-character.service';
import { Character } from '../../models/characters-array.model';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { FavoriteCharactersService } from '../../services/favorite-characters.service';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CharacterCardComponent],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css'
})
export class SearchFormComponent {

  characterForm: FormGroup;
  characterList!: Character[];
  private _characterApiService = inject(GetCharacterService);

  constructor(
    private formBuilder: FormBuilder,
    private favoriteService: FavoriteCharactersService
  ) {
    this.characterForm = this.formBuilder.group({characterName: ['', Validators.required]});
  }

  onFavoriteSelected(character: Character) {
    this.favoriteService.addFavorite(character);
  }

  sendData(){
    this._characterApiService.getCharacterByName(this.characterForm.value.characterName).subscribe((data:Character[])=>{
      this.characterList = data;
    })
  }

}
