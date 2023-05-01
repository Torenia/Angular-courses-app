import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() filter = new EventEmitter<string>();
  private onSearchChange = new Subject<string>();

  constructor() { }

  ngOnInit() {
    const MAX_LENGTH = 3;
    this.onSearchChange.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      map((data: string) => data.trim()),
      filter((data: string) => !data.length || data.length >= MAX_LENGTH),
      tap((data: string) => this.filter.emit(data))
    ).subscribe();
  }
}
