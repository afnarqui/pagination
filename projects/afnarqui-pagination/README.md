# AfnarquiPagination

permite filtrar según la información que recibe y paginar la misma

## Implementación

### app.module.ts
````typescript
import { AfnarquiPaginationModule } from 'afnarqui-pagination';
  imports: [
    AfnarquiPaginationModule
  ],
````

### app.component.html
````html
<afnarqui-pagination [head]="head" [body]="body" (spread)="propagar($event)"  [filterList]="filterList" [fieldBody]="fieldBody" [field]="'title'" ></afnarqui-pagination>
````

### app.component.ts
````typescript
  filterList = '';
  fieldBody = ['id','title','date'];
  head = [
    {
      id: 'id',
      title: 'title',
      date: 'date'
    }
  ]

  body = [
    {
      "id": 1,
      "title": "id1",
      "date": "27/06/2021"
    },
    {
      "id": 2,
      "title": "id2",
      "date": "27/06/2021"
    }
    ]

  propagar(event: any) {
    console.log(JSON.stringify(event))
  }
````

