import { Component, OnInit } from '@angular/core';
import { ConsultantsService } from '../consultants.service';
import { Consultant } from '../models/consultant';

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.css']
})
export class ConsultantsComponent implements OnInit {

  consultants: Consultant[];

  constructor(private consultantsService: ConsultantsService) { }

	ngOnInit(): void {
		this.getConsultants();
	}

	getConsultants(): void {
		this.consultantsService.getConsultants()
			.then(consultants => {
				this.consultants = consultants;
			});
	}

	add(name: string, age: number, role: string): void {
		name = name.trim();
		if (!name) { return; }

		this.consultantsService.create(name, age, role)
			.then(consultant => {
				this.consultants.push(consultant);
			});
	}

}
