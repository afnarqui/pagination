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
[![N|Solid](https://trello-attachments.s3.amazonaws.com/60c7f640119a5852ad0d1760/1101x266/a2293e799e40a05ea993bcec2c10277b/image.png)](https://trello-attachments.s3.amazonaws.com/60c7f640119a5852ad0d1760/1101x266/a2293e799e40a05ea993bcec2c10277b/image.png)


