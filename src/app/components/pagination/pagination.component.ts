import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <div class="pagination" >
      <!-- add condition *ngIf="page > 1" -->
        <mat-icon aria-hidden="false" aria-label="Previous page" fontIcon="navigate_before"
          (click)="onChangePage(-1)"
        ></mat-icon>
          <span>{{ page }}</span>
        <mat-icon aria-hidden="false" aria-label="Next page" fontIcon="navigate_next"
          (click)="onChangePage(1)"></mat-icon>
      </div>
  `,
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() page!: number;
  @Output() changePageEvent = new EventEmitter<number>();

  constructor() { }

  onChangePage(addend: number) {
    console.log('called onChangePage()');
    this.page = this.page + (addend);
    console.log('this.page', this.page);
    // this.passQuery(this.playerName);
    // this.setPage();
  }
  
  setNewPage(value: number) {
    this.changePageEvent.emit(value);
  }
  

}
