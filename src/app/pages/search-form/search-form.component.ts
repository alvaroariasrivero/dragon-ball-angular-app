import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css'
})
export class SearchFormComponent {

  characterForm: FormGroup;

  constructor(private form: FormBuilder){
    this.characterForm = this.form.group({
      characterName:['', Validators.required]
    })
  }

  sendData(){
    console.log(this.characterForm.value)
  }

}
