import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paginationList';
  filterList = '';
  fieldBody = ['id','title','date'];
  head = [
    {
      id: 'ID',
      title: 'Nombre',
      date: 'Fecha'
    }
  ]
//   body = [
//     {
//       "id": 1,
//       "title": "id1",
//       "date": "04/06/2021"
//     },
//     {
//       "id": 2,
//       "title": "id2",
//       "date": "05/06/2021"
//     }
// ]
  body = [
    {
      "id": 1,
      "title": "id1",
      "date": "04/06/2021"
    },
    {
      "id": 2,
      "title": "id2",
      "date": "05/06/2021"
    },
    {
      "id": 3,
      "title": "id3",
      "date": "06/06/2021"
    },
    {
      "id": 4,
      "title": "id4",
      "date": "07/06/2021"
    },
    {
      "id": 5,
      "title": "id5",
      "date": "08/06/2021"
    },
    {
      "id": 6,
      "title": "id6",
      "date": "09/06/2021"
    },
    {
      "id": 7,
      "title": "id7",
      "date": "10/06/2021"
    },
    {
      "id": 8,
      "title": "id8",
      "date": "11/06/2021"
    },
    {
      "id": 9,
      "title": "id9",
      "date": "12/06/2021"
    },
    {
      "id": 10,
      "title": "id10",
      "date": "13/06/2021"
    },
    {
      "id": 11,
      "title": "id11",
      "date": "21/06/2021"
    },
    {
      "id": 12,
      "title": "id12",
      "date": "22/06/2021"
    },
    {
      "id": 13,
      "title": "id12",
      "date": "13/06/2021"
    },{
      "id": 14,
      "title": "id12",
      "date": "14/06/2021"
    },    {
      "id": 15,
      "title": "id12",
      "date": "15/06/2021"
    },{
      "id": 16,
      "title": "id12",
      "date": "16/06/2021"
    },    {
      "id": 17,
      "title": "id12",
      "date": "17/06/2021"
    },{
      "id": 18,
      "title": "id12",
      "date": "18/06/2021"
    },    {
      "id": 19,
      "title": "id12",
      "date": "19/06/2021"
    },{
      "id": 20,
      "title": "id12",
      "date": "20/06/2021"
    },    {
      "id": 21,
      "title": "id12",
      "date": "21/06/2021"
    },{
      "id": 22,
      "title": "id12",
      "date": "22/06/2021"
    },    {
      "id": 23,
      "title": "id12",
      "date": "23/06/2021"
    },{
      "id": 24,
      "title": "id12",
      "date": "24/06/2021"
    }

  ]

  propagar(event: any) {
    console.log(JSON.stringify(event))
  }

}
