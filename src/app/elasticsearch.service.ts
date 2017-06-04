import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, SearchResponse } from 'elasticsearch';

@Injectable()
export class ElasticSearchService {

  	private _client: Client;
  	private _index: 'consultants-test';
  	private _type: 'consult';

    constructor() {
        if (!this._client) this._connect();
    }

    private _connect() {
        this._client = new Client({
            host: 'http://localhost:9200',
            log: 'trace'
        });
    }

    get(id: string): any {
		return this._client.get({
		  index: 'consultants-test',
		  type: 'consultant',
		  id: id
		})
    }

    search(value): any {
        if (value) {
            console.log(value)
            return this._client.search({
                index: this._index //, q: `title:${value}`
            })
        } else {
            return Promise.resolve({})
        }
    }

    addToIndex(value): any {
        return this._client.create(value)
    }

    isAvailable(): any {
        return this._client.ping({
            requestTimeout: Infinity,
            hello: "elasticsearch!"
        });
    }

}

