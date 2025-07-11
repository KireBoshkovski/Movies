import { Component, OnInit, inject } from '@angular/core';
import { ShowService } from '../../services/show-service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, Observable } from 'rxjs';
import { ShowDetails } from '../../interfaces/details';
import { CommonModule } from '@angular/common';
import { Season } from "../season/season";

@Component({
    selector: 'show',
    imports: [CommonModule, Season],
    templateUrl: './details.html',
    styleUrl: './details.css'
})
export class Details implements OnInit {
    service = inject(ShowService);
    route = inject(ActivatedRoute);

    selectedSeason = 1;

    show$: Observable<ShowDetails> | undefined;

    ngOnInit() {
        this.show$ = this.route.paramMap.pipe(
            switchMap(params => {
                const id = params.get('id');
                return this.service.getById(id!);
            })
        );
    }

    getSeasons(total: string): number[] {
        const count = parseInt(total, 10);
        return Array.from({ length: count }, (_, i) => i + 1);
    }

    onSeasonChange(season: string) {
        if (season) {
            this.selectedSeason = +season;
        }
    }
}
