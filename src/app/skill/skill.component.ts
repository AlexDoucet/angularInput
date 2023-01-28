import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';
import { Developer } from 'src/app/models/developer.models';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})

export class SkillComponent {

@Input() skillC : any;


constructor(){}

}



