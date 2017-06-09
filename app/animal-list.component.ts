import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <label>Sort by Age</label>
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">All</option>
    <option value="juvenile">Juvenile</option>
    <option value="adult">Adult</option>
  </select>
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
  <div class="row" *ngFor="let currentAnimal of childAnimalList | ageity:filterByAgeity">
    <div class="col-sm-3">
      {{currentAnimal.species}} - {{currentAnimal.age}} {{currentAnimal.sex}}
      <input type="image" src="/resources/style/pencil.png" (click)="editButtonHasBeenClicked(currentAnimal)" />
    </div>
    <div class="col-sm-3">
      <span>Date:</span> {{currentAnimal.lastSeen}}<br>
      <span>Location:</span> {{currentAnimal.location}}<br>
      <span>Prevalence:</span> {{currentAnimal.commonality}}
    </div>
    <div class="col-sm-3">
      <span>Diet:</span> {{currentAnimal.diet}} <br>
      <span>Likes:</span> {{currentAnimal.likes}} <br>
      <span>Dislikes:</span> {{currentAnimal.dislikes}}
    </div>
    <div class="col-sm-3">
      <img class="animal-pic" src="{{currentAnimal.picture}}" alt="{{currentAnimal.species}}">
    </div>
  </div>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter;
  filterByAgeity: string = "all";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAgeity = optionFromMenu;
  }
}
