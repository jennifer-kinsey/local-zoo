import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <div class="row">
    <div class="col-sm-3 bold">
      Sighting
    </div>
    <div class="col-sm-3 bold">
      Specifics
    </div>
    <div class="col-sm-3 bold">
      About Species
    </div>
    <div class="col-sm-3 bold">
      Picture
    </div>
  </div>
  <div class="row" *ngFor="let currentAnimal of childAnimalList">
    <div class="col-sm-3 bold">
      {{currentAnimal.species}} - {{currentAnimal.age}} {{currentAnimal.sex}}
      <input type="image" src="/resources/style/pencil.png" (click)="editButtonHasBeenClicked(currentAnimal)" />
    </div>
    <div class="col-sm-3 bold">
      Date: {{currentAnimal.lastSeen}}
      Location: {{currentAnimal.location}}
      Prevalence: {{currentAnimal.commonality}}
    </div>
    <div class="col-sm-3 bold">
      Diet: {{currentAnimal.diet}}
      Likes: {{currentAnimal.likes}}
      Dislikes: {{currentAnimal.dislikes}}
    </div>
    <div class="col-sm-3 bold">
      {{currentAnimal.picture}}
    </div>
  </div>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter;

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
