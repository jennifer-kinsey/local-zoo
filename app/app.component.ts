import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>Orlando Wetlands Park</h1>
  </div>
  <div class="container">
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (editButtonClickedSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  selectedAnimal = null;
  masterAnimalList: Animal[] = [
    new Animal('Hooded Merganser', 'adult', 'fish', 'Lake Searcy', 'male', 'mollusks', 'garbage', '6/8/17', 'uncommon', '/resources/style/duck.jpg'),
    new Animal('Annihinga', 'adult', 'young alligators', 'Cypress Swamp', 'female', 'juicy leeches', 'getting alligators stuck in throat', '6/8/17', 'common', '/resources/style/anhinga.jpg'),
    new Animal('Eastern Towhee', 'adult', 'mosquitos, wild blackberries', 'Limpkin Lane', 'female', 'succulent snails', 'noisy gallinules', '6/8/17', 'common', '/resources/style/towhee.jpg'),
    new Animal('Ring-billed Gull', 'juvenile', 'rodents, eggs', 'Alligator Alley', 'male', 'preening', 'tourists', '4/1/17', 'rare', '/resources/style/gull.jpg')
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing(){
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
