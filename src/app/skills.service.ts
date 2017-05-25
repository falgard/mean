import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Skill } from './models/skill';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class SkillsService {

	private apiUrl = 'http://localhost:3000/api/skills';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getSkills(): Promise<Skill[]> {
		return this.http
			.get(this.apiUrl, {headers: this.headers})
			.toPromise()
			.then(res => res.json() as Skill[])
			.catch(this.handleError);
	}

	create(name: string, type: string): Promise<Skill> {
		return this.http
			.post(this.apiUrl, JSON.stringify({name: name, type: type}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data as Skill)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
