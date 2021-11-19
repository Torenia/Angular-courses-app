import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from './loading-block.service';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.scss']
})

export class LoadingBlockComponent implements OnInit {
  show = new Observable<boolean>();

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.show = this.loaderService.getLoaderState()
      .pipe(pluck('show'));
  }
}
