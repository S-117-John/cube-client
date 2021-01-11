import { Component, OnInit } from '@angular/core';

interface DataItem {
  name: string;
  age: number;
  street: string;
  building: string;
  number: number;
  companyAddress: string;
  companyName: string;
  gender: string;
}

@Component({
  selector: 'app-code-config',
  templateUrl: './code-config.component.html',
  styleUrls: ['./code-config.component.less']
})
export class CodeConfigComponent implements OnInit {

  constructor() { }
  listOfData: DataItem[] = [];
  filterName = [
    { text: 'Joe', value: 'Joe' },
    { text: 'John', value: 'John' }
  ];
  sortAgeFn = (a: DataItem, b: DataItem) => a.age - b.age;
  nameFilterFn = (list: string[], item: DataItem) => list.some(name => item.name.indexOf(name) !== -1);
  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M'
      });
    }
    this.listOfData = data;
  }


}
