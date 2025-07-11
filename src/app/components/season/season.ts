import { Component, inject, Input } from '@angular/core';
import { SeasonResponse } from '../../interfaces/season-response';
import { ShowService } from '../../services/show-service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'season',
    imports: [CommonModule, RouterModule],
    templateUrl: './season.html',
    styleUrl: './season.css'
})
export class Season {
    seasonData: SeasonResponse | null = null;
    loading = false;

    @Input() selectedSeason: number = 1;

    service = inject(ShowService);
    route = inject(ActivatedRoute);

    season$: Observable<SeasonResponse> | undefined;

    ngOnChanges() {
        this.season$ = this.route.paramMap.pipe(
            switchMap(params => {
                const id = params.get('id');
                return this.service.getSeason(id!, this.selectedSeason);
            })
        );
    }

}
