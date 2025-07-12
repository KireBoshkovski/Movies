import { RouterModule } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap, Subject } from 'rxjs';
import { Show } from '../../interfaces/show';
import { ShowService } from '../../services/show-service';
import { Pagination } from '../pagination/pagination';
import { ShowItem } from '../show-item/show-item';

@Component({
    selector: 'search',
    imports: [RouterModule, Pagination, ShowItem],
    templateUrl: './search.html',
    styleUrl: './search.css',
})
export class Search implements OnInit {
    service = inject(ShowService);

    query: string = '';
    year: string | undefined;
    type: string | undefined;

    results: Show[] | undefined;

    currentPage = 1;
    totalResults = 0;
    resultsPerPage = 10;

    private queryChanged$ = new Subject<{
        query: string;
        year?: string;
        type?: string;
        page?: number;
    }>();

    ngOnInit() {
        this.queryChanged$
            .pipe(
                debounceTime(400),
                distinctUntilChanged(),
                switchMap(() =>
                    this.service.search(
                        this.query,
                        this.type,
                        this.year,
                        this.currentPage
                    )
                )
            )
            .subscribe((response) => {
                this.results = response.Search;
                this.totalResults = response.totalResults;
            });
    }

    search() {
        if (this.query) {
            this.queryChanged$.next({
                query: this.query,
                year: this.year,
                type: this.type,
                page: this.currentPage,
            });
        }
    }

    onTitleInput(query: string) {
        this.query = query;
        this.search();
    }

    onYearChange(year: string) {
        this.year = year;
        this.search();
    }

    onTypeChange(type: string) {
        this.type = type || undefined;
        this.search();
    }

    onPageChange(page: number) {
        this.currentPage = page;
        this.search();
    }
}
