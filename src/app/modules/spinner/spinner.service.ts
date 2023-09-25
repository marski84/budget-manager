import {Injectable} from '@angular/core';
import {BehaviorSubject, map, scan} from "rxjs";

@Injectable()
export class SpinnerService {

  private loading = new BehaviorSubject<number>(0);
  readonly isLoading$ = this.loading.pipe(
    scan((count, value) => count + value, 0),
    map(count => count > 0)
  );

  constructor() {
  }

  show() {
    this.loading.next(1);
  }

  hide() {
    this.loading.next(-1);
  }

}
