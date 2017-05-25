import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { ConsultantsService } from '../consultants.service';
import { Consultant } from '../models/consultant';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-consultant-detail',
  templateUrl: './consultant-detail.component.html',
  styleUrls: ['./consultant-detail.component.css']
})
export class ConsultantDetailComponent implements OnInit {

  @Input() consultant: Consultant;

  constructor(
	private consultantService: ConsultantsService,
	private route: ActivatedRoute,
	private location: Location) { }

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.consultantService.getConsultant(params['id']))
			.subscribe(consultant => this.consultant = consultant);
	}

	goBack(): void {
		this.location.back();
	}

	save(): void {
		this.consultantService.update(this.consultant)
			.then(() => this.goBack());
	}
}
