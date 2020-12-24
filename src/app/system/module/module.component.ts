import { Component, OnInit } from '@angular/core';

interface Module {
  key: string;
  name: string;
  code: string;
  desc: string;
  version: string;
  status: string;
}

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.less']
})
export class ModuleComponent implements OnInit {
  listOfData: Module[] = [
    {
      key: '1',
      name: '系统管理',
      code: 'core',
      desc: '用户、角色、组织、模块、菜单、字典、参数',
      version: '1.0',
      status: '正常'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
