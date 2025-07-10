import { Component, OnInit, inject } from '@angular/core';
import { ShowService } from '../../services/show-service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, Observable } from 'rxjs';
import { ShowDetails } from '../../interfaces/details';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'show',
    imports: [CommonModule],
    templateUrl: './details.html',
    styleUrl: './details.css'
})
export class Details implements OnInit {
    service = inject(ShowService);
    route = inject(ActivatedRoute);

    show$: Observable<ShowDetails> | undefined;

    ngOnInit() {
        this.show$ = this.route.paramMap.pipe(
            switchMap(params => {
                const id = params.get('id');
                return this.service.getById(id!);
            })
        );
    }
}
