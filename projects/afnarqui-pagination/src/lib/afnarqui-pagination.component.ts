import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'afnarqui-pagination',
  template: `
  <app-pagination-list (spread)="propagar($event)" [head]="head" [body]="body" [filterList]="filterList" [fieldBody]="fieldBody" [field]="'title'"></app-pagination-list>
  `,
  styles: [
    `
    .Table

{

    display: table;

}

.Title

{

    display: table-caption;

    text-align: center;

    font-weight: bold;

    font-size: larger;

}

.Heading

{

    display: table-row;

    font-weight: bold;

    text-align: center;

}

.Row

{

    display: table-row;

}

.Cell

{

    display: table-cell;

    border: solid;

    border-width: thin;

    padding-left: 5px;

    padding-right: 5px;
    cursor:pointer;

}
    `
  ]
})
export class AfnarquiPaginationComponent implements OnInit {
    @Input() head: any = [];
    @Input() body: any = [];
    @Input() filterList = '';
    @Input() field: string = 'name';
    @Input() fieldBody: any[] = [];
    public page: number = 0;
    public search: string = '';
    public headLocal: any[] = [];
    public bodyLocal: any[] = [];
    @Output() spread = new EventEmitter<any>();
    
    constructor() { }
  
    ngOnInit(): void {
        for (var key in this.head[0]) {
          this.headLocal.push({key})
         }
      }
    
      nextPage() {
        this.page+= 5;
      }
    
      prevPage() {
        if(this.page > 0) {
          this.page-= 5;
        }
      }
    
      selectItems(item: any) {
        this.spread.emit(item);
      }
      propagar(item: any) {
        this.spread.emit(item);
      }

      onSearch(search: string) {
        this.search = search;
    }
}
