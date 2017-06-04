import { Component, OnInit } from '@angular/core';

import { ElasticSearchService } from '../elasticsearch.service';
import { ConsultantsService } from '../consultants.service';

import { Consultant } from '../models/consultant';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

	consultant: Consultant;

  constructor(
  	private es: ElasticSearchService,
  	private consultantsService: ConsultantsService
  	) { 
  }

  ngOnInit() {
  	var _id = "59347c1190eebe28c4ad3b7c";
  	this.consultant = this.consultantsService.getConsultantFromDB(_id);

  }

	update(): Promise<string> {
		return this.es
			.addToIndex(this.consultant.id)
			.then(response => response.json())
			.catch(this.handleError);	
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
