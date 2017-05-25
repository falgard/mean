import { Router }   from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { ConsultantsService } from '../consultants.service';
import { Consultant } from '../models/consultant';

import { SkillsService } from '../skills.service';
import { Skill } from '../models/skill';


@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.css']
})
export class ConsultantsComponent implements OnInit {

  consultants: Consultant[];
  skills: Skill[];

  constructor(
  	private router: Router,
  	private consultantsService: ConsultantsService,
  	private skillsService: SkillsService) { }

	ngOnInit(): void {
		this.getConsultants();
		this.getSkills();
	}

	getSkills(): void {
		this.skillsService.getSkills()
			.then(skills => {
				this.skills = skills;
			});
	}

	gotoDetail(): void {
		var _id = "591382db2a7124119e56039e";
		this.router.navigate(['/detail', _id]);
	}

	getConsultants(): void {
		this.consultantsService.getConsultants()
			.then(consultants => {
				this.consultants = consultants;
			});
	}

	add(name: string, age: number, role: string, skills: Skill[]): void {
		name = name.trim();
		if (!name) { return; }

		this.consultantsService.create(name, age, role, this.skills)
			.then(consultant => {
				this.consultants.push(consultant);
			});
	}

}
