import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Consultant } from './models/consultant';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ConsultantsService {

	private apiUrl = 'http://localhost:3000/api/consultants';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getConsultants(): Promise<Consultant[]> {
		return this.http
			.get(this.apiUrl, {headers: this.headers})
			.toPromise()
			.then(res => res.json() as Consultant[])
			.catch(this.handleError);
	}

	create(name: string, age: number, role: string): Promise<Consultant> {
		return this.http
			.post(this.apiUrl, JSON.stringify({name: name, age: age, role: role}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data as Consultant)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
