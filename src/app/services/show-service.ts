import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowResponse } from '../interfaces/show-response';
import { ShowDetails } from '../interfaces/details';
import { SeasonResponse } from '../interfaces/season-response';

@Injectable({
    providedIn: 'root',
})
export class ShowService {
    http = inject(HttpClient);

    private api = 'http://www.omdbapi.com/';
    private apiKey = '37fe0698';

    search(
        query: string,
        type?: string,
        year?: string,
        page?: number
    ): Observable<ShowResponse> {
        let params = new HttpParams()
            .set('apikey', this.apiKey)
            .set('s', query);

        if (year) {
            params = params.set('y', year);
        }

        if (type) {
            params = params.set('type', type);
        }

        if (page) {
            params = params.set('page', page.toString());
        }

        console.log(params);
        return this.http.get<ShowResponse>(this.api, { params });
    }

    getById(id: string): Observable<ShowDetails> {
        let params = new HttpParams().set('apikey', this.apiKey).set('i', id);

        console.log(params);

        return this.http.get<ShowDetails>(this.api, { params });
    }

    getSeason(id: string, season: number): Observable<SeasonResponse> {
        let params = new HttpParams()
            .set('apikey', this.apiKey)
            .set('i', id)
            .set('Season', season.toString());

        console.log(params);

        return this.http.get<SeasonResponse>(this.api, { params });
    }
}
