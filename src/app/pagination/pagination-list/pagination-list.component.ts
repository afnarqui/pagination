import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-list',
  templateUrl: './pagination-list.component.html',
  styleUrls: ['./pagination-list.component.scss']
})
export class PaginationListComponent implements OnInit {
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
    // alert(JSON.stringify(item));
    this.spread.emit(item);
  }
  onSearch(search: string) {
    // this.page = 0;
    this.search = search;
}
}
