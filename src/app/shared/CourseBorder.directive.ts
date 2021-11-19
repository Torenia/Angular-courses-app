import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCourseBorderColor]'
})
export class CourseBorderColorDirective implements OnInit {
  @Input() creationDate: Date;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const currentDate = new Date(Date.now());
    const twoWeeksBeforeCurrentDate = new Date(Date.now() - 12096e5);
    if (this.creationDate < currentDate && this.creationDate >= twoWeeksBeforeCurrentDate) {
      this.elementRef.nativeElement.classList.add('green');
    } else if (this.creationDate > currentDate) {
      this.elementRef.nativeElement.classList.add('blue');
    }
  }
}

