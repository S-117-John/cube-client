import { Component, OnInit } from '@angular/core';
interface DictType {
  key: string;
  name: string;
  type: string;
  system: string;
  updateTime: string;
  note: string;
  status: string;
}
@Component({
  selector: 'app-dict-type',
  templateUrl: './dict-type.component.html',
  styleUrls: ['./dict-type.component.less']
})
export class DictTypeComponent implements OnInit {
  listOfData: DictType[] = [
    {
      key: '1',
      name: '流程业务状态',
      type: 'bpm_biz_status',
      system: '是',
      updateTime: '2020-01-02 08:49',
      note: '',
      status: '正常'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
