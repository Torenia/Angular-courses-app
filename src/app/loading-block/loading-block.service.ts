import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { LoaderState } from './loader';

@Injectable({
  providedIn: 'root'
})

export class LoaderService {

  private loaderSubject = new Subject<LoaderState>();
  getLoaderState(): Observable<LoaderState> { return this.loaderSubject.asObservable(); }

  constructor() { }

  show() {
    this.loaderSubject.next(<LoaderState> { show: true });
  }

  hide() {
    this.loaderSubject.next(<LoaderState> { show: false });
  }
}
