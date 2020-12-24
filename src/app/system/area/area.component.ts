import { Component, OnInit } from '@angular/core';

interface Area {
  key: string;
  name: string;
  type: string;
  note: string;
  sort: number;
  status: string;
  updateTime: string;
}

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.less']
})
export class AreaComponent implements OnInit {

  listOfData: Area[] = [
    {
      key: '1',
      name: '西安市',
      type: '省份直辖市',
      note: '1',
      sort: 32,
      status: '正常',
      updateTime: '2019-07-14 06:55'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
