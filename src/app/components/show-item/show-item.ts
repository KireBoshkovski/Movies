import { Component, Input } from '@angular/core';
import { Show } from '../../interfaces/show';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'show-item',
    imports: [RouterModule],
    templateUrl: './show-item.html',
    styleUrl: './show-item.css',
})
export class ShowItem {
    @Input() show!: Show;
}
