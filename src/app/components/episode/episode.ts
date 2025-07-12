import { Component, inject, OnInit } from '@angular/core';
import { ShowService } from '../../services/show-service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ShowDetails } from '../../interfaces/details';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'episode',
    imports: [CommonModule],
    templateUrl: './episode.html',
    styleUrl: './episode.css',
})
export class Episode implements OnInit {
    service = inject(ShowService);
    route = inject(ActivatedRoute);

    episode$: Observable<ShowDetails> | undefined;

    ngOnInit() {
        this.episode$ = this.route.paramMap.pipe(
            switchMap((params) => {
                const id = params.get('id');
                return this.service.getById(id!);
            })
        );
    }
}
