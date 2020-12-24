import { Component, OnInit } from '@angular/core';

interface Menu {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
})
export class MenuComponent implements OnInit {
  listOfData: Menu[] = [
    {
      key: '1',
      name: '系统管理',
      age: 32,
      address: '1'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: '2'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: '3'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
