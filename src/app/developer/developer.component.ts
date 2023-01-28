import { Component } from '@angular/core';
import { Developer } from 'src/app/models/developer.models';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
  
developer = new Developer('Alexandre', 'Doucet', 15, 'Male', 'Live in Gagny', [{name: 'Angular', logo:'Hard Coding', site: 'angular.io'}, {name: 'JS', logo:'Low Coding', site: 'javascript.com'}]);

}
