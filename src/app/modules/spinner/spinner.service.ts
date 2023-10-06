import {Injectable} from '@angular/core';
import {BehaviorSubject, map, scan} from 'rxjs';

export interface spinnerState {
    [key: string]: boolean
}

@Injectable()
export class SpinnerService {
    activeSpinners: spinnerState[] = [];
    private loading = new BehaviorSubject<number>(0); //{key: boolean}
    readonly isLoading$ = this.loading.pipe(
        scan((count, value) => count + value, 0),
        map((count) => count > 0)
    );


    show() {
        // key
        this.loading.next(1);
    }

    hide() {
        // key
        this.loading.next(-1);
    }
}
