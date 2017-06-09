import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

declare var jQuery:any;

@Pipe({
  name: 'ageity',
  pure: false
})


export class AgePipe implements PipeTransform {
  transform(input: Animal[], animalAge){
    var output: Animal[] = [];
    if (animalAge === "juvenile"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].age === "juvenile") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (animalAge === "adult"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].age === "adult") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (animalAge === "all"){
      return input;
    }
  }
}
