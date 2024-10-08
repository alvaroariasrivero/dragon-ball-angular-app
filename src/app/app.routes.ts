import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SearchFormComponent } from './pages/search-form/search-form.component';
import { CharacterComponent } from './pages/character/character.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'favorites', component: FavoritesComponent},
    {path: 'search', component: SearchFormComponent},
    {path: 'character/:characterID', component: CharacterComponent}
];
