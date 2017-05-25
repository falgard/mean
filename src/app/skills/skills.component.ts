import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';

import { Skill } from '../models/skill';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];

  constructor(private skillsService: SkillsService) { }

	ngOnInit(): void {
		this.getSkills();
	}

	getSkills(): void {
		this.skillsService.getSkills()
			.then(skills => {
				this.skills = skills;
			});
	}
}