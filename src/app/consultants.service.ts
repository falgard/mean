import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Consultant } from './models/consultant';
import { Skill } from './models/skill';

import { ElasticSearchService } from './elasticsearch.service';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ConsultantsService {

	private apiUrl = 'http://localhost:3000/api/consultants';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(
		private http: Http,
		private es: ElasticSearchService) { }

	getConsultants(): Promise<Consultant[]> {
		return this.es
		.search({})
		.then(response => this.getHits(response))
		.catch(this.handleError);	
	}

	getConsultants2(): Promise<Consultant[]> {
		return this.http
			.get(this.apiUrl, {headers: this.headers})
			.toPromise()
			.then(res => res.json() as Consultant[])
			.catch(this.handleError);
	}

	getConsultant(id: string): Promise<Consultant> {
		return this.es
			.get(id)
			.then(response => this.extractConsultant(response))
			.catch(this.handleError);
	}

	getConsultantFromDB(id: string): Promise<Consultant> {
		const url = `${this.apiUrl}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json() as Consultant)
			.catch(this.handleError);
	}

	update(consultant: Consultant): Promise<Consultant> {
		const url = `${this.apiUrl}/${consultant.id}`;
		return this.http
			.put(url, JSON.stringify(consultant), {headers: this.headers})
			.toPromise()
			.then(() => consultant)
			.catch(this.handleError);
	}

	create(name: string, age: number, role: string, skills: Skill[]): Promise<Consultant> {
		return this.http
			.post(this.apiUrl, JSON.stringify({name: name, age: age, role: role, skills: skills}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data as Consultant)
			.catch(this.handleError);
	}

	delete(id: string): Promise<void> {
		const url = `${this.apiUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}

	private getHits(json: any): any {
		
		console.log(json);
		
		var total = json.hits.total;
		var hits = json.hits.hits;

		if (total > 0)
			return hits.map(this.extractConsultant);
		else 
			return [];
	}

	private extractConsultant(json: any): any {
		var result = json._source as Consultant;
		if (result) {
			result.id = json._id;
			return result;
		} else {
			return new Consultant();
		}
		 
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
